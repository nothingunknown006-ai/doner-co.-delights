const items = [
  "TURKISH DONER",
  "FLAME GRILLED",
  "SHAWARMA",
  "QUALITY MEAT",
  "BY MONAL GROUP",
  "SKEWERED, PERFECTLY",
];

export const Marquee = () => {
  const all = [...items, ...items];
  return (
    <div className="relative py-8 border-y border-brand-cream/15 bg-brand-charcoal/10 overflow-hidden">
      <div className="flex marquee whitespace-nowrap gap-12 w-max">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display font-black text-4xl md:text-6xl text-brand-cream/90 tracking-tight">
              {t}
            </span>
            <span className="text-brand-charcoal text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
