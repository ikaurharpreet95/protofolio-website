import { motion } from "motion/react";
import { Heart, Home, Smartphone, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Heart,
    title: "Wedding Invitations",
    desc: "Custom-designed wedding stationery that reflects your love story.",
  },
  {
    icon: Home,
    title: "Housewarming Invitations",
    desc: "Warm and elegant invitations for your new beginning.",
  },
  {
    icon: Smartphone,
    title: "Digital Invitations",
    desc: "Share beautiful invitations instantly via WhatsApp or email.",
  },
  {
    icon: Sparkles,
    title: "Custom Invitation Design",
    desc: "Completely personalized invitation designs tailored to your event.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="What I Design"
          subtitle="Thoughtful invitation design for every kind of celebration."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-500 shadow-soft hover:shadow-luxe"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/12 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-ivory transition-colors">
                <s.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-charcoal">{s.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
