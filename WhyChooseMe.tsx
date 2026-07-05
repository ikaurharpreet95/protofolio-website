import { motion } from "motion/react";
import {
  Palette,
  Tag,
  Zap,
  Award,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Palette, label: "Personalized Designs" },
  { icon: Tag, label: "Affordable Pricing" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Award, label: "High Quality Artwork" },
  { icon: Lightbulb, label: "Unlimited Creativity" },
  { icon: MessageCircle, label: "Friendly Communication" },
];

export function WhyChooseMe() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/40 to-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="Why Choose Me" title="A Thoughtful Design Partner" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-gold/15 shadow-soft hover:border-gold/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-rose/20 text-charcoal flex items-center justify-center flex-shrink-0">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="font-display text-lg text-charcoal">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
