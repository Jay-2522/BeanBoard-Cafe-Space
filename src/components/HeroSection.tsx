import { motion } from "framer-motion";
import heroLatte from "@/assets/hero-latte-art.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Dark checkered background */}
      <div className="absolute inset-0 checker-bg" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/40 via-coffee-dark/20 to-coffee-dark/60" />

      <div className="relative z-10 pt-24 pb-0">

      

        {/* COFFEE - full bleed massive text */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-cream uppercase leading-none tracking-tighter text-center"
            style={{ fontSize: "clamp( 5rem, 12vw, 22rem)", lineHeight: 0.85 }}
          >
            COFFEE
          </motion.h1>
          <br/>

          {/* FOR YOUR - second line, italic script style, overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center -mt-4 relative z-20"
          >
            <span
              className="font-display italic font-black text-caramel leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
            >
              Roasted with Passion,
            </span>
          </motion.div>

          {/* Served with Community */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-cream/70 italic mt-1 tracking-widest uppercase"
            style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)", letterSpacing: "0.15em" }}
          >
            Served with Community
          </motion.p>
        </div>

       

        {/* Hero product image - centered, large, overlapping bottom */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex justify-center relative z-30 -mt-4"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={heroLatte}
              alt="Bean Board signature latte art"
              className="h-auto drop-shadow-2xl"
              style={{ width: "clamp(280px, 35vw, 560px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
       {/* Side text labels - like MIVA */}
        <div className="relative px-8 mt-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute left-8 top-0 text-cream/50 text-xs leading-relaxed max-w-[180px]"
          >
            At Bean Board, every cup invites you to slow down—turning simple moments into memories that linger long after the last sip.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute right-8 top-0 text-cream/50 text-xs leading-relaxed max-w-[180px] text-right"
          >
           More than a cafe, Bean Board is a space to pause, connect, and 
           gather—where thoughtfully brewed coffee makes every moment feel meaningful.
          </motion.p>
        </div>

      {/* Drip transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,0 C80,0 80,50 160,50 C200,50 200,20 240,20 C280,20 280,60 360,60 C400,60 400,10 440,10 C520,10 520,45 600,45 C640,45 640,0 680,0 C760,0 760,55 840,55 C880,55 880,15 920,15 C1000,15 1000,40 1080,40 C1120,40 1120,0 1160,0 C1240,0 1240,50 1320,50 C1360,50 1360,20 1440,20 L1440,80 L0,80 Z"
            fill="hsl(35, 35%, 91%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;