import { useEffect, useState } from "react";
import { getHealthStatus, getCompanyProfile } from "../services/api";

type HealthResponse = {
  status: string;
  company: string;
  message: string;
};

function Hero() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [isConnected, setIsConnected] = useState(false);
  const [companyName, setCompanyName] = useState("XYZENTRIX");
  const [tagline, setTagline] = useState("Imagine What's Next.");

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
      const company = await getCompanyProfile();

      setCompanyName(company.company_name);
      setTagline(company.tagline);
    } catch (error) {
      console.error(error);
    }
  }

  checkBackend();
  loadCompany();
}, []);

  return (
    <section className="flex h-[calc(100vh-80px)] items-center justify-center bg-black text-white">
      <div className="text-center">
        {/* Live Backend Status */}
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

        <h1 className="text-6xl font-bold tracking-wider text-[#39FF14] md:text-8xl">
          {companyName}
        </h1>

        <p className="mt-5 text-xl text-gray-400 md:text-2xl">
          {tagline}
        </p>

        <button className="mt-10 rounded-lg border border-[#39FF14] px-8 py-3 font-semibold text-[#39FF14] transition-all duration-300 hover:bg-[#39FF14] hover:text-black">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;