import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, CreditCard, ChevronDown, Apple, Smartphone } from "lucide-react";

const WolfMascot = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
    className="relative"
  >
    {/* Animated wolf character container */}
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-64 h-64 md:w-80 md:h-80"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      
      {/* Wolf circle with gradient */}
      <div className="relative w-full h-full rounded-full gradient-primary flex items-center justify-center shadow-xl glow-orange">
        <motion.span 
          className="text-8xl md:text-9xl"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🐺
        </motion.span>
      </div>

      {/* XP Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="absolute -top-2 -right-2 bg-card border-2 border-primary rounded-xl px-4 py-2 shadow-lg"
      >
        <span className="text-xl font-black text-foreground">+25 XP</span>
      </motion.div>

      {/* Streak Badge */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg"
      >
        🔥 7 Day Streak!
      </motion.div>

      {/* Level Badge */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-8 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg"
      >
        Level 12
      </motion.div>

      {/* Rank Badge */}
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-8 bg-card border-2 border-accent text-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg"
      >
        🎯 Hunter Rank
      </motion.div>
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

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="text-sm text-muted-foreground">Scroll to explore</span>
      <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm text-primary font-semibold mb-6"
            >
              <span className="text-xl">🐺</span>
              The Focused Wolf
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6"
            >
              Master Focus.{" "}
              <span className="text-gradient-primary">Defeat Distractions.</span>{" "}
              <br className="hidden md:block" />
              Become the Alpha.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Join thousands of wolves on a gamified journey to break free from screen addiction,
              build laser focus, and level up your life—one session at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8">
                Try Free
              </Button>
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <Apple className="w-4 h-4" />
                iOS App
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Smartphone className="w-4 h-4" />
                Android App
              </Button>
              <span className="text-xs text-muted-foreground px-2">or</span>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                Add to Home Screen (PWA)
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6"
            >
              <TrustBadge icon={Users} text="Join the pack" delay={0.6} />
              <span className="text-border hidden sm:block">•</span>
              <TrustBadge icon={Sparkles} text="Free to start" delay={0.7} />
              <span className="text-border hidden sm:block">•</span>
              <TrustBadge icon={CreditCard} text="No credit card" delay={0.8} />
            </motion.div>
          </div>

          {/* Right content - Wolf Mascot */}
          <div className="flex-1 flex items-center justify-center">
            <WolfMascot />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
