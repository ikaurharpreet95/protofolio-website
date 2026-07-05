import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Contact Me", desc: "Reach out via form, email, or WhatsApp." },
  { n: "02", title: "Discuss Your Requirements", desc: "Share your vision, theme, and event details." },
  { n: "03", title: "Design Draft", desc: "Receive your first custom invitation concept." },
  { n: "04", title: "Revisions", desc: "Refine the design until it feels perfectly yours." },
  { n: "05", title: "Final Delivery", desc: "Get print-ready files or digital invites to share." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-ivory to-muted/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Process"
          title="From Idea to Invitation"
          subtitle="A simple, collaborative five-step journey."
        />
        <div className="mt-16 relative">
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="absolute left-7 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-ivory shadow-soft" />
                <div className="pl-16 md:pl-0 md:[direction:ltr]">
                  <div className={`p-6 md:p-8 rounded-3xl bg-card border border-gold/20 shadow-soft ${i % 2 ? "md:mr-12" : "md:ml-12"}`}>
                    <p className="font-display text-3xl text-gold">{s.n}</p>
                    <h3 className="font-display text-xl mt-2 text-charcoal">{s.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70">{s.desc}</p>
                  </div>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
