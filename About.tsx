import { motion } from "motion/react";
import { Check } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { FloralAccent } from "./FloralAccent";

const specialties = [
  "Wedding Invitations",
  "Housewarming Invitations",
  "Engagement Invitations",
  "Birthday Invitations",
  "Baby Shower Invitations",
  "Digital Invitations",
  "Printable Invitation Cards",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      <FloralAccent className="absolute -top-10 right-0 w-48 text-sage/40 hidden md:block" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-3xl" />
          <img
            src={portrait}
            alt="Harpreet Kaur, invitation designer"
            width={800}
            height={1024}
            loading="lazy"
            className="relative rounded-3xl shadow-luxe w-full object-cover aspect-[4/5]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.35em] text-xs text-gold mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
            Meet <span className="italic text-gold">Harpreet Kaur</span>
          </h2>
          <div className="mt-6 space-y-5 text-charcoal/75 leading-relaxed">
            <p>
              Hello! I'm <strong className="text-charcoal">Harpreet Kaur</strong>, a
              passionate invitation designer with{" "}
              <strong className="text-charcoal">4 months of professional experience</strong>{" "}
              creating memorable invitation designs.
            </p>
            <p>
              Although I am at the beginning of my design journey, I have successfully
              completed <strong className="text-charcoal">5–7 invitation projects</strong>{" "}
              for happy clients. I believe every celebration deserves an invitation that
              reflects its unique story.
            </p>
          </div>

          <p className="mt-8 mb-4 font-display text-lg text-charcoal">I specialize in:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {specialties.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold/15 text-gold flex-shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
