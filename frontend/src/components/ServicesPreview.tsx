import { services } from "../data/services";


function ServicesPreview() {
  return (
    <section id="services" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Our Services
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Complete Digital & AI Solutions
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
          From websites and mobile apps to AI Agents, Agentic AI, Data Science,
          Cyber Security, and DevOps—we build intelligent technology that helps
          businesses grow faster and innovate with confidence.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14] hover:bg-white/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#39FF14]/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#39FF14]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;