import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import donerHero from "@/assets/doner-hero.png";
import flame from "@/assets/flame.png";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Vertical side label */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-right">
        <span className="font-display font-extrabold tracking-[0.4em] text-brand-cream/80 text-xs md:text-sm">
          SKEWERED, PERFECTLY
        </span>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-60"
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-brand-cream flicker" />
            <span className="text-brand-cream text-xs font-semibold tracking-widest uppercase">
              By Monal Group
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-brand-cream leading-[0.9] text-[clamp(3.5rem,9vw,8rem)] text-balance"
          >
            Bold flavor.<br />
            <span className="italic font-extrabold text-brand-charcoal">Skewered</span>,
            <br />perfectly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-brand-cream/90 text-lg md:text-xl max-w-md leading-relaxed"
          >
            Authentic Turkish doner, refined. Quality meat,
            traditional spice, cooked over fire — exactly as it should be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center gap-3 bg-brand-charcoal text-brand-cream font-bold px-8 py-4 rounded-full overflow-hidden hover:scale-105 transition-transform shadow-glow"
            >
              <span className="relative z-10">Explore the menu</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 text-brand-cream font-semibold px-6 py-4 rounded-full glass hover:bg-brand-cream/20 transition"
            >
              Visit a location
            </a>
          </motion.div>
        </div>

        {/* Doner image */}
        <motion.div
          style={{ y, rotate, scale }}
          className="relative h-[420px] md:h-[600px] flex items-center justify-center"
        >
          <motion.img
            src={flame}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-contain opacity-80 mix-blend-screen flicker"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            src={donerHero}
            alt="Juicy doner kebab in pita bread"
            className="relative z-10 w-full max-w-[560px] object-contain drop-shadow-[0_40px_60px_rgba(80,20,0,0.45)] float-slow"
            width={1024}
            height={1024}
          />
        </motion.div>
      </div>
    </section>
  );
};
