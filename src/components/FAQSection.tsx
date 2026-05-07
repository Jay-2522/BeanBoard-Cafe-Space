import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes Bean Board different from other cafés?",
    a: "At Bean Board, we focus on more than just coffee — we focus on creating an experience. Every cup is crafted with premium beans, served with warmth, and designed to bring people together.",
  },
  {
    q: "Where do you source your coffee beans from?",
    a: "We carefully source our beans from trusted growers, selecting only the finest varieties. Each bean is chosen for its quality, flavor, and ethical sourcing practices.",
  },
  {
    q: "Are your workshops authentic?",
    a: "Absolutely! All our workshops are hosted in-house at our Bean Board cafés by certified professionals. Beware of unverified workshops in the city — ours are the real deal.",
  },
  {
    q: "What kind of food does Bean Board serve?",
    a: "Alongside our specialty coffees, we offer a thoughtfully curated menu of light bites, desserts, and seasonal specials — perfect for pairing with your favorite brew.",
  },
  {
    q: "Can I bring Bean Board to my city?",
    a: "Yes! Through our franchise program, you can bring the Bean Board experience to your city. We provide complete support — from training to operations and marketing.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide">
            Just in case, you are wondering
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-display text-lg font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-caramel shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground font-body leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
