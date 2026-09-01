const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💰" },
  { name: "Education", icon: "🎓" },
  { name: "E-Commerce", icon: "🛒" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Logistics", icon: "🚚" },
  { name: "Startups", icon: "🚀" },
];

function Industries() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#39FF14]">
          Industries We Serve
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Solutions built for every industry.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
          We develop AI-powered software, automation systems, and digital
          platforms tailored to businesses across multiple industries.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group rounded-2xl border border-gray-800 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#39FF14]"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {industry.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold group-hover:text-[#39FF14]">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;