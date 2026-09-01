const highlights = [
  {
    title: "AI-First Approach",
    description:
      "We build intelligent software powered by AI, Machine Learning, and Agentic AI.",
  },
  {
    title: "End-to-End Development",
    description:
      "From UI/UX to Web, Mobile, ERP, CRM, and Cloud deployment under one roof.",
  },
  {
    title: "Security by Design",
    description:
      "Cyber Security best practices are integrated into every solution we deliver.",
  },
];

const stats = [
  { value: "13+", label: "Core Services" },
  { value: "AI", label: "Powered Solutions" },
  { value: "24/7", label: "Innovation Mindset" },
  { value: "∞", label: "Future Ready" },
];

function WhyChoose() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          We don't just build software—we build the future.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          XYZENTRIX combines AI innovation, modern engineering, cloud
          infrastructure, and business-focused thinking to create digital
          products that scale with your business.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#39FF14]"
            >
              <h3 className="text-xl font-semibold text-[#39FF14]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-800 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <div className="text-4xl font-bold text-[#39FF14]">
                {stat.value}
              </div>

              <p className="mt-3 text-sm uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;