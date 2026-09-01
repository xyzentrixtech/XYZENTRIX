import { useEffect } from "react";

import CTA from "../components/CTA";
import { services } from "../data/services";

const serviceCategories = [
  "AI & Intelligent Solutions",
  "Development",
  "Business Solutions",
].map((category) => ({
  title: category,
  services: services
    .filter((service) => service.category === category)
    .map((service) => service.title),
}));

function Services() {
  useEffect(() => {
    document.title = "Services | XYZENTRIX";
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            Our Services
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            Intelligent Solutions for Modern Businesses.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            From AI Agents and Agentic AI to Web Development, Cloud,
            Cyber Security, and Enterprise Software—we build technology that
            helps businesses grow, automate, and scale.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#39FF14]/40 bg-[#39FF14]/10 px-5 py-3">
            <span className="text-2xl">🚀</span>
            <div>
              <p className="font-semibold text-[#39FF14]">
                {services.length}+ Professional Services
              </p>
              <p className="text-sm text-gray-400">
                AI • Software • Cloud • Security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">Service Categories</h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]"
              >
                <h3 className="text-2xl font-bold text-[#39FF14]">
                  {category.title}
                </h3>

                <ul className="mt-6 space-y-3 text-gray-400">
                  {category.services.map((service) => (
                    <li key={service}>• {service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            Complete Service Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Everything you need under one roof.
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14] hover:shadow-[0_0_25px_rgba(57,255,20,0.2)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#39FF14]/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold transition-colors group-hover:text-[#39FF14]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#39FF14] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            Why Choose XYZENTRIX
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technology that grows with your business.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { icon: "⚡", title: "Fast Delivery" },
              { icon: "🤖", title: "AI-First Approach" },
              { icon: "🔒", title: "Secure Solutions" },
              { icon: "📈", title: "Scalable Architecture" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#39FF14]"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            How We Deliver
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            A structured approach to every project.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {["Discover", "Design", "Develop", "Deploy"].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-gray-800 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#39FF14]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#39FF14] text-2xl font-bold text-[#39FF14]">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#39FF14]/30 bg-gradient-to-r from-[#39FF14]/10 to-transparent p-10 text-center">
          <h2 className="text-3xl font-bold">
            Need a custom solution?
          </h2>

          <p className="mt-4 text-gray-400">
            Whether it's an AI Agent, ERP, CRM, Website, or Mobile App,
            XAi and our team are ready to help you choose the right solution.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-[#39FF14] px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default Services;