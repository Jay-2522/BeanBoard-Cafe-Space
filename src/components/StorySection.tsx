import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import coffeeCircle from "@/assets/coffee-circle-1.png";
import storyCafe from "@/assets/story-cafe.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";
import cmApVisit from "@/assets/cm-ap-visit.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foodAward from "@/assets/foodAward.png";
import ccriBook from "@/assets/ccriBook.png";
import ccriFeature from "@/assets/ccriFeature.png";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
const milestones = [
  {
    image: cmApVisit,
    tag: "✨ Milestone Moment",
    title: "India's First Robotic Café",
    description: "Bean Board proudly unveiled India's first Robotic Café at the CII Summit 2025 in Vizag, inaugurated by the Honourable Chief Minister of Andhra Pradesh, Shri Nara Chandrababu Naidu garu — serving India's fastest espresso in under 5 seconds.",
  },
  {
    image: foodAward,
    tag: "🏆 Award",
    title: "South India's Most Promising Franchise Café Brand",
    description: "Bean Board was honoured at the 10th Edition Food Connoisseurs India Awards, receiving the title of South India's Most Promising Franchise Café Brand — a testament to our relentless pursuit of specialty coffee excellence.",
  },
  {
    image: ccriBook,
    tag: "📖 Recognition",
    title: "Featured in CCRI's 100 Innovative Startups Book",
    description: "Bean Board was selected by the Coffee Board of India and featured in the prestigious CCRI – 100 Innovative Startups Coffee Table Book, recognizing us among the most innovative coffee enterprises in the country.",
  },
  {
    image: ccriFeature,
    tag: "🌟 Publication",
    title: "A Story Worth Telling",
    description: "Bean Board's founding journey, values, and vision were showcased in the AIC–CCRI Coffee Table Book — celebrating our growth from a single café in Visakhapatnam to a beloved regional brand with a 95% repeat customer rate.",
  },
];

const [current, setCurrent] = useState(0);
const [direction, setDirection] = useState(1);
const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const go = (index: number, dir: number) => { setDirection(dir); setCurrent(index); };
const next = () => go((current + 1) % milestones.length, 1);
const prev = () => go((current - 1 + milestones.length) % milestones.length, -1);

useEffect(() => {
  timerRef.current = setTimeout(next, 4000);
  return () => { if (timerRef.current) clearTimeout(timerRef.current); };
}, [current]);

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};


  return (
    <section id="story" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-8 rounded-full bg-caramel/20 flex items-center justify-center">
            <span className="text-caramel text-xs">☕</span>
          </div>
          <span className="font-body text-sm text-muted-foreground tracking-wider">Your Coffee Legacy</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wide text-center mb-8"
        >
          About Bean Board
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center font-body text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          At Bean Board, we believe coffee is more than a beverage. It’s a ritual, a comfort, and a conversation starter.
        </motion.p>

        {/* Spinning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-14"
        >
          <div className="relative w-40 h-40">
            <div className="product-circle w-full h-full">
              <img src={coffeeCircle} alt="Latte art" className="w-full h-full object-cover rounded-full" />
            </div>
            <svg className="absolute inset-0 w-full h-full badge-spin" viewBox="0 0 200 200">
              <defs>
                <path id="circlePath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="fill-coffee-light" style={{ fontSize: '11px', fontFamily: 'DM Sans' }}>
                <textPath xlinkHref="#circlePath">
                  COFFEE · CRAFT · CONNECTION · EVERYDAY · BEAN BOARD ·
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Two-column text */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed">
            Bean Board Café was featured by the Coffee Board of India in the prestigious CCRI – 100 Innovative Startups Book and recognized as South India’s Most Promising Franchise Café Brand, highlighting our commitment to specialty coffee,
             responsibly sourced beans, and a community-driven café experience. ☕.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              Bean Board also launched India’s first Robotic Café at the CII Summit 2025 in Vizag, inaugurated by N. Chandrababu Naidu, 
              showcasing innovation with one of India’s fastest espresso experiences served in under five seconds.
            </p>
          </motion.div>
        </div>

        {/* FOUNDER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-coffee-dark rounded-3xl p-8 md:p-12 mb-12 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 checker-bg opacity-5" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Founder image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-caramel/30 shadow-[var(--shadow-elevated)]">
                <img src={founderPortrait} alt="Founder of Bean Board" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-6xl text-caramel/40 font-display leading-none mb-2">"</div>
              <p className="font-display text-xl md:text-2xl text-cream italic leading-relaxed mb-4">
                 From the very beginning, our vision has been simple: to create a space where people can slow down, 
                connect, and feel at home over a cup of coffee that’s brewed to perfection.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-0.5 bg-teal" />
                <div>
                  <p className="font-body text-cream font-semibold text-sm">Founder</p>
                  <p className="font-body text-cream/50 text-xs">Bean Board Coffee</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Milestone Carousel */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.6 }}
  className="mb-12 max-w-4xl mx-auto"
>
  <div className="bg-card border border-border rounded-3xl p-8 md:p-10 overflow-hidden relative">
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={current}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 shadow-[var(--shadow-warm)]"
        >
          <img src={milestones[current].image} alt={milestones[current].title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex-1">
          <span className="inline-block bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-body font-medium mb-3">
            {milestones[current].tag}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
            {milestones[current].title}
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            {milestones[current].description}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Dots + Arrows */}
    <div className="flex items-center justify-between mt-8">
      <div className="flex gap-2">
        {milestones.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "bg-teal w-6 h-2" : "bg-muted-foreground/30 w-2 h-2"
            }`}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-teal transition-colors duration-200"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-teal transition-colors duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
</motion.div>

        {/* More about button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#locations"
            className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-3 font-body text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            → more about
          </a>
        </motion.div>

        {/* Café image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] max-w-5xl mx-auto"
        >
          <img src={storyCafe} alt="Bean Board Café" className="w-full h-[400px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
