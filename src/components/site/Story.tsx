import { motion } from "framer-motion";
import donerSpit from "@/assets/doner-spit.png";

export const Story = () => {
  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] md:h-[640px] flex items-center justify-center"
        >
          <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-brand-charcoal/15 blur-3xl" />
          <motion.img
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            viewport={{ once: false }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            src={donerSpit}
            alt="Vertical doner spit with grilled meat"
            className="relative z-10 max-h-full object-contain drop-shadow-[0_30px_50px_rgba(60,15,0,0.6)]"
            loading="lazy"
          />
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-6"
          >
            Our story
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-brand-cream text-5xl md:text-7xl leading-[0.95] text-balance"
          >
            True to the <span className="italic text-brand-charcoal">roots.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-brand-cream/90 text-lg leading-relaxed max-w-lg"
          >
            DONER & CO. is inspired by authentic Turkish flavors, elevated with a refined touch.
            Rich, seasoned, and centered on quality meat — a focused experience for those who
            appreciate bold flavor delivered with care and consistency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              ["100%", "Halal meat"],
              ["3", "Locations"],
              ["1", "Tradition"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-brand-cream/30 pl-4">
                <div className="font-display font-extrabold text-brand-cream text-3xl">{n}</div>
                <div className="text-brand-cream/70 text-xs uppercase tracking-widest mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
