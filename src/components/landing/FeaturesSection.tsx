import { motion } from "framer-motion";
import { Timer, Brain, Target, BarChart3, Repeat, Trophy, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Focus Mode",
    description: "15-60 min timed sessions with Pomodoro technique and XP rewards",
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Brain,
    title: "Dopamine Detox",
    description: "12+ science-backed lessons to rewire your brain and reduce cravings",
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Repeat,
    title: "Habit Builder",
    description: "Track 6 habit categories with streaks and daily reminders",
    gradient: "from-orange-glow/10 to-orange-glow/5",
    iconBg: "bg-orange-glow/20",
    iconColor: "text-primary",
  },
  {
    icon: Target,
    title: "Daily Challenges",
    description: "Auto-reset challenges to keep you motivated and on track",
    gradient: "from-purple-glow/10 to-purple-glow/5",
    iconBg: "bg-purple-glow/20",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    title: "Mindfulness Tools",
    description: "Breathing exercises, mood logging, and meditation sessions",
    gradient: "from-primary/10 to-accent/5",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track screen time saved, XP earned, and focus improvements",
    gradient: "from-accent/10 to-primary/5",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Zap,
    title: "XP & Levels",
    description: "Earn XP for every activity and watch your level grow",
    gradient: "from-primary/10 to-orange-glow/5",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Trophy,
    title: "Wolf Ranking",
    description: "Progress from Cub to Alpha as you complete your journey",
    gradient: "from-accent/10 to-purple-glow/5",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${feature.gradient} cursor-pointer group relative overflow-hidden`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
      
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 relative z-10`}
      >
        <Icon className={`w-7 h-7 ${feature.iconColor}`} />
      </motion.div>
      
      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
        {feature.description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-sm text-accent font-semibold mb-4"
          >
            <Zap className="w-4 h-4" />
            Packed with Features
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Reclaim Your Focus</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A complete gamified system designed to help you break free from distractions and build unshakeable focus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
