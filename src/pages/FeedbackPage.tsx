import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Star, Send, Heart } from "lucide-react";
import { toast } from "sonner";

const topics = ["Food quality", "Service", "Ambience", "Value", "Delivery", "Other"];

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [topic, setTopic] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return toast.error("Please leave a rating.");
    if (!message.trim()) return toast.error("Tell us a bit more.");
    setSent(true);
    toast.success("Thanks for the feedback!");
  };

  return (
    <PageShell
      eyebrow="Feedback"
      title={<>Tell us how we <span className="italic text-brand-charcoal">did.</span></>}
      intro="The good, the bad, the spice level. We read every message — it's how we get sharper."
    >
      <section className="relative pb-32">
        <div className="container mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="glass-dark rounded-3xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="h-24 w-24 rounded-full bg-brand-ember mx-auto flex items-center justify-center mb-6"
                >
                  <Heart className="h-12 w-12 text-brand-cream" fill="currentColor" />
                </motion.div>
                <h2 className="font-display font-black text-brand-cream text-5xl mb-4">Thank you{name && `, ${name.split(" ")[0]}`}.</h2>
                <p className="text-brand-cream/80 text-lg max-w-md mx-auto">Your words land directly with our team. We'll keep grilling — better, every day.</p>
                <button
                  onClick={() => { setSent(false); setRating(0); setTopic(null); setMessage(""); setName(""); }}
                  className="mt-8 px-6 py-3 rounded-full bg-brand-cream text-brand-charcoal font-bold hover:scale-105 transition"
                >
                  Submit another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onSubmit={submit}
                className="glass-dark rounded-3xl p-8 md:p-12 space-y-10"
              >
                {/* Rating */}
                <div>
                  <h3 className="font-display font-extrabold text-brand-cream text-2xl mb-1">How was your visit?</h3>
                  <p className="text-brand-cream/60 text-sm mb-6">Tap a star.</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <motion.button
                        key={n}
                        type="button"
                        whileHover={{ scale: 1.15, rotate: -8 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(n)}
                        className="p-1"
                      >
                        <Star
                          className={`h-12 w-12 transition-all ${
                            (hover || rating) >= n
                              ? "text-brand-cream fill-brand-cream drop-shadow-[0_0_15px_rgba(255,240,210,0.6)]"
                              : "text-brand-cream/30"
                          }`}
                          strokeWidth={1.5}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <h3 className="font-display font-extrabold text-brand-cream text-2xl mb-4">What's it about?</h3>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <motion.button
                        key={t}
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setTopic(t)}
                        className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                          topic === t
                            ? "bg-brand-cream text-brand-charcoal"
                            : "bg-brand-cream/5 text-brand-cream/80 hover:bg-brand-cream/10 border border-brand-cream/15"
                        }`}
                      >
                        {t}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="font-display font-extrabold text-brand-cream text-2xl mb-4">Tell us more</h3>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="What worked? What didn't?"
                    className="w-full bg-brand-cream/5 border border-brand-cream/15 rounded-2xl px-5 py-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-cream transition resize-none text-base"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-brand-cream/70 text-xs uppercase tracking-[0.2em] font-bold mb-2">Your name (optional)</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="So we can thank you properly"
                    className="w-full bg-brand-cream/5 border border-brand-cream/15 rounded-2xl px-5 py-3 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-cream transition"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-brand-cream text-brand-charcoal font-display font-extrabold text-lg shadow-soft inline-flex items-center justify-center gap-2"
                >
                  Send feedback <Send className="h-5 w-5" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageShell>
  );
};

export default FeedbackPage;
