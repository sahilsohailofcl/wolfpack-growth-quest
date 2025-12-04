import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
  "Reduce screen time by 50% on average",
  "Build focus muscles with proven techniques",
  "Join a pack of focused wolves",
  "Track your transformation in real-time",
  "Unlock achievements and rewards",
  "Science-backed dopamine detox methods",
];

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black text-cream-light">
      {count}{suffix}
    </span>
  );
};

const WhySection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-stats rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black text-cream-light mb-4"
              >
                Why Wolves Choose Foclupus
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-cream/80 mb-8"
              >
                Join thousands of focused individuals who've transformed their relationship with technology
              </motion.p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-cream/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right content - Stats */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-brown-dark/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-cream/10"
              >
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <AnimatedNumber value={50} suffix="+" />
                <p className="text-cream/70 mt-2">Hours saved per month</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="bg-brown-dark/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-cream/10"
              >
                <AnimatedNumber value={92} suffix="%" />
                <p className="text-cream/70 mt-2">Report better focus</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
