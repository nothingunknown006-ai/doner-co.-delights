import { motion } from "framer-motion";
import banner from "@/assets/hero-banner.jpg";

export const Banner = () => {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        src={banner}
        alt="Doner kebab on the spit over open flames"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Top gradient for header legibility */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-charcoal/70 to-transparent pointer-events-none" />
      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(var(--background))] to-transparent pointer-events-none" />
    </section>
  );
};
