import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, CreditCard } from "lucide-react";

const XPRing = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
    className="relative w-48 h-48 md:w-64 md:h-64"
  >
    {/* Outer glow */}
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
    
    {/* Progress ring background */}
    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="hsl(var(--muted))"
        strokeWidth="8"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 0.75 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        style={{ pathLength: 0 }}
        strokeDasharray="264"
        strokeDashoffset="66"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </svg>

    {/* Center content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="text-center"
      >
        <span className="text-3xl md:text-4xl font-black text-foreground">750</span>
        <span className="block text-sm font-semibold text-primary">XP Today</span>
      </motion.div>
    </div>

    {/* Floating badges */}
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg"
    >
      🔥 Streak: 7
    </motion.div>

    <motion.div
      animate={{ y: [5, -5, 5] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-2 -left-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg"
    >
      🐺 Hunter Rank
    </motion.div>
  </motion.div>
);

const TrustBadge = ({ icon: Icon, text, delay }: { icon: React.ElementType; text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-2 text-muted-foreground text-sm"
  >
    <Icon className="w-4 h-4 text-primary" />
    <span>{text}</span>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6"
            >
              Turn Screen Time Into{" "}
              <span className="text-gradient-primary">Growth Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Break free from digital distractions. Build laser focus. Level up your life—one session at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Button variant="hero" size="lg">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <TrustBadge icon={Users} text="Join the pack" delay={0.6} />
              <span className="text-border">•</span>
              <TrustBadge icon={Sparkles} text="Free to start" delay={0.7} />
              <span className="text-border">•</span>
              <TrustBadge icon={CreditCard} text="No credit card needed" delay={0.8} />
            </motion.div>
          </div>

          {/* Right content - XP Ring */}
          <div className="flex-1 flex items-center justify-center">
            <XPRing />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
