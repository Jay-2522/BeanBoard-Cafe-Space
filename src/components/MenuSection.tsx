import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import cappuccinoCircle from "@/assets/cappuccino-circle.png";
import coldbrewCircle from "@/assets/coldbrew-circle.png";
import matchaCircle from "@/assets/matcha-circle.png";
import espressoCircle from "@/assets/espresso-circle.png";
import cappuccino from "@/assets/menu-cappuccino.jpg";
import matcha from "@/assets/menu-matcha.jpg";
import espresso from "@/assets/menu-espresso.jpg";
import coldbrew from "@/assets/menu-coldbrew.png";

const featuredItems = [
  {
    name: "Cappuccino",
    image: cappuccinoCircle,
    desc: "Classic Italian cappuccino.",
    details: "A perfect balance of espresso, steamed milk, and velvety foam — crafted for those who appreciate the classics.",
  },
  {
    name: "Cold Brew",
    image: coldbrewCircle,
    desc: "Slow-steeped cold brew.",
    details: "Steeped for 18 hours in cold water, our cold brew delivers a smooth, bold flavor with zero bitterness.",
  },
  {
    name: "Matcha Latte",
    image: matchaCircle,
    desc: "Ceremonial-grade matcha latte.",
    details: "Handcrafted with premium Japanese matcha and silky steamed milk, our signature latte is a zen moment in every sip.",
  },
  {
    name: "Espresso",
    image: espressoCircle,
    desc: "Pure, bold espresso shot.",
    details: "Single-origin beans, precision-pulled. A concentrated burst of flavor for the true coffee purist.",
  },
];

const menuCategories = ["COFFEE", "MATCHA", "FOOD", "DESSERTS"];

const coffeeMenu = [
  { name: "COFFEE", image: cappuccino },
  { name: "MATCHA", image: matcha },
  { name: "FOOD", image: coldbrew },
  { name: "DESSERTS", image: espresso },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("COFFEE");
  const [activePick, setActivePick] = useState("Matcha Latte");

 const activeItem = coffeeMenu.find((d) => d.name === activeCategory) || coffeeMenu[0];

  return (
    <section id="menu" className="bg-background relative overflow-hidden" ref={ref}>
      {/* FEATURED PICKS */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-8 rounded-full bg-caramel/20 flex items-center justify-center">
              <span className="text-caramel text-xs">✦</span>
            </div>
            <span className="font-body text-sm text-muted-foreground tracking-wider">Signature Brews</span>
          </motion.div>

          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
             className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide text-center w-full"
            >
              Bean Board's Best Picks
            </motion.h2>
          </div>

          {/* Coffee carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-6 md:gap-10 justify-center flex-wrap md:flex-nowrap">
              {featuredItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActivePick(item.name)}
                >
                  <AnimatePresence mode="wait">
                    {activePick === item.name ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, type: "spring" }}
                        className="flex flex-col md:flex-row items-center gap-6 bg-coffee-dark rounded-2xl p-6 max-w-md"
                      >
                        <motion.img
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          src={item.image}
                          alt={item.name}
                          className="w-40 h-40 object-contain"
                        />
                        <div className="text-cream">
                          <h4 className="font-display text-lg font-bold mb-2">{item.desc}</h4>
                          <p className="font-body text-cream/60 text-sm leading-relaxed mb-3">{item.details}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="circle"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="product-circle w-32 h-32 md:w-40 md:h-40"
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain rounded-full" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {activePick !== item.name && (
                    <p className="mt-3 font-body text-sm text-muted-foreground">{item.name}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* MENU SECTION */}
      <div className="py-20 md:py-28 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide text-center mb-4"
          >
            Our Brews For You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center font-body text-muted-foreground mb-16"
          >
            Choose a category and explore our craft.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-2">
                {menuCategories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`block font-display text-xl md:text-2xl transition-all duration-300 text-left ${
                      activeCategory === cat
                        ? "font-black text-foreground text-3xl md:text-4xl"
                        : "font-normal text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="mt-8 inline-flex"
              >
                <span className="bg-caramel text-primary-foreground px-4 py-2 rounded-full font-body text-xs font-bold tracking-wider">
                  you can order
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-border bg-cream-light p-4 overflow-hidden">
                      <img
                        src={activeItem.image}
                        alt={activeItem.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-caramel/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-2 -left-6 w-10 h-10 rounded-full bg-teal/10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;