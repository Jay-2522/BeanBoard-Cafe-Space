import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, Users, CheckCircle, Shield } from "lucide-react";
import workshopMatcha from "@/assets/workshop-matcha.jpg";
import workshopTiramisu from "@/assets/workshop-tiramisu.jpg";

const workshops = [
  {
    title: "Matcha Making Workshop",
    image: workshopMatcha,
    description:
      "Learn the art of traditional matcha preparation — from whisking techniques to latte art. Hosted by our certified baristas right here at Bean Board.",
    duration: "2 hours",
    capacity: "12 people",
    nextDate: "Every Saturday",
  },
  {
    title: "Tiramisu Masterclass",
    image: workshopTiramisu,
    description:
      "Master the classic Italian dessert with our expert pastry chef. From espresso-soaked ladyfingers to perfect mascarpone layers.",
    duration: "2.5 hours",
    capacity: "10 people",
    nextDate: "Every Sunday",
  },
];

const WorkshopsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [bookingOpen, setBookingOpen] = useState<number | null>(null);

  return (
    <section id="workshops" className="relative overflow-hidden">
      {/* Dark section with checker accent */}
      <div className="bg-coffee-dark py-24 md:py-32 relative">
        {/* Subtle checker overlay */}
        <div className="absolute inset-0 checker-bg opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <p className="text-teal font-body text-sm tracking-[0.2em] uppercase mb-4">Learn & Experience</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream uppercase tracking-wide mb-4">
              Our Workshops
            </h2>
            <p className="text-cream/50 font-body max-w-lg mx-auto">
              Authentic, hands-on workshops hosted right here at Bean Board café — 
              the real deal, not another copycat.
            </p>
          </motion.div>

          {/* Authenticity badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-16"
          >
            <div className="flex items-center gap-2 bg-teal/15 border border-teal/30 rounded-full px-5 py-2.5">
              <Shield className="w-4 h-4 text-teal" />
              <span className="font-body text-sm font-medium text-teal">
                Verified Bean Board Workshops — Hosted at our Vizag cafés
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {workshops.map((workshop, i) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className="bg-coffee-medium/50 backdrop-blur-sm border border-cream/10 rounded-3xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-cream mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-cream/60 font-body mb-6">{workshop.description}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-cream/50 font-body">
                      <Clock className="w-4 h-4 text-teal" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cream/50 font-body">
                      <Users className="w-4 h-4 text-teal" />
                      {workshop.capacity}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cream/50 font-body">
                      <Calendar className="w-4 h-4 text-teal" />
                      {workshop.nextDate}
                    </div>
                  </div>

                  {bookingOpen === i ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-coffee-dark/50 border border-cream/20 rounded-xl px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-teal/50"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-coffee-dark/50 border border-cream/20 rounded-xl px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-teal/50"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-coffee-dark/50 border border-cream/20 rounded-xl px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-teal/50"
                      />
                      <div className="flex gap-3">
                        <button className="flex-1 bg-teal text-primary-foreground py-3 rounded-full font-body font-semibold hover:bg-teal/90 transition-colors flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Confirm Booking
                        </button>
                        <button
                          onClick={() => setBookingOpen(null)}
                          className="px-6 py-3 rounded-full border border-cream/20 font-body text-sm text-cream/60 hover:text-cream hover:border-cream/40 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => setBookingOpen(i)}
                      className="w-full bg-teal text-primary-foreground py-3.5 rounded-full font-body font-semibold hover:bg-teal/90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Book This Workshop
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
