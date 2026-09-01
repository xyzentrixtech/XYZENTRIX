const projects = [
  {
    title: "AI Corporate Website",
    category: "Web + AI",
    description:
      "Modern business website integrated with AI Assistant and automation.",
  },
  {
    title: "Smart ERP Platform",
    category: "ERP",
    description:
      "Business management platform for operations, inventory, and reporting.",
  },
  {
    title: "AI Customer Chatbot",
    category: "AI",
    description:
      "24/7 intelligent chatbot for customer support and lead generation.",
  },
  {
    title: "Mobile Business App",
    category: "Mobile",
    description:
      "Cross-platform mobile application for business productivity.",
  },
];

function PortfolioPreview() {
  return (
    <section id="portfolio" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Portfolio
        </p>

        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Innovation in every project.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
              Explore the type of intelligent solutions XYZENTRIX builds across
              AI, web, mobile, and enterprise technologies.
            </p>
          </div>

          <button className="rounded-lg border border-[#39FF14] px-6 py-3 font-semibold text-[#39FF14] transition-all duration-300 hover:bg-[#39FF14] hover:text-black">
            View All Projects
          </button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14]"
            >
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-6xl">
                🚀
              </div>

              <div className="p-8">
                <span className="text-sm uppercase tracking-wider text-[#39FF14]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold group-hover:text-[#39FF14]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <button className="mt-6 font-semibold text-[#39FF14] transition-all duration-300 hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;