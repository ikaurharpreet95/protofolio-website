import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The invitation felt so elegant and personal. It truly captured the mood of our celebration.",
    name: "Aisha & Sam",
  },
  {
    quote: "Every detail felt thoughtful and beautifully designed. The process was smooth and easy.",
    name: "Meera",
  },
  {
    quote: "The final design was exactly what I had imagined, with a polished and premium feel.",
    name: "Jasmine",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs text-gold mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">Loved by Clients</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-gold/15 bg-card p-8 shadow-soft">
              <Quote className="text-gold" size={22} />
              <p className="mt-5 text-sm leading-relaxed text-charcoal/75">“{item.quote}”</p>
              <p className="mt-6 font-medium text-charcoal">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
