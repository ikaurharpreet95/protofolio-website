import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.jpg";
import { FloralAccent } from "./FloralAccent";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Elegant wedding invitation flat lay with eucalyptus and roses"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ivory/85 via-ivory/70 to-ivory/90" />
      </div>

      <FloralAccent className="absolute top-28 left-6 md:left-16 w-24 md:w-36 text-sage animate-float-slow opacity-70" />
      <FloralAccent className="absolute bottom-20 right-6 md:right-20 w-28 md:w-44 text-rose animate-float-slower opacity-70" />
      <FloralAccent className="absolute top-1/2 right-1/4 w-16 text-gold animate-float-slow opacity-50 hidden md:block" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.4em] text-xs md:text-sm text-gold mb-6"
        >
          Crafting Beautiful Invitations
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] text-balance"
        >
          Beautiful Invitations
          <br />
          <span className="italic text-gold">Designed with Love</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-base md:text-lg text-charcoal/75 max-w-2xl mx-auto leading-relaxed"
        >
          Custom invitation designs that make your celebrations unforgettable. From weddings
          to housewarming ceremonies, every invitation is designed with elegance and
          attention to detail.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full bg-gold text-ivory px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold/90 transition-all shadow-luxe hover:scale-[1.02]"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-charcoal/70 text-charcoal px-8 py-4 text-sm font-medium tracking-wide hover:bg-charcoal hover:text-ivory transition-all"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
