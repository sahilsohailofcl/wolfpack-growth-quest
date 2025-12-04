import { motion } from "framer-motion";
import { UserCircle, Play, BookOpen, Crown } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    step: "01",
    title: "Create Your Wolf Profile",
    description: "Set your focus goals and customize your wolf companion",
    color: "from-primary to-primary/80",
  },
  {
    icon: Play,
    step: "02",
    title: "Start Daily Focus Sessions",
    description: "Begin your journey with timed sessions and earn XP",
    color: "from-accent to-accent/80",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Complete Detox Lessons",
    description: "Learn science-backed techniques to rewire your brain",
    color: "from-primary to-accent",
  },
  {
    icon: Crown,
    step: "04",
    title: "Level Up to Alpha",
    description: "Unlock ranks, achievements, and become the Alpha",
    color: "from-accent to-primary",
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Your Journey to Peak Focus
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple 4-step transformation from distracted to unstoppable
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 rounded-full opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  {/* Step number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  {/* Step indicator */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-cream px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">
                    Step {step.step}
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-primary/30 text-2xl">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
