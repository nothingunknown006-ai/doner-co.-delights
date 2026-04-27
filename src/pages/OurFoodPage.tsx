import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Flame, Leaf, ChefHat, Award } from "lucide-react";
import donerSpit from "@/assets/doner-spit.png";
import donerHero from "@/assets/doner-hero.png";
import shawarma from "@/assets/shawarma.png";

const pillars = [
  { icon: Flame, title: "Real Fire", text: "Vertical spits, slow rotation, charred edges. The way it's done back home." },
  { icon: Leaf, title: "Fresh Daily", text: "Vegetables, breads and sauces prepped every morning. Never frozen." },
  { icon: ChefHat, title: "Turkish Craft", text: "Recipes refined over generations, executed with discipline." },
  { icon: Award, title: "Quality Meat", text: "Hand-trimmed cuts, marinated 24 hours in our signature spice blend." },
];

const process = [
  { step: "01", title: "Source", text: "Premium cuts selected for tenderness and marbling." },
  { step: "02", title: "Marinate", text: "24-hour bath in our family spice blend — yogurt, garlic, sumac." },
  { step: "03", title: "Stack", text: "Hand-layered onto the spit. Geometry matters here." },
  { step: "04", title: "Roast", text: "Slow-rotated in front of vertical flame until edges crisp." },
  { step: "05", title: "Carve", text: "Shaved fresh to order. Never sitting, never reheated." },
];

const OurFoodPage = () => {
  return (
    <PageShell
      eyebrow="Our food"
      title={<>From spit to <span className="italic text-brand-charcoal">plate.</span></>}
      intro="The doner is simple in idea and demanding in execution. We obsess over the parts most people skip."
    >
      {/* Pillars */}
      <section className="relative pb-24">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-dark rounded-3xl p-7"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand-orange/20 flex items-center justify-center mb-5">
                  <p.icon className="h-6 w-6 text-brand-cream" strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-extrabold text-brand-cream text-xl mb-2">{p.title}</h3>
                <p className="text-brand-cream/70 text-sm">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero spit visual */}
      <section className="relative py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-ember/30 blur-3xl rounded-full" />
              <img src={donerSpit} alt="Doner spit" className="relative w-full max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] spin-slow" />
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display font-black text-brand-cream text-5xl md:text-6xl leading-[0.95] mb-6"
              >
                The vertical <span className="italic text-brand-charcoal">spit.</span>
              </motion.h2>
              <p className="text-brand-cream/80 text-lg leading-relaxed mb-4">
                It looks rustic. It is anything but. The geometry of the stack, the heat distance, the rotation speed — every variable is dialed in.
              </p>
              <p className="text-brand-cream/80 text-lg leading-relaxed">
                The reward is a crust you can hear. Edges that shatter. Centers still juicy. That contrast is the whole point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24">
        <div className="container mx-auto">
          <h2 className="font-display font-black text-brand-cream text-4xl md:text-6xl mb-16 text-balance">
            Five steps. <span className="italic text-brand-charcoal">No compromise.</span>
          </h2>
          <div className="space-y-4">
            {process.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ x: 12 }}
                className="group flex items-center gap-6 md:gap-10 py-6 border-b border-brand-cream/15"
              >
                <span className="font-display font-black text-brand-charcoal/40 text-5xl md:text-7xl group-hover:text-brand-charcoal transition-colors">
                  {s.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-display font-extrabold text-brand-cream text-2xl md:text-3xl">{s.title}</h3>
                  <p className="text-brand-cream/70 mt-1">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="relative py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          {[donerHero, shawarma].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] rounded-3xl glass-dark overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-brand-orange/20 blur-3xl group-hover:bg-brand-orange/40 transition" />
              <img src={img} alt="" className="relative w-2/3 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]" />
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default OurFoodPage;
