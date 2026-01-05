import { motion } from "framer-motion";
import { BarChart3, TrendingUp, User, Layout } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Tracking",
    description: "Effortlessly track your progress with intuitive insights.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Motivating Progress",
    description: "Visual progress keeps you consistent and encouraged.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: User,
    title: "Personalized Experience",
    description: "The app adapts to your goals and pace.",
    color: "bg-tertiary/10 text-tertiary",
  },
  {
    icon: Layout,
    title: "Simple & Clean Design",
    description: "Focus on what matters — no clutter, no noise.",
    color: "bg-orange-100 text-orange-600",
  },
];

const FeaturesOverview = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to stay on track
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple tools that work together to help you build lasting habits
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 bg-card rounded-3xl border border-border/50 bubble-shadow hover:border-primary/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
