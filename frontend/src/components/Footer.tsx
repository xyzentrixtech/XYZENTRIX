import { useEffect, useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa6";
import { getCompanyProfile } from "../services/api";

type CompanyProfile = {
  company_name: string;
  tagline: string;
  email: string;
  phone: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  x_twitter: string;
  youtube: string;
  logo?: string;
};

function Footer() {
  const currentYear = new Date().getFullYear();

  const [company, setCompany] = useState<CompanyProfile>({
    company_name: "XYZENTRIX",
    tagline: "Imagine What's Next.",
    email: "",
    phone: "",
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    x_twitter: "",
    youtube: "",
    logo: "",
  });

  useEffect(() => {
    async function loadCompany() {
      try {
        const data = await getCompanyProfile();
        setCompany(data);
      } catch (error) {
        console.error("Failed to load company profile:", error);
      }
    }

    loadCompany();
  }, []);

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: company.linkedin, name: "LinkedIn" },
    { icon: <FaInstagram />, url: company.instagram, name: "Instagram" },
    { icon: <FaXTwitter />, url: company.x_twitter, name: "X" },
    { icon: <FaFacebookF />, url: company.facebook, name: "Facebook" },
    { icon: <FaYoutube />, url: company.youtube, name: "YouTube" },
  ].filter((item) => item.url);

  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4">
            {company.logo ? (
              <img
                src={`http://127.0.0.1:8000${company.logo}`}
                alt={company.company_name}
                className="h-14 w-14 rounded-xl border border-[#39FF14]/30 object-contain"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#39FF14] text-xl font-bold text-black">
                X
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold text-[#39FF14]">
                {company.company_name}
              </h3>
              <p className="text-sm text-gray-400">{company.tagline}</p>
            </div>
          </div>

          <p className="mt-6 max-w-sm leading-7 text-gray-400">
            We build AI-powered Web Applications, ERP, CRM, AI Agents,
            Mobile Apps, Cyber Security, and Cloud Solutions for modern
            businesses.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-xl font-semibold">Contact</h4>

          <div className="space-y-4 text-gray-400">
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 transition hover:text-[#39FF14]"
              >
                <FaEnvelope className="text-[#39FF14]" />
                {company.email}
              </a>
            )}

            {company.phone && (
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-3 transition hover:text-[#39FF14]"
              >
                <FaPhone className="text-[#39FF14]" />
                {company.phone}
              </a>
            )}

            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-[#39FF14]"
              >
                <FaGlobe className="text-[#39FF14]" />
                {company.website.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-5 text-xl font-semibold">Follow Us</h4>

          {socialLinks.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-white/5 text-xl text-gray-300 transition-all duration-300 hover:border-[#39FF14] hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Social profiles will appear here once added from the admin panel.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} {company.company_name}. All Rights Reserved.
          </p>

          <p className="text-gray-600">
            Built with by {company.company_name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;