import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Panorama Hills", city: "Visakhapatnam", status: "open" },
  { name: "Chinna Waltair", city: "Visakhapatnam", status: "open" },
  { name: "Seethammadara", city: "Visakhapatnam", status: "open" },
  { name: "MVP Colony", city: "Visakhapatnam", status: "open" },
  { name: "VIP Road", city: "Visakhapatnam", status: "open" },
  { name: "Financial District", city: "Hyderabad", status: "open" },
  { name: "Nagamallithota Junction", city: "Kakinada", status: "open" },
  { name: "Yendada", city: "Visakhapatnam", status: "coming" },
  { name: "Inorbit Mall", city: "Visakhapatnam", status: "coming" },
  { name: "Robotic Café", city: "Visakhapatnam", status: "coming" },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="locations" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-caramel/20 flex items-center justify-center">
              <span className="text-caramel text-xs">📍</span>
            </div>
            <span className="font-body text-sm text-muted-foreground tracking-wider">Find Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wide">
            Our Locations
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-caramel/40 hover:shadow-[var(--shadow-warm)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-caramel mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-caramel transition-colors">
                    {loc.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{loc.city}</p>
                  {loc.status === "coming" && (
                    <span className="inline-block mt-2 bg-caramel/20 text-caramel px-3 py-1 rounded-full text-xs font-body font-medium">
                      Opening Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
