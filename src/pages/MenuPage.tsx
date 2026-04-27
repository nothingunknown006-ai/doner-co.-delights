import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import donerHero from "@/assets/doner-hero.png";
import shawarma from "@/assets/shawarma.png";
import donerPlate from "@/assets/doner-plate.png";
import fries from "@/assets/fries.png";

const categories = ["All", "Doners", "Shawarmas", "Platters", "Sides"] as const;

const items = [
  { name: "Classic Doner", desc: "Pita, slow-grilled meat, garlic sauce, fresh greens.", price: "PKR 690", img: donerHero, cat: "Doners" },
  { name: "Spicy Beef Doner", desc: "House chili rub, pickled onions, sumac, tahini drizzle.", price: "PKR 790", img: donerHero, cat: "Doners" },
  { name: "Cheese Lava Doner", desc: "Molten cheese pull, smoky meat, charred peppers.", price: "PKR 850", img: donerHero, cat: "Doners" },
  { name: "Chicken Shawarma", desc: "Toasted flatbread, marinated chicken, tahini.", price: "PKR 590", img: shawarma, cat: "Shawarmas" },
  { name: "Beef Shawarma", desc: "Slow-roast beef, garlic toum, crisp pickles.", price: "PKR 690", img: shawarma, cat: "Shawarmas" },
  { name: "Doner Platter", desc: "Rice, hummus, grilled veg, our signature meat.", price: "PKR 990", img: donerPlate, cat: "Platters" },
  { name: "Mixed Grill Platter", desc: "Three meats, two sides, one happy table.", price: "PKR 1490", img: donerPlate, cat: "Platters" },
  { name: "Crispy Fries", desc: "Golden, salted, with house seasoning.", price: "PKR 290", img: fries, cat: "Sides" },
  { name: "Loaded Doner Fries", desc: "Fries, meat, cheese sauce, pickled chili.", price: "PKR 590", img: fries, cat: "Sides" },
];

const MenuPage = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <PageShell
      eyebrow="The full menu"
      title={<>Bold flavors, <span className="italic text-brand-charcoal">no shortcuts.</span></>}
      intro="A tight, focused menu. Every item earns its spot — built around quality meat and traditional Turkish technique."
    >
      <section className="relative pb-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setActive(c)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  active === c
                    ? "bg-brand-cream text-brand-charcoal shadow-soft"
                    : "glass-dark text-brand-cream/80 hover:text-brand-cream"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.article
                layout
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl glass-dark p-6 pt-36 overflow-hidden"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]" loading="lazy" />
                </div>
                <div className="absolute top-6 right-6 w-28 h-28 rounded-full bg-brand-orange/20 blur-2xl group-hover:bg-brand-orange/40 transition" />
                <span className="text-brand-cream/50 text-[10px] uppercase tracking-[0.25em] font-bold">{item.cat}</span>
                <h3 className="font-display font-extrabold text-brand-cream text-2xl mt-1">{item.name}</h3>
                <p className="text-brand-cream/70 text-sm mt-2 min-h-[40px]">{item.desc}</p>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-brand-cream/10">
                  <span className="font-display font-bold text-brand-cream text-lg">{item.price}</span>
                  <span className="text-brand-cream/60 text-xs">+ tax</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default MenuPage;
