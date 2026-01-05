import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Floating emojis */}
          <div className="relative inline-block mb-8">
            <motion.span
              animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-12 -top-4 text-3xl"
            >
              🚀
            </motion.span>
            <motion.span
              animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-12 -top-2 text-3xl"
            >
              ✨
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to get started?
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands building better habits — one step at a time.
          </p>

          {/* App store buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="rounded-full px-8 gap-3 bg-foreground text-background hover:bg-foreground/90 button-shadow"
              >
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80 leading-none">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="rounded-full px-8 gap-3 bg-foreground text-background hover:bg-foreground/90 button-shadow"
              >
                <Play className="w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] opacity-80 leading-none">Get it on</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Pulsing CTA button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
            />
            <Button
              size="lg"
              className="relative rounded-full px-10 text-base button-shadow hover:button-shadow-hover"
            >
              Start Free Today
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Free to use • No credit card required • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
