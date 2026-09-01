import CTA from "../components/CTA";

const values = [
  {
    title: "Innovation",
    description:
      "We build future-ready digital solutions powered by AI and modern engineering.",
  },
  {
    title: "Quality",
    description:
      "Every project is designed for performance, scalability, and reliability.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication and honest collaboration throughout every project.",
  },
  {
    title: "Growth",
    description:
      "Our goal is to help businesses grow through intelligent technology.",
  },
];

function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            About XYZENTRIX
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            Imagine What's Next.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            XYZENTRIX is an AI-first technology company focused on building
            intelligent digital products that help businesses innovate, automate,
            and grow with confidence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Building technology for tomorrow.
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 leading-8">
            <p>
              XYZENTRIX was created with a simple vision: combine Artificial
              Intelligence with modern software engineering to solve real
              business challenges.
            </p>

            <p>
              Instead of treating AI as an add-on, we design solutions where AI
              becomes part of the product—from intelligent websites and mobile
              apps to AI Agents, automation systems, and enterprise platforms.
            </p>

            <p>
              Every project is built with scalability, security, and long-term
              business value in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#39FF14]">Our Mission</h3>

            <p className="mt-5 leading-8 text-gray-400">
              Empower businesses with AI-powered software, automation, and
              digital innovation that delivers measurable business value.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#39FF14]">Our Vision</h3>

            <p className="mt-5 leading-8 text-gray-400">
              Become a globally recognized AI technology company that helps
              organizations embrace the future through intelligent software.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            Core Values
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Principles behind every solution.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14]"
              >
                <h3 className="text-xl font-semibold text-[#39FF14]">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why XYZENTRIX */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
            Why XYZENTRIX
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            AI-first thinking. Business-first results.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-[#39FF14]">
                AI Integrated
              </h3>
              <p className="mt-4 text-gray-400 leading-7">
                AI is designed into the product instead of being added later.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-[#39FF14]">
                Modern Technology
              </h3>
              <p className="mt-4 text-gray-400 leading-7">
                React, Django, AI, Cloud, DevOps, and scalable architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-[#39FF14]">
                Future Ready
              </h3>
              <p className="mt-4 text-gray-400 leading-7">
                Built to evolve with AI, automation, and changing business
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#050505] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="flex aspect-square items-center justify-center rounded-3xl border border-gray-800 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-8xl">
            👨‍💻
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
              Founder
            </p>

            <h2 className="mt-4 text-4xl font-bold">Built with Vision.</h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              XYZENTRIX is built with a vision to create intelligent digital
              solutions where Artificial Intelligence becomes a practical tool
              for businesses—not just a trend.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              The company focuses on building scalable products, modern user
              experiences, secure architecture, and future-ready software for
              businesses across multiple industries.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default About;