import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Apple, Smartphone, Bell, MapPin, CreditCard, Gift, Star, Download, QrCode } from "lucide-react";
import phone from "@/assets/app-phone.png";
import donerHero from "@/assets/doner-hero.png";
import flame from "@/assets/flame.png";

const features = [
  { icon: MapPin, title: "Order ahead", text: "Skip the queue. Pick your branch, pick your time, walk in and grab it." },
  { icon: Bell, title: "Live tracking", text: "Watch your order move from spit to bag in real time." },
  { icon: Gift, title: "Loyalty rewards", text: "Every order earns flames. Redeem for free doners, sides and merch." },
  { icon: CreditCard, title: "One-tap pay", text: "Saved cards, wallets, and split-bill — checkout in seconds." },
  { icon: Star, title: "Faves & repeats", text: "Re-order your usual in two taps. We remember the no-onion." },
  { icon: Smartphone, title: "Branch-only drops", text: "Limited menus and members-only specials, pushed to your phone." },
];

const steps = [
  { num: "01", title: "Download", text: "iOS & Android. Free, light, fast." },
  { num: "02", title: "Sign in", text: "Phone number or Apple/Google. 10 seconds." },
  { num: "03", title: "Order", text: "Pickup, dine-in or delivery — your call." },
  { num: "04", title: "Earn", text: "Collect flames on every visit." },
];

const OurAppPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <PageShell
      eyebrow="Our app"
      title={
        <>
          Your doner, <span className="italic text-brand-charcoal">in your pocket.</span>
        </>
      }
      intro="Order, earn rewards, and skip the queue. The DONER & CO app is the fastest way from craving to first bite."
    >
      {/* Hero phone */}
      <section ref={ref} className="relative pb-32 pt-8 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-brand-charcoal text-brand-cream rounded-2xl px-5 py-3.5 hover:scale-105 transition-transform shadow-soft"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest opacity-70">Download on</div>
                  <div className="font-display font-bold text-base">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-brand-charcoal text-brand-cream rounded-2xl px-5 py-3.5 hover:scale-105 transition-transform shadow-soft"
              >
                <Download className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest opacity-70">Get it on</div>
                  <div className="font-display font-bold text-base">Google Play</div>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass-dark rounded-3xl p-6 inline-flex items-center gap-5 max-w-md"
            >
              <div className="h-20 w-20 rounded-2xl bg-brand-cream flex items-center justify-center flex-shrink-0">
                <QrCode className="h-12 w-12 text-brand-charcoal" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display font-extrabold text-brand-cream text-lg leading-tight">Scan to install</div>
                <p className="text-brand-cream/65 text-sm mt-1">Point your camera. We'll route you to your store.</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-6 pt-2">
              {[
                { num: "4.9", label: "App Store" },
                { num: "50k+", label: "Downloads" },
                { num: "10s", label: "To checkout" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <div className="font-display font-black text-brand-cream text-3xl">{s.num}</div>
                  <div className="text-brand-cream/65 text-[11px] uppercase tracking-[0.2em] mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y: phoneY, rotate: phoneRotate }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="absolute inset-0 bg-brand-ember/30 blur-[120px] rounded-full" />
            <motion.img
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={phone}
              alt="DONER & CO mobile app"
              className="relative w-full max-w-md drop-shadow-[0_50px_80px_rgba(0,0,0,0.6)]"
            />
            <motion.img
              src={flame}
              alt=""
              className="absolute -bottom-6 left-1/4 w-24 opacity-80"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative py-24">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-brand-cream text-4xl md:text-6xl mb-14 max-w-3xl text-balance"
          >
            Built for the way you <span className="italic text-brand-charcoal">eat.</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -8, rotate: -1 }}
                className="glass-dark rounded-3xl p-7 group cursor-default"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand-orange/25 flex items-center justify-center mb-5 group-hover:bg-brand-orange/45 transition-colors">
                  <f.icon className="h-7 w-7 text-brand-cream" strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-extrabold text-brand-cream text-xl mb-2">{f.title}</h3>
                <p className="text-brand-cream/70 text-sm leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty showcase */}
      <section className="relative py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-charcoal font-bold tracking-[0.3em] text-xs uppercase mb-4">
              <Gift className="h-3 w-3" /> Flame rewards
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-brand-cream text-5xl md:text-6xl leading-[0.95] mb-6"
            >
              Eat doners. <span className="italic text-brand-charcoal">Earn doners.</span>
            </motion.h2>
            <p className="text-brand-cream/80 text-lg leading-relaxed mb-8 max-w-xl">
              Every PKR you spend earns flames. Stack them up, unlock free wraps, sides and members-only drops.
            </p>
            <div className="space-y-3">
              {[
                { tier: "Ember", min: "0 flames", perk: "Welcome wrap, on us" },
                { tier: "Blaze", min: "500 flames", perk: "Free side every visit" },
                { tier: "Inferno", min: "1500 flames", perk: "Skip-the-line + birthday platter" },
              ].map((t, i) => (
                <motion.div
                  key={t.tier}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between gap-4 glass-dark rounded-2xl px-5 py-4"
                >
                  <div>
                    <div className="font-display font-extrabold text-brand-cream text-xl">{t.tier}</div>
                    <div className="text-brand-cream/60 text-xs uppercase tracking-widest">{t.min}</div>
                  </div>
                  <div className="text-brand-cream/85 text-sm text-right max-w-[55%]">{t.perk}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-square rounded-[2.5rem] glass-dark overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-orange/30 blur-3xl" />
            <motion.img
              animate={{ rotate: [0, 4, 0, -4, 0], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              src={donerHero}
              alt=""
              className="relative w-3/4 object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-brand-cream text-4xl md:text-6xl mb-14 max-w-3xl text-balance"
          >
            Up and running in <span className="italic text-brand-charcoal">a minute.</span>
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative glass-dark rounded-3xl p-7 overflow-hidden"
              >
                <div className="font-display font-black text-brand-charcoal/40 text-6xl absolute -top-2 -right-1">
                  {s.num}
                </div>
                <h3 className="relative font-display font-extrabold text-brand-cream text-2xl mb-2 mt-6">{s.title}</h3>
                <p className="relative text-brand-cream/70 text-sm">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] bg-gradient-ember p-10 md:p-16 overflow-hidden text-center"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-cream/15 blur-3xl rounded-full" />
            <h2 className="relative font-display font-black text-brand-cream text-4xl md:text-6xl leading-[0.95] mb-6 text-balance">
              Hungry yet? <span className="italic">Get the app.</span>
            </h2>
            <p className="relative text-brand-cream/85 text-lg max-w-xl mx-auto mb-8">
              Free, fast, and worth every byte. Your first order comes with a complimentary side of fries.
            </p>
            <div className="relative flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-brand-charcoal text-brand-cream rounded-2xl px-6 py-4 hover:scale-105 transition-transform"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest opacity-70">Download on</div>
                  <div className="font-display font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-brand-charcoal text-brand-cream rounded-2xl px-6 py-4 hover:scale-105 transition-transform"
              >
                <Download className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-widest opacity-70">Get it on</div>
                  <div className="font-display font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default OurAppPage;
