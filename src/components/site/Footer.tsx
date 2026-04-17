import { Flame, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 border-t border-brand-cream/15">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-brand-cream" strokeWidth={2.5} />
              <span className="font-display font-extrabold text-brand-cream text-xl">DONER & CO</span>
            </div>
            <p className="text-brand-cream/70 max-w-xs">
              Skewered, perfectly. Authentic Turkish doner by Monal Group.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-cream uppercase tracking-widest text-xs mb-4">Visit</h4>
            <ul className="space-y-2 text-brand-cream/80">
              <li>Beverly Centre</li>
              <li>F-6 Markaz</li>
              <li>I-8 Markaz</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-cream uppercase tracking-widest text-xs mb-4">Follow</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full glass flex items-center justify-center hover:scale-110 transition">
                <Instagram className="h-5 w-5 text-brand-cream" />
              </a>
              <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-full glass flex items-center justify-center hover:scale-110 transition">
                <Facebook className="h-5 w-5 text-brand-cream" />
              </a>
            </div>
          </div>
        </div>

        <div className="font-display font-black text-brand-charcoal/30 text-[20vw] leading-none text-center select-none -mb-8 overflow-hidden">
          DONER&CO
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-brand-cream/15 text-brand-cream/70 text-xs">
          <span>© {new Date().getFullYear()} Doner & Co. All rights reserved.</span>
          <span>By Monal Group</span>
        </div>
      </div>
    </footer>
  );
};
