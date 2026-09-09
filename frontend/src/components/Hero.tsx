import { useEffect, useState } from "react";
import { getHealthStatus, getCompanyProfile } from "../services/api";

type HealthResponse = {
  status: string;
  company: string;
  message: string;
};

type CompanyResponse = {
  company_name: string;
  tagline: string;
  hero_active: boolean;
  hero_title: string;
  hero_subtitle: string;
  hero_primary_button: string;
  hero_secondary_button: string;
  hero_image: string | null;
};

function Hero() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [isConnected, setIsConnected] = useState(false);

  const [companyName, setCompanyName] = useState("XYZENTRIX");
  const [tagline, setTagline] = useState("Imagine What's Next.");

  const [heroActive, setHeroActive] = useState(true);
  const [heroTitle, setHeroTitle] = useState("AI-Powered Digital Solutions");
  const [heroSubtitle, setHeroSubtitle] = useState(
    "Building intelligent websites, automation, and AI solutions for modern businesses."
  );
  const [heroButton, setHeroButton] = useState("Get Started");
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    async function checkBackend() {
      try {
        const data: HealthResponse = await getHealthStatus();

        if (data.status === "healthy") {
          setBackendStatus("Backend Connected");
          setIsConnected(true);
        }
      } catch {
        setBackendStatus("Backend Offline");
        setIsConnected(false);
      }
    }

    async function loadCompany() {
      try {
        const company: CompanyResponse = await getCompanyProfile();

        setCompanyName(company.company_name || "XYZENTRIX");
        setTagline(company.tagline || "Imagine What's Next.");
        setHeroActive(company.hero_active ?? true);
        setHeroTitle(company.hero_title || "AI-Powered Digital Solutions");
        setHeroSubtitle(
          company.hero_subtitle ||
            "Building intelligent websites, automation, and AI solutions for modern businesses."
        );
        setHeroButton(company.hero_primary_button || "Get Started");
        setHeroImage(company.hero_image || "");
      } catch (error) {
        console.error("Failed to load company profile:", error);
      }
    }

    checkBackend();
    loadCompany();
  }, []);

  const getImageUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;

    const mediaBase = import.meta.env.VITE_MEDIA_URL || "";
    return `${mediaBase}${url}`;
  };

  if (!heroActive) return null;

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black px-6 text-white">
      <div className="max-w-5xl text-center">
        {/* Backend Status */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
            isConnected
              ? "border-green-500 bg-green-500/10 text-green-400"
              : "border-red-500 bg-red-500/10 text-red-400"
          }`}
        >
          <span>{isConnected ? "🟢" : "🔴"}</span>
          {backendStatus}
        </div>

        {/* Company Name */}
        <h1 className="text-6xl font-bold tracking-wider text-[#39FF14] md:text-8xl">
          {companyName}
        </h1>

        {/* Hero Title */}
        <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
          {heroTitle}
        </h2>

        {/* Hero Subtitle */}
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
          {heroSubtitle}
        </p>

        {/* Hero Image */}
        {heroImage && (
          <img
            src={getImageUrl(heroImage)}
            alt={companyName}
            className="mx-auto mt-10 max-h-80 rounded-2xl object-contain"
          />
        )}

        {/* Company Tagline */}
        <p className="mt-6 text-xl italic text-gray-500 md:text-2xl">
          {tagline}
        </p>

        {/* CTA */}
        <button className="mt-10 rounded-lg border border-[#39FF14] px-8 py-3 font-semibold text-[#39FF14] transition-all duration-300 hover:bg-[#39FF14] hover:text-black">
          {heroButton}
        </button>
      </div>
    </section>
  );
}

export default Hero;