import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ranks = [
  { name: "Cub", emoji: "🐺", levels: "1-5", description: "Begin your journey", color: "bg-muted", textColor: "text-foreground" },
  { name: "Scout", emoji: "🌟", levels: "6-15", description: "Learning the ways", color: "bg-primary/20", textColor: "text-foreground" },
  { name: "Hunter", emoji: "🎯", levels: "16-30", description: "Building focus muscles", color: "bg-primary/40", textColor: "text-foreground" },
  { name: "Guardian", emoji: "🛡️", levels: "31-50", description: "Protecting your time", color: "bg-accent/40", textColor: "text-foreground" },
  { name: "Alpha", emoji: "👑", levels: "50+", description: "Master of focus", color: "gradient-primary", textColor: "text-primary-foreground" },
];

const JourneySection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
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
            <span className="text-xl">🐺</span>
            Your Transformation
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Your Journey to{" "}
            <span className="text-gradient-primary">Peak Focus</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Watch your wolf evolve as you progress through 5 epic ranks
          </p>
        </motion.div>

        {/* Wolf Evolution Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-muted via-primary to-accent transform -translate-y-1/2 rounded-full hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.name}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -10 }}
                  className={`${rank.color} rounded-3xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                  
                  <motion.div
                    animate={index === 4 ? { rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl md:text-6xl mb-3"
                  >
                    {rank.emoji}
                  </motion.div>
                  
                  <h3 className={`font-bold text-lg ${rank.textColor} mb-1`}>
                    {rank.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Level {rank.levels}
                  </p>
                  <p className={`text-xs ${rank.name === 'Alpha' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {rank.description}
                  </p>
                  
                  {index === 4 && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Arrow between ranks */}
                {index < ranks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                <div>
                  <p className="font-bold text-foreground">Current: Hunter</p>
                  <p className="text-sm text-muted-foreground">Level 22 • 2,450 XP</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-accent">Next: Guardian</p>
                <p className="text-sm text-muted-foreground">Level 31</p>
              </div>
            </div>
            
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 gradient-primary rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
              />
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-3">
              550 XP to next rank • Keep going! 🔥
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
