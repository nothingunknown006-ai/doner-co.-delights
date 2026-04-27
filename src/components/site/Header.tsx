import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Menu", href: "/menu" },
  { label: "Our Food", href: "/our-food" },
  { label: "Our App", href: "/our-app" },
  { label: "Reservation", href: "/reservation" },
  { label: "Feedback", href: "/feedback" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 14 : 24,
          paddingBottom: scrolled ? 14 : 24,
        }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4"
      >
        <motion.nav
          layout
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className={`flex items-center justify-between gap-6 transition-all duration-500 ${
            scrolled
              ? "glass-dark rounded-full px-5 py-2.5 w-full max-w-3xl shadow-ember"
              : "w-full max-w-7xl px-6 py-3"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: -12, scale: 1.15 }}
              className="relative"
            >
              <Flame
                className={`h-6 w-6 ${scrolled ? "text-brand-orange" : "text-brand-cream"}`}
                strokeWidth={2.5}
              />
            </motion.span>
            <span className="font-display font-extrabold tracking-tight text-lg text-brand-cream">
              DONER & CO
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="relative px-4 py-2 text-sm font-semibold rounded-full text-brand-cream/85 hover:text-brand-cream transition-colors"
              >
                <span className="relative z-10">{l.label}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/reservation"
            className="hidden md:inline-flex items-center bg-brand-cream text-brand-charcoal font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white hover:scale-105 transition-all shadow-soft"
          >
            Book a table
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-brand-cream p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-charcoal/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-gradient-ember p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-display font-extrabold text-brand-cream text-xl">
                  DONER & CO
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-brand-cream p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-4xl font-extrabold text-brand-cream py-3 border-b border-brand-cream/15"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto text-brand-cream/70 text-sm">
                By Monal Group
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
