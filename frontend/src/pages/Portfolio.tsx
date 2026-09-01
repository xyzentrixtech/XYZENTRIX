function Portfolio() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Portfolio
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Our Work.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          We're preparing a detailed showcase of our AI-powered web apps, mobile
          applications, ERP systems, AI Agents, and enterprise solutions.
        </p>

        <div className="mt-16 rounded-3xl border border-gray-800 bg-white/5 p-12 text-center backdrop-blur-sm">
          <div className="text-7xl">🚀</div>
          <h2 className="mt-6 text-3xl font-bold">Coming Soon</h2>
          <p className="mt-4 text-gray-400">
            Our complete project portfolio will be available here.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;