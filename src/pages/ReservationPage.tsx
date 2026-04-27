import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Calendar, Clock, Users, MapPin, Check } from "lucide-react";
import { toast } from "sonner";

const locations = ["Beverly Centre", "F-6 Markaz", "I-8 Markaz"];
const times = ["12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const ReservationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", location: locations[0], date: "", time: "", guests: 2, notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill in name, phone, date and time.");
      return;
    }
    setSubmitted(true);
    toast.success("Reservation request sent!");
  };

  const update = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <PageShell
      eyebrow="Reservations"
      title={<>Save your <span className="italic text-brand-charcoal">seat.</span></>}
      intro="Book a table at any of our three locations. We'll confirm your reservation by phone within the hour."
    >
      <section className="relative pb-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 glass-dark rounded-3xl p-8 md:p-12"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="h-20 w-20 rounded-full bg-brand-cream mx-auto flex items-center justify-center mb-6"
                  >
                    <Check className="h-10 w-10 text-brand-ember" strokeWidth={3} />
                  </motion.div>
                  <h2 className="font-display font-black text-brand-cream text-4xl mb-3">You're on the list.</h2>
                  <p className="text-brand-cream/80 mb-8">We'll call {form.phone} shortly to confirm your table for {form.guests} on {form.date} at {form.time}.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ ...form, name: "", phone: "", email: "", date: "", time: "", notes: "" }); }}
                    className="px-6 py-3 rounded-full bg-brand-cream text-brand-charcoal font-bold hover:scale-105 transition"
                  >
                    Make another booking
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} placeholder="Your name" />
                    <Field label="Phone" value={form.phone} onChange={(v) => update("phone", v)} placeholder="03XX XXXXXXX" type="tel" />
                  </div>
                  <Field label="Email (optional)" value={form.email} onChange={(v) => update("email", v)} placeholder="you@email.com" type="email" />

                  <div>
                    <Label icon={MapPin}>Location</Label>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {locations.map((loc) => (
                        <motion.button
                          key={loc}
                          type="button"
                          whileTap={{ scale: 0.96 }}
                          onClick={() => update("location", loc)}
                          className={`px-4 py-3 rounded-2xl font-semibold text-sm transition-all ${
                            form.location === loc
                              ? "bg-brand-cream text-brand-charcoal"
                              : "bg-brand-cream/5 text-brand-cream/80 hover:bg-brand-cream/10 border border-brand-cream/15"
                          }`}
                        >
                          {loc}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label icon={Calendar}>Date</Label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        className="w-full bg-brand-cream/5 border border-brand-cream/15 rounded-2xl px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-cream transition"
                      />
                    </div>
                    <div>
                      <Label icon={Users}>Guests</Label>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => update("guests", Math.max(1, form.guests - 1))} className="h-12 w-12 rounded-2xl bg-brand-cream/5 border border-brand-cream/15 text-brand-cream font-bold hover:bg-brand-cream/10">−</button>
                        <div className="flex-1 text-center font-display font-extrabold text-brand-cream text-2xl bg-brand-cream/5 border border-brand-cream/15 rounded-2xl py-2">{form.guests}</div>
                        <button type="button" onClick={() => update("guests", Math.min(20, form.guests + 1))} className="h-12 w-12 rounded-2xl bg-brand-cream/5 border border-brand-cream/15 text-brand-cream font-bold hover:bg-brand-cream/10">+</button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label icon={Clock}>Time</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {times.map((t) => (
                        <motion.button
                          key={t}
                          type="button"
                          whileTap={{ scale: 0.95 }}
                          onClick={() => update("time", t)}
                          className={`py-2.5 rounded-xl text-sm font-bold transition ${
                            form.time === t
                              ? "bg-brand-cream text-brand-charcoal"
                              : "bg-brand-cream/5 text-brand-cream/80 hover:bg-brand-cream/10 border border-brand-cream/15"
                          }`}
                        >
                          {t}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-cream/70 text-xs uppercase tracking-[0.2em] font-bold mb-2">Notes (optional)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      rows={3}
                      placeholder="Allergies, occasion, seating preference…"
                      className="w-full bg-brand-cream/5 border border-brand-cream/15 rounded-2xl px-4 py-3 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-cream transition resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-brand-cream text-brand-charcoal font-display font-extrabold text-lg shadow-soft"
                  >
                    Reserve my table
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Side info */}
            <motion.aside
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5"
            >
              <div className="glass-dark rounded-3xl p-7">
                <h3 className="font-display font-extrabold text-brand-cream text-2xl mb-3">Hours</h3>
                <ul className="space-y-2 text-brand-cream/80 text-sm">
                  <li className="flex justify-between"><span>Mon – Thu</span><span>12pm – 11pm</span></li>
                  <li className="flex justify-between"><span>Fri – Sun</span><span>12pm – 1am</span></li>
                </ul>
              </div>
              <div className="glass-dark rounded-3xl p-7">
                <h3 className="font-display font-extrabold text-brand-cream text-2xl mb-3">Large parties</h3>
                <p className="text-brand-cream/80 text-sm mb-4">For groups over 10, please call us directly to arrange.</p>
                <a href="tel:+92000" className="inline-flex px-4 py-2 rounded-full bg-brand-cream/10 text-brand-cream text-sm font-bold border border-brand-cream/20 hover:bg-brand-cream/20 transition">Call us</a>
              </div>
              <div className="rounded-3xl p-7 bg-gradient-ember">
                <h3 className="font-display font-extrabold text-brand-cream text-2xl mb-2">Walk-ins welcome.</h3>
                <p className="text-brand-cream/90 text-sm">Reservations help — but the door is always open.</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

const Label = ({ icon: Icon, children }: { icon: any; children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-brand-cream/70 text-xs uppercase tracking-[0.2em] font-bold mb-2">
    <Icon className="h-3.5 w-3.5" /> {children}
  </div>
);

const Field = ({ label, value, onChange, placeholder, type = "text" }: any) => (
  <div>
    <label className="block text-brand-cream/70 text-xs uppercase tracking-[0.2em] font-bold mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-brand-cream/5 border border-brand-cream/15 rounded-2xl px-4 py-3 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-cream transition"
    />
  </div>
);

export default ReservationPage;
