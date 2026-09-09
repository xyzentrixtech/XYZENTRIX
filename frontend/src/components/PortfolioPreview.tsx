import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

import { getPortfolio } from "../services/api";
import type { PortfolioProject } from "../services/api";

function PortfolioPreview() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const data = await getPortfolio();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load portfolio:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

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
              Explore the intelligent solutions XYZENTRIX builds across AI,
              web, mobile, and enterprise technologies.
            </p>
          </div>

          <button className="rounded-lg border border-[#39FF14] px-6 py-3 font-semibold text-[#39FF14] transition-all duration-300 hover:bg-[#39FF14] hover:text-black">
            View All Projects
          </button>
        </div>

        {loading ? (
          <p className="mt-14 text-center text-gray-400">
            Loading projects...
          </p>
        ) : projects.length === 0 ? (
          <p className="mt-14 text-center text-gray-500">
            No portfolio projects available.
          </p>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-gray-800 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14]"
              >
                {/* Project Image */}
                <div className="flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-6xl">🚀</div>
                  )}
                </div>

                <div className="p-8">
                  <span className="text-sm uppercase tracking-wider text-[#39FF14]">
                    {project.technologies}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold group-hover:text-[#39FF14]">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex gap-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-[#39FF14] transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="text-lg">🐙</span>
                      GitHub
                    </a>
                  )}

                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold text-[#39FF14] transition-all duration-300 hover:translate-x-1"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioPreview;