import { motion } from "framer-motion";
import { Target, Trophy, Zap, ArrowRight } from "lucide-react";

const DetailedFeatures = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Designed to keep you engaged — <span className="text-gradient">naturally</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our app is built around how people actually stay motivated. Instead of pressure or complexity, 
            it uses clear progress, gentle rewards, and meaningful feedback to help you move forward.
          </p>
        </motion.div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Target,
              title: "Where you are",
              description: "Clear visibility into your current progress and position in your journey.",
              color: "primary",
            },
            {
              icon: ArrowRight,
              title: "What's next",
              description: "Always know your next step with smart suggestions and gentle nudges.",
              color: "accent",
            },
            {
              icon: Trophy,
              title: "How far you've come",
              description: "Celebrate your wins with visual milestones and achievement tracking.",
              color: "tertiary",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 bg-card rounded-3xl border border-border/50 bubble-shadow text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                    item.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : item.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-tertiary/10 text-tertiary"
                  }`}
                >
                  <item.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-tertiary/5 rounded-3xl p-8 md:p-12 border border-border/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Built for real motivation</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Small wins feel rewarding, progress feels visible
                </h3>
                <p className="text-muted-foreground text-lg">
                  Consistency becomes effortless when every step forward is celebrated.
                </p>
              </div>

              {/* Right visual */}
              <div className="flex gap-4">
                {[
                  { emoji: "🎯", label: "Goals", delay: 0 },
                  { emoji: "📈", label: "Progress", delay: 0.1 },
                  { emoji: "🏆", label: "Rewards", delay: 0.2 },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: item.delay }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-16 h-16 bg-card rounded-2xl bubble-shadow flex items-center justify-center text-2xl">
                      {item.emoji}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
