import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageShellProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}

export const PageShell = ({ eyebrow, title, intro, children }: PageShellProps) => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <section className="relative pt-40 pb-16">
        <div className="container mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-4"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-brand-cream text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-balance max-w-5xl"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-cream/85 text-lg md:text-xl mt-6 max-w-2xl"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </section>
      {children}
      <Footer />
    </main>
  );
};
