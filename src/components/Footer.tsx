import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark py-16 relative overflow-hidden">
      {/* Drip top edge */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,50 C80,50 80,10 160,10 C200,10 200,30 240,30 C280,30 280,0 360,0 C400,0 400,40 440,40 C520,40 520,15 600,15 C640,15 640,50 680,50 C760,50 760,5 840,5 C880,5 880,35 920,35 C1000,35 1000,10 1080,10 C1120,10 1120,50 1160,50 C1240,50 1240,0 1320,0 C1360,0 1360,30 1440,30 L1440,0 L0,0 Z"
            fill="hsl(35, 35%, 91%)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-8">
        {/* Promise section */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display text-3xl font-bold text-cream mb-4 uppercase tracking-wide">Our Promise</h3>
          <p className="font-body text-cream/50 leading-relaxed">
            At Bean Board, every cup is more than coffee — it's a moment shared, a memory created, 
            and a community strengthened. So the next time you step in, know that you're walking 
            into a space built for you.
          </p>
        </div>

        <a href="#home" className="font-display text-3xl font-bold text-cream inline-block mb-4">
          Bean<span className="text-teal">Board</span>
        </a>
        <p className="text-cream/40 font-body mb-1">Brewed with care. Served with warmth.</p>
        <p className="text-cream/30 font-body text-sm mb-8">Small-batch beans. Slow-crafted cups.</p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://www.instagram.com/beanboard_panorama_hills"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:border-teal hover:text-teal transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-cream/10 pt-8">
          <p className="text-cream/25 font-body text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-caramel" /> by Nikita Reddy 
    
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
