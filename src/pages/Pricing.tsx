import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";
import PricingSection from "@/components/landing/PricingSection";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Can I try Premium for free?",
    a: "Yes! We offer a 7-day free trial of Premium with full access to all features. No credit card required to start.",
  },
  {
    q: "What happens when I cancel?",
    a: "You keep access until the end of your billing period. Your progress, XP, and rank are saved if you decide to return.",
  },
  {
    q: "Is there a student discount?",
    a: "Yes! Students get 50% off Premium. Contact us with your .edu email to claim your discount.",
  },
  {
    q: "Can I switch between monthly and yearly?",
    a: "Absolutely. You can switch anytime from your account settings. Yearly saves you 2 months!",
  },
];

const Pricing = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-16">
        <PricingSection />
      </div>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Pricing;
