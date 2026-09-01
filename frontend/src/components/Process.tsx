const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business, goals, challenges, and opportunities before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create modern UI/UX designs and solution architecture tailored to your business needs.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our team builds AI-powered web apps, mobile apps, automation systems, and enterprise software.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "We deploy securely with Cloud & DevOps best practices and provide ongoing support.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Our Process
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          From idea to intelligent solution.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
          Every successful project follows a structured process that ensures
          quality, speed, and long-term scalability.
        </p>

        <div className="mt-16 space-y-8">
          {process.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col gap-6 rounded-2xl border border-gray-800 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#39FF14] md:flex-row md:items-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#39FF14] text-2xl font-bold text-[#39FF14]">
                {item.step}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold group-hover:text-[#39FF14]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className="hidden text-4xl text-gray-700 md:block">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;