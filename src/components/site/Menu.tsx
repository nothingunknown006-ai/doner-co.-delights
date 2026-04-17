import { motion } from "framer-motion";
import donerHero from "@/assets/doner-hero.png";
import shawarma from "@/assets/shawarma.png";
import donerPlate from "@/assets/doner-plate.png";
import fries from "@/assets/fries.png";

const items = [
  {
    name: "Classic Doner",
    desc: "Pita, slow-grilled meat, garlic sauce, fresh greens.",
    price: "PKR 690",
    img: donerHero,
  },
  {
    name: "Chicken Shawarma",
    desc: "Toasted flatbread, marinated chicken, tahini.",
    price: "PKR 590",
    img: shawarma,
  },
  {
    name: "Doner Platter",
    desc: "Rice, hummus, grilled veg, our signature meat.",
    price: "PKR 990",
    img: donerPlate,
  },
  {
    name: "Crispy Fries",
    desc: "Golden, salted, with house seasoning.",
    price: "PKR 290",
    img: fries,
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              The menu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-brand-cream text-5xl md:text-7xl leading-[0.95] text-balance"
            >
              Built around <span className="italic text-brand-charcoal">flavor.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-cream/80 max-w-sm"
          >
            A short menu, done properly. Every item earns its place on the board.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass-dark p-6 pt-32 cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-brand-orange/20 blur-2xl group-hover:bg-brand-orange/40 transition" />
              <h3 className="font-display font-extrabold text-brand-cream text-2xl">{item.name}</h3>
              <p className="text-brand-cream/70 text-sm mt-2 min-h-[40px]">{item.desc}</p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-brand-cream/10">
                <span className="font-display font-bold text-brand-cream text-lg">{item.price}</span>
                <span className="text-brand-cream/60 text-xs">+ tax</span>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-brand-cream/60 text-xs mt-10">
          *All prices are subject to prevailing government taxes.
        </p>
      </div>
    </section>
  );
};
