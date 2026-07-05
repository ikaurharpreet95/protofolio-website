import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote: "Harpreet designed our wedding invitation beautifully. Everyone loved it!",
    name: "Sarah",
  },
  {
    quote: "The housewarming invitation looked amazing and was delivered quickly.",
    name: "Aman",
  },
  {
    quote: "Very professional and easy to work with.",
    name: "Priya",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="Testimonials" title="Kind Words from Clients" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl p-8 bg-card border border-gold/15 shadow-soft hover:shadow-luxe transition-all"
            >
              <Quote className="absolute top-6 right-6 text-gold/20" size={40} />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-lg italic text-charcoal/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-gold/20 text-sm font-medium text-charcoal">
                — {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
