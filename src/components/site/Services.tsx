import { Sparkles, PenTool, Smartphone, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: PenTool,
    title: "Custom Invitation Design",
    description: "Every design is handcrafted to reflect your celebration, theme, and style.",
  },
  {
    icon: Smartphone,
    title: "Digital Invitation Suites",
    description: "Elegant digital invites for WhatsApp, Instagram, and online sharing.",
  },
  {
    icon: Sparkles,
    title: "Premium Finishing Touches",
    description: "Luxury details, premium typography, and refined layouts that stand out.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Process",
    description: "A smooth, collaborative experience from concept to final delivery.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="Services" title="Design Services Tailored to You" subtitle="From intimate gatherings to grand celebrations, each invitation is created with intention and beauty." />

        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-3xl border border-gold/15 bg-card p-8 shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-charcoal">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
