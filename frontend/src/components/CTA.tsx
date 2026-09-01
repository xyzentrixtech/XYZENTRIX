function CTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.12),transparent_70%)]"></div>

      <div className="relative mx-auto max-w-5xl rounded-3xl border border-[#39FF14]/30 bg-white/5 p-10 text-center backdrop-blur-sm md:p-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Ready to Build?
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          Let's Build the Future Together.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Whether you need an AI-powered website, mobile app, AI Agent,
          enterprise software, or intelligent automation, XYZENTRIX is ready to
          turn your vision into reality.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-[#39FF14] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>

          <button className="rounded-lg border border-[#39FF14] px-8 py-4 font-semibold text-[#39FF14] transition-all duration-300 hover:bg-[#39FF14] hover:text-black">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;