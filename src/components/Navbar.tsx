import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Workshops", href: "#workshops" },
  { label: "Story", href: "#story" },
  { label: "Locations", href: "#locations" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-coffee/95 backdrop-blur-md shadow-lg py-3"
          : "bg-coffee py-5"
      }`}
    >
 

<div className="container mx-auto flex items-center justify-between px-6">
  <a href="#home">
   <img 
  src={logo} 
  alt="BeanBoard" 
  className="h-12 w-auto object-contain drop-shadow-lg"
/>
  </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 text-sm font-body tracking-wider ${scrolled ? "text-stone-700 hover:text-stone-900" : "text-cream/70 hover:text-cream"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#faq" className={`transition-colors duration-300 text-sm font-body tracking-wider ${scrolled ? "text-stone-700 hover:text-stone-900" : "text-cream/70 hover:text-cream"}`}>
            Contact us
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-stone-700 hover:text-teal text-sm font-body transition-colors"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-stone-700 hover:text-teal text-sm font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
