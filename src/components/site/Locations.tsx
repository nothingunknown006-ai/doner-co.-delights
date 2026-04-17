import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  { name: "Beverly Centre", address: "Blue Area, Islamabad", hours: "12pm – 1am" },
  { name: "F-6 Markaz", address: "Super Market, Islamabad", hours: "12pm – 1am" },
  { name: "I-8 Markaz", address: "Main Boulevard, Islamabad", hours: "12pm – 1am" },
];

export const Locations = () => {
  return (
    <section id="locations" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-4"
          >
            Find us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-brand-cream text-5xl md:text-7xl leading-[0.95]"
          >
            Three doors. <span className="italic text-brand-charcoal">One flame.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {locations.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group rounded-3xl glass-dark p-8 transition shadow-soft cursor-pointer"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-brand-cream/40 text-5xl">
                  0{i + 1}
                </span>
                <div className="h-12 w-12 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange/40 transition">
                  <MapPin className="h-5 w-5 text-brand-cream" />
                </div>
              </div>
              <h3 className="font-display font-extrabold text-brand-cream text-3xl">
                {l.name}
              </h3>
              <p className="text-brand-cream/70 mt-2">{l.address}</p>
              <div className="mt-6 pt-6 border-t border-brand-cream/10 flex items-center gap-2 text-brand-cream/80 text-sm">
                <Clock className="h-4 w-4" />
                {l.hours}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
