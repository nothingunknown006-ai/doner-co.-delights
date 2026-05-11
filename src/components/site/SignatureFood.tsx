import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import donerHero from "@/assets/doner-hero.png";
import shawarma from "@/assets/shawarma.png";
import donerPlate from "@/assets/doner-plate.png";
import fries from "@/assets/fries.png";
import donerSpit from "@/assets/doner-spit-large.png";
import spices from "@/assets/spices.png";

const items = [
  { name: "Classic Doner", tag: "Signature", img: donerHero, span: "md:col-span-2 md:row-span-2", h: "aspect-square md:aspect-auto md:h-full" },
  { name: "Chicken Shawarma", tag: "Best seller", img: shawarma, span: "", h: "aspect-square" },
  { name: "Doner Platter", tag: "Sharing", img: donerPlate, span: "", h: "aspect-square" },
  { name: "From the spit", tag: "Slow roast", img: donerSpit, span: "md:col-span-2", h: "aspect-[2/1]" },
  { name: "House blend", tag: "Spices", img: spices, span: "", h: "aspect-square" },
  { name: "Crispy Fries", tag: "Side", img: fries, span: "", h: "aspect-square" },
];

export const SignatureFood = () => {
  return (
    <section id="signature" className="relative py-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              Signature food
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-brand-cream text-5xl md:text-7xl leading-[0.95] text-balance"
            >
              The <span className="italic text-brand-charcoal">house.</span>
            </motion.h2>
          </div>
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 text-brand-cream font-bold tracking-wide hover:gap-4 transition-all"
          >
            See full menu
            <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl glass-dark cursor-pointer ${item.span} ${item.h}`}
            >
              <div className="absolute inset-0 bg-brand-orange/15 blur-2xl group-hover:bg-brand-orange/40 transition duration-500" />
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent">
                <div>
                  <div className="text-brand-cream/70 text-[10px] uppercase tracking-[0.25em]">{item.tag}</div>
                  <h3 className="font-display font-extrabold text-brand-cream text-lg md:text-xl leading-tight">{item.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-brand-cream/80 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
