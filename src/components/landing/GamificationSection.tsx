import { motion } from "framer-motion";
import { Flame, Star, Award, Zap } from "lucide-react";

const ranks = [
  { name: "Cub", emoji: "🐺", level: "1-5", color: "bg-muted" },
  { name: "Scout", emoji: "🌟", level: "6-15", color: "bg-primary/20" },
  { name: "Hunter", emoji: "🎯", level: "16-30", color: "bg-primary/40" },
  { name: "Warrior", emoji: "⚔️", level: "31-50", color: "bg-accent/40" },
  { name: "Alpha", emoji: "👑", level: "50+", color: "bg-gradient-to-r from-primary to-accent" },
];

const GamificationSection = () => {
  return (
    <section className="py-20 bg-cream-dark overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Level Up & Earn Rewards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every session brings you closer to becoming the Alpha of your life
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Zap, label: "XP Points", value: "2,450" },
            { icon: Flame, label: "Day Streak", value: "7 🔥" },
            { icon: Star, label: "Challenges", value: "12/15" },
            { icon: Award, label: "Badges", value: "8" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Wolf Ranks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-6 md:p-8"
        >
          <h3 className="font-bold text-xl text-foreground mb-6 text-center">Wolf Ranks</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${rank.color} rounded-2xl px-6 py-4 text-center min-w-[120px] cursor-pointer transition-all duration-300 hover:shadow-lg`}
              >
                <div className="text-3xl mb-2">{rank.emoji}</div>
                <div className="font-bold text-foreground">{rank.name}</div>
                <div className="text-xs text-muted-foreground">Level {rank.level}</div>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Current: Hunter (Level 22)</span>
              <span>Next: Warrior (Level 31)</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="h-full gradient-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GamificationSection;
