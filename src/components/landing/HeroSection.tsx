import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Smartphone, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/3 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
            >
              <Smartphone className="w-4 h-4" />
              Available on iOS & Android
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Build better habits with a{" "}
              <span className="text-gradient">smarter</span>, more{" "}
              <span className="text-gradient">engaging</span> app
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Stay consistent, track progress, and feel motivated every day — 
              without feeling overwhelmed.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-base button-shadow hover:button-shadow-hover"
              >
                Download Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base border-2"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              {["Free to start", "No credit card", "Cancel anytime"].map((text, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone mockup container */}
            <div className="relative">
              {/* Floating bubbles */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🎯</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-12 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">✨</span>
              </motion.div>
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center"
              >
                <span className="text-lg">🚀</span>
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-20 -right-10 w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">💪</span>
              </motion.div>

              {/* Phone frame */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 md:w-72 lg:w-80"
              >
                <div className="bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* App screen content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-6 text-xs text-muted-foreground">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-foreground/30 rounded-sm" />
                        </div>
                      </div>

                      {/* Greeting */}
                      <div className="mb-6">
                        <p className="text-muted-foreground text-sm">Good morning</p>
                        <h3 className="text-xl font-bold text-foreground">Alex 👋</h3>
                      </div>

                      {/* Progress card */}
                      <div className="bg-primary/10 rounded-2xl p-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">Today's Progress</span>
                          <span className="text-primary font-bold">72%</span>
                        </div>
                        <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "72%" }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>

                      {/* Tasks */}
                      <div className="space-y-3 flex-1">
                        {[
                          { label: "Morning meditation", done: true },
                          { label: "Read for 20 mins", done: true },
                          { label: "Exercise", done: false },
                        ].map((task, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + i * 0.2 }}
                            className={`flex items-center gap-3 p-3 rounded-xl ${
                              task.done ? "bg-accent/10" : "bg-secondary"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                task.done ? "bg-accent" : "border-2 border-muted"
                              }`}
                            >
                              {task.done && (
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-sm ${task.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                              {task.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Streak */}
                      <div className="flex items-center justify-center gap-2 mt-4 py-3 bg-orange-50 rounded-xl">
                        <span className="text-xl">🔥</span>
                        <span className="text-sm font-semibold text-orange-600">7 day streak!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
