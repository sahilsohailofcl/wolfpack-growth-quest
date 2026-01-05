import { motion } from "framer-motion";

const features = [
  { emoji: "🎯", label: "Progress Milestones" },
  { emoji: "🏆", label: "Visual Rewards" },
  { emoji: "🔔", label: "Smart Reminders" },
  { emoji: "📊", label: "Habit Insights" },
  { emoji: "🔥", label: "Streak Tracking" },
  { emoji: "💪", label: "Gentle Motivation" },
  { emoji: "🎯", label: "Personalized Goals" },
  { emoji: "📈", label: "Clean Analytics" },
];

// Duplicate for seamless loop
const allFeatures = [...features, ...features];

const MovingFeatureBar = () => {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm font-medium"
        >
          Packed with features to keep you going
        </motion.p>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 animate-slide-left group-hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {allFeatures.map((feature, index) => (
              <motion.div
                key={`${feature.label}-${index}`}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex-shrink-0"
              >
                <div className="flex items-center gap-3 px-5 py-3 bg-card border border-border/50 rounded-full bubble-shadow hover:border-primary/30 transition-colors cursor-default">
                  <span className="text-xl">{feature.emoji}</span>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MovingFeatureBar;
