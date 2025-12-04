import { motion } from "framer-motion";
import { Timer, Brain, Target, BarChart3, Repeat, Trophy } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Focus Sessions",
    description: "Timed focus sessions with XP rewards to build deep work habits",
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Brain,
    title: "Dopamine Detox",
    description: "Progressive lessons to break screen addiction and reclaim your attention",
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Target,
    title: "Daily Challenges",
    description: "Gamified tasks to keep you motivated and on track",
    gradient: "from-orange-glow/10 to-orange-glow/5",
    iconBg: "bg-orange-glow/20",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visualize your growth with detailed stats and insights",
    gradient: "from-purple-glow/10 to-purple-glow/5",
    iconBg: "bg-purple-glow/20",
    iconColor: "text-accent",
  },
  {
    icon: Repeat,
    title: "Habit Building",
    description: "Replace doom-scrolling with healthy, meaningful activities",
    gradient: "from-primary/10 to-accent/5",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Trophy,
    title: "Wolf Ranks",
    description: "Level up from Cub to Alpha as you complete your journey",
    gradient: "from-accent/10 to-primary/5",
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
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${feature.gradient} cursor-pointer group`}
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-6 h-6 ${feature.iconColor}`} />
      </motion.div>
      
      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Everything You Need to Reclaim Your Focus
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete system designed to help you break free from distractions and build unshakeable focus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
