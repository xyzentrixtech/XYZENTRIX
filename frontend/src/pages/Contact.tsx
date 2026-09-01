import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendContactMessage } from "../services/api";

function Contact() {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get("subject") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialSubject,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await sendContactMessage(formData);

      setSuccess("Your message has been sent successfully.");

      // Keep the subject if it came from XAi
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: initialSubject,
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Contact Us
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Let's Build Something Amazing.
        </h1>

        <p className="mt-6 text-gray-400">
          Tell us about your project and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-700 bg-white/5 p-4 outline-none focus:border-[#39FF14]"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-700 bg-white/5 p-4 outline-none focus:border-[#39FF14]"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-700 bg-white/5 p-4 outline-none focus:border-[#39FF14]"
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-700 bg-white/5 p-4 outline-none focus:border-[#39FF14]"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-700 bg-white/5 p-4 outline-none focus:border-[#39FF14]"
          />

          {success && (
            <div className="rounded-lg border border-green-500 bg-green-500/10 p-4 text-green-400">
              {success}
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-500 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#39FF14] px-6 py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;