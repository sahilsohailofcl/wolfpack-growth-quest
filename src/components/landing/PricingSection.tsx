import { motion } from "framer-motion";
import { Check, X, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    subtitle: "Start Your Journey",
    price: "$0",
    period: "forever",
    description: "Perfect for wolves beginning their focus journey",
    icon: Sparkles,
    popular: false,
    features: [
      { text: "Basic Focus Timer", included: true },
      { text: "3 Daily Challenges", included: true },
      { text: "Wolf Rank Progression", included: true },
      { text: "Basic Habit Tracker (3 habits)", included: true },
      { text: "Limited Detox Lessons (5)", included: true },
      { text: "Basic Analytics", included: true },
      { text: "Unlimited Focus Sessions", included: false },
      { text: "All 12+ Detox Lessons", included: false },
      { text: "Advanced Mindfulness Tools", included: false },
      { text: "Detailed Analytics & Insights", included: false },
      { text: "Priority Support", included: false },
    ],
  },
  {
    name: "Premium",
    subtitle: "Become the Alpha",
    price: "$4.99",
    period: "/month",
    description: "Unlock your full potential with premium features",
    icon: Crown,
    popular: true,
    features: [
      { text: "Unlimited Focus Sessions", included: true },
      { text: "Unlimited Daily Challenges", included: true },
      { text: "Advanced Wolf Customization", included: true },
      { text: "Unlimited Habit Tracking", included: true },
      { text: "All 12+ Detox Lessons", included: true },
      { text: "Advanced Analytics & Insights", included: true },
      { text: "Mindfulness & Meditation Tools", included: true },
      { text: "Exclusive Achievement Badges", included: true },
      { text: "Ad-Free Experience", included: true },
      { text: "Priority Support", included: true },
      { text: "Early Access to New Features", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cream-light to-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            💰 Simple Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock your full potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary to-accent border-2 border-primary shadow-glow"
                  : "bg-card border border-border/50 shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    🔥 Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? "bg-white/20" : "gradient-primary"
                  }`}
                >
                  <plan.icon
                    className={`w-8 h-8 ${plan.popular ? "text-white" : "text-primary-foreground"}`}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold mb-1 ${
                    plan.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={plan.popular ? "text-white/80" : "text-muted-foreground"}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="text-center mb-8">
                <span
                  className={`text-5xl font-bold ${
                    plan.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-white/80" : "text-muted-foreground"}>
                  {plan.period}
                </span>
                <p
                  className={`mt-2 text-sm ${
                    plan.popular ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? "bg-white/20" : "bg-primary/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-white" : "text-primary"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center">
                        <X className="w-3 h-3 text-muted-foreground/50" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? plan.popular
                            ? "text-white"
                            : "text-foreground"
                          : "text-muted-foreground/50 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "gradient-primary text-primary-foreground"
                }`}
                size="lg"
              >
                {plan.popular ? "Start Premium Trial" : "Get Started Free"}
              </Button>

              {plan.popular && (
                <p className="text-center text-white/60 text-xs mt-3">
                  7-day free trial • Cancel anytime
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-8"
        >
          💳 Secure payments powered by Stripe • No hidden fees
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
