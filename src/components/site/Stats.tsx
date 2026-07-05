const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "100%", label: "Personalized Designs" },
  { value: "4 mo", label: "Design Experience" },
  { value: "Auckland", label: "Serving Locally" },
];

export function Stats() {
  return (
    <section className="py-20 bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-ivory/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
