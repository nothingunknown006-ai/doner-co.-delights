import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Flame, Leaf, ChefHat, Award, Sparkles } from "lucide-react";
import donerSpit from "@/assets/doner-spit-large.png";
import donerHero from "@/assets/doner-hero.png";
import shawarma from "@/assets/shawarma.png";
import donerPlate from "@/assets/doner-plate.png";
import fries from "@/assets/fries.png";
import spices from "@/assets/spices.png";
import flame from "@/assets/flame.png";

const pillars = [
  { icon: Flame, title: "Real Fire", text: "Vertical spits, slow rotation, charred edges. The way it's done back home." },
  { icon: Leaf, title: "Fresh Daily", text: "Vegetables, breads and sauces prepped every morning. Never frozen." },
  { icon: ChefHat, title: "Turkish Craft", text: "Recipes refined over generations, executed with discipline." },
  { icon: Award, title: "Quality Meat", text: "Hand-trimmed cuts, marinated 24 hours in our signature blend." },
];

const process = [
  { step: "01", title: "Source", text: "Premium cuts selected for tenderness and marbling.", img: spices },
  { step: "02", title: "Marinate", text: "24-hour bath in our family spice blend — yogurt, garlic, sumac.", img: spices },
  { step: "03", title: "Stack", text: "Hand-layered onto the spit. Geometry matters here.", img: donerSpit },
  { step: "04", title: "Roast", text: "Slow-rotated in front of vertical flame until edges crisp.", img: flame },
  { step: "05", title: "Carve", text: "Shaved fresh to order. Never sitting, never reheated.", img: donerPlate },
];

const ingredients = [
  { name: "Sumac", note: "Tart, ruby red" },
  { name: "Cumin", note: "Earthy warmth" },
  { name: "Paprika", note: "Smoky depth" },
  { name: "Garlic", note: "Sharp, fresh" },
  { name: "Yogurt", note: "Tender bath" },
  { name: "Lemon", note: "Bright lift" },
];

const stats = [
  { num: "24h", label: "Marinade time" },
  { num: "100%", label: "Halal certified" },
  { num: "3", label: "Locations" },
  { num: "0", label: "Shortcuts" },
];

const OurFoodPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const spitY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const spitRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const spitScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <PageShell
      eyebrow="Our food"
      title={
        <>
          Fire. Spice. <span className="italic text-brand-charcoal">Patience.</span>
        </>
      }
      intro="The doner is simple in idea and demanding in execution. We obsess over the parts most people skip."
    >
      {/* Parallax spit hero */}
      <section ref={heroRef} className="relative pb-32 pt-8 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-dark rounded-3xl p-6"
                >
                  <div className="font-display font-black text-brand-cream text-4xl md:text-5xl">{s.num}</div>
                  <div className="text-brand-cream/65 text-xs uppercase tracking-[0.2em] mt-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-brand-cream/85 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Every doner that leaves our counter passes through a process refined across generations. There are no microwaves. No shortcuts. No apologies.
            </motion.p>
          </div>
          <motion.div
            style={{ y: spitY, rotate: spitRotate, scale: spitScale }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-brand-ember/40 blur-[100px] rounded-full" />
            <img
              src={donerSpit}
              alt="Vertical doner spit"
              className="relative w-full max-w-sm mx-auto drop-shadow-[0_40px_70px_rgba(0,0,0,0.55)]"
            />
            <motion.img
              src={flame}
              alt=""
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 opacity-90"
              animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-20">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-brand-cream text-4xl md:text-6xl mb-12 max-w-3xl text-balance"
          >
            Four things we never <span className="italic text-brand-charcoal">negotiate.</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, rotate: -1 }}
                className="glass-dark rounded-3xl p-7 group cursor-default"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand-orange/25 flex items-center justify-center mb-5 group-hover:bg-brand-orange/45 transition-colors">
                  <p.icon className="h-7 w-7 text-brand-cream" strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-extrabold text-brand-cream text-xl mb-2">{p.title}</h3>
                <p className="text-brand-cream/70 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice blend showcase */}
      <section className="relative py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-ember/30 blur-3xl rounded-full" />
            <motion.img
              animate={{ rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              src={spices}
              alt="Spice blend"
              className="relative w-full max-w-lg mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              <Sparkles className="h-3 w-3" /> The blend
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-brand-cream text-5xl md:text-6xl leading-[0.95] mb-8"
            >
              Six notes. <span className="italic text-brand-charcoal">One soul.</span>
            </motion.h2>
            <div className="grid grid-cols-2 gap-3">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ x: 6 }}
                  className="flex items-baseline justify-between border-b border-brand-cream/15 pb-3"
                >
                  <span className="font-display font-bold text-brand-cream text-xl">{ing.name}</span>
                  <span className="text-brand-cream/60 text-xs uppercase tracking-widest">{ing.note}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process — alternating */}
      <section className="relative py-24">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-brand-cream text-4xl md:text-6xl mb-20 max-w-3xl text-balance"
          >
            Five steps. <span className="italic text-brand-charcoal">No compromise.</span>
          </motion.h2>
          <div className="space-y-24">
            {process.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <div className="font-display font-black text-brand-charcoal/60 text-7xl md:text-9xl leading-none mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-display font-extrabold text-brand-cream text-3xl md:text-5xl mb-4">{s.title}</h3>
                  <p className="text-brand-cream/75 text-lg max-w-md leading-relaxed">{s.text}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.04, rotate: i % 2 ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative aspect-square rounded-[2rem] glass-dark overflow-hidden flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-brand-orange/25 blur-3xl" />
                  <img
                    src={s.img}
                    alt={s.title}
                    className="relative w-2/3 object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24">
        <div className="container mx-auto">
          <h2 className="font-display font-black text-brand-cream text-4xl md:text-5xl mb-12 text-balance">
            On the <span className="italic text-brand-charcoal">plate.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[donerHero, shawarma, donerPlate, fries, donerSpit, spices].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative aspect-square rounded-3xl glass-dark overflow-hidden flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-brand-orange/15 blur-2xl group-hover:bg-brand-orange/40 transition duration-500" />
                <img
                  src={img}
                  alt=""
                  className="relative w-2/3 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default OurFoodPage;
