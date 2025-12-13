import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream-light to-cream">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: December 13, 2024</p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 border border-border/50 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Foclupus ("the Service"), you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Foclupus is a gamified productivity and focus application that helps users build better digital 
                    habits through focus sessions, dopamine detox lessons, habit tracking, and a wolf-themed 
                    progression system.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You must be at least 13 years old to use the Service</li>
                    <li>You are responsible for maintaining the security of your account</li>
                    <li>You agree to provide accurate and complete information</li>
                    <li>One account per person; account sharing is not permitted</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Subscription & Payments</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Foclupus offers both free and premium subscription tiers:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Free tier includes basic features with limited access</li>
                    <li>Premium subscriptions are billed monthly or annually</li>
                    <li>You can cancel your subscription at any time</li>
                    <li>Refunds are handled according to app store policies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree not to misuse the Service, attempt to gain unauthorized access, or engage in any 
                    activity that could harm other users or the integrity of the platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, features, and functionality of Foclupus are owned by us and protected by 
                    international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Foclupus is provided "as is" without warranties. We are not liable for any indirect, 
                    incidental, or consequential damages arising from your use of the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of significant 
                    changes via email or in-app notification.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Questions about these Terms? Contact us at{" "}
                    <a href="mailto:legal@foclupus.com" className="text-primary hover:underline">
                      legal@foclupus.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Terms;
