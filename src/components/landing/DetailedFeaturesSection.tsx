import { motion } from "framer-motion";
import { Timer, Brain, Repeat, Target, Heart, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Timer,
    title: "Focus Mode",
    subtitle: "Build Deep Work Habits",
    description: "Choose from 15, 25, 45, or 60-minute focus sessions using proven Pomodoro technique. Each completed session earns XP and builds your focus muscle. Track your daily and weekly progress.",
    highlights: ["Customizable durations", "Pomodoro technique", "XP rewards per session", "Focus history tracking"],
    gradient: "from-primary to-primary/80",
    image: "🎯",
  },
  {
    icon: Brain,
    title: "Dopamine Detox Path",
    subtitle: "Rewire Your Brain",
    description: "12+ science-backed lessons that progressively help you understand and overcome screen addiction. Learn about dopamine, cravings, and build healthier digital habits.",
    highlights: ["12+ interactive lessons", "Science-backed content", "Progressive curriculum", "Practical exercises"],
    gradient: "from-accent to-accent/80",
    image: "🧠",
  },
  {
    icon: Repeat,
    title: "Habit Builder",
    subtitle: "Track What Matters",
    description: "Track habits across 6 categories: Sleep, Exercise, Nutrition, Mindfulness, Learning, and Social. Build streaks, set reminders, and watch your habits transform.",
    highlights: ["6 habit categories", "Streak tracking", "Daily reminders", "Visual progress"],
    gradient: "from-orange-glow to-primary",
    image: "📊",
  },
  {
    icon: Target,
    title: "Daily Challenges",
    subtitle: "Stay Motivated",
    description: "Fresh challenges every day to keep you engaged. Complete challenges to earn bonus XP, unlock achievements, and maintain your streak. Perfect for building consistency.",
    highlights: ["Auto-reset daily", "Bonus XP rewards", "Achievement unlocks", "Difficulty levels"],
    gradient: "from-purple-glow to-accent",
    image: "🏆",
  },
  {
    icon: Heart,
    title: "Mindfulness Tools",
    subtitle: "Find Your Calm",
    description: "Access guided breathing exercises, mood logging, and meditation sessions. Take a mindful break whenever you feel overwhelmed or need to reset your focus.",
    highlights: ["Breathing exercises", "Mood tracking", "Guided meditations", "Stress relief tools"],
    gradient: "from-primary to-accent",
    image: "🧘",
  },
  {
    icon: BarChart3,
    title: "Progress & Analytics",
    subtitle: "See Your Growth",
    description: "Visualize your transformation with detailed stats. Track screen time saved, XP earned, streaks maintained, and focus improvements over time.",
    highlights: ["Screen time saved", "XP analytics", "Streak history", "Focus improvements"],
    gradient: "from-accent to-purple-glow",
    image: "📈",
  },
];

const FeatureBlock = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
    >
      {/* Image/Visual Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex-1 w-full"
      >
        <div className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 md:p-12 relative overflow-hidden`}>
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-xl" />
          </div>

          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-center relative z-10"
          >
            <span className="text-8xl md:text-9xl">{feature.image}</span>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
          >
            <span className="text-sm font-bold text-foreground">+25 XP</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Side */}
      <div className="flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
            <Icon className="w-4 h-4" />
            {feature.subtitle}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
            {feature.title}
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {feature.description}
          </p>

          <ul className="space-y-3 mb-6">
            {feature.highlights.map((highlight, i) => (
              <motion.li
                key={highlight}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </span>
                {highlight}
              </motion.li>
            ))}
          </ul>

          <Button variant="ghost" className="text-primary hover:text-primary/80 group p-0">
            Learn more
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const DetailedFeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Explore Every{" "}
            <span className="text-gradient-primary">Feature</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dive deep into what makes Foclupus the ultimate focus companion
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;
