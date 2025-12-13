import { motion } from "framer-motion";
import { 
  Timer, BookOpen, Target, Trophy, Brain, BarChart3, 
  Flame, Star, Zap, Heart, Shield, Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Timer,
    title: "Focus Sessions",
    subtitle: "Deep Work Made Easy",
    description: "Choose from 15, 30, 45, or 60-minute Pomodoro-style sessions. Stay locked in, earn XP, and track your progress. No distractions, just pure focus.",
    color: "from-primary to-primary/70",
  },
  {
    icon: BookOpen,
    title: "Dopamine Detox Lessons",
    subtitle: "Science-Backed Recovery",
    description: "12+ interactive lessons teaching you the neuroscience of addiction, practical exercises to reset your dopamine system, and daily practices for lasting change.",
    color: "from-accent to-accent/70",
  },
  {
    icon: Target,
    title: "Daily Challenges",
    subtitle: "Stay Accountable",
    description: "Fresh challenges every day to keep you motivated. Complete them to earn bonus XP and maintain your streak. Auto-reset at midnight for a fresh start.",
    color: "from-purple-500 to-purple-400",
  },
  {
    icon: Trophy,
    title: "Wolf Rank System",
    subtitle: "Evolve Your Inner Wolf",
    description: "Progress from Cub to Alpha through five distinct ranks. Each rank unlocks new features, badges, and celebrates your transformation journey.",
    color: "from-primary to-accent",
  },
  {
    icon: Brain,
    title: "Mindfulness Tools",
    subtitle: "Calm Your Mind",
    description: "Breathing exercises, mood logging, and guided meditation sessions. Build mental resilience and awareness alongside your focus practice.",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    subtitle: "Data-Driven Growth",
    description: "Detailed insights into your focus time, streaks, habits, and XP progression. See your transformation in beautiful charts and summaries.",
    color: "from-blue-500 to-blue-400",
  },
];

const Features = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-light to-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              ⚡ Powerful Features
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Everything You Need to <span className="text-gradient">Master Focus</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A complete toolkit for conquering distractions, building habits, and transforming your relationship with technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground">
                Get Started Free
              </Button>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-soft group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-primary font-medium mb-3">{feature.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Focus?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 50,000+ wolves who have already started their journey to becoming the Alpha of their life.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Journey Free
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Features;
