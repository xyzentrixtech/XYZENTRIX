import { useEffect, useState } from "react";
import {
  Sparkles,
  Globe,
  Bot,
  Code,
  Shield,
  Database,
} from "lucide-react";

import { getServices } from "../services/api";
import type { Service } from "../services/api";

const iconMap: Record<string, any> = {
  Sparkles,
  Globe,
  Bot,
  Code,
  Shield,
  Database,
};

function ServicesPreview() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Failed to load services:", error);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#39FF14] md:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 text-gray-400">
            AI-powered digital solutions for modern businesses.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading services...</p>
        ) : services.length === 0 ? (
          <p className="text-center text-gray-500">
            No services available.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles;

              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-gray-800 bg-[#111111] p-8 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.25)]"
                >
                  <Icon className="mb-5 h-12 w-12 text-[#39FF14]" />

                  <h3 className="mb-3 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesPreview;