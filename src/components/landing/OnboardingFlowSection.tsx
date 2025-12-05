import { motion } from "framer-motion";
import { UserCircle, Target, LayoutDashboard, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    step: 1,
    title: "Create Your Wolf",
    description: "Sign up and pick your wolf name. Set your focus goals.",
    emoji: "🐺",
  },
  {
    icon: Target,
    step: 2,
    title: "Choose Your Path",
    description: "Select Focus, Detox, Mindfulness, or tackle all three!",
    emoji: "🎯",
  },
  {
    icon: LayoutDashboard,
    step: 3,
    title: "Complete Daily Activities",
    description: "Focus sessions, lessons, habits, and challenges await.",
    emoji: "📋",
  },
  {
    icon: TrendingUp,
    step: 4,
    title: "Earn XP & Level Up",
    description: "Watch your wolf evolve from Cub to Alpha.",
    emoji: "⬆️",
  },
  {
    icon: BarChart3,
    step: 5,
    title: "Track Your Progress",
    description: "See your transformation with detailed analytics.",
    emoji: "📊",
  },
];

const OnboardingFlowSection = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm text-primary font-semibold mb-4"
          >
            <span className="text-xl">🗺️</span>
            Your Adventure
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            How Your Journey{" "}
            <span className="text-gradient-primary">Unfolds</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From signup to Alpha—here's your path to peak focus
          </p>
        </motion.div>

        {/* Flow Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-auto md:h-1 md:top-1/2 md:left-0 md:right-0 bg-gradient-to-b md:bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20" />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-2"
                >
                  {/* Step indicator */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                      <span className="text-3xl">{step.emoji}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="md:text-center flex-1">
                    <h3 className="font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-2 text-primary/30 text-xl">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* App mockup hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-3xl p-8 max-w-lg mx-auto">
            <span className="text-5xl mb-4 block">📱</span>
            <p className="text-foreground font-semibold mb-2">
              Experience it yourself
            </p>
            <p className="text-muted-foreground text-sm">
              The entire journey feels like playing a game, not using another boring productivity app
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingFlowSection;
