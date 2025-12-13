import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";

const Privacy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: December 13, 2024</p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 border border-border/50 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Foclupus ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains 
                    how we collect, use, disclose, and safeguard your information when you use our mobile application 
                    and website (collectively, the "Service").
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">We collect information you provide directly:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Account information (email, username, wolf name)</li>
                    <li>Profile preferences and goals</li>
                    <li>Focus session data and progress</li>
                    <li>Habit tracking information</li>
                    <li>Usage analytics and app interactions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>To provide and personalize the Service</li>
                    <li>To track your progress and award XP/achievements</li>
                    <li>To send notifications and reminders (with your consent)</li>
                    <li>To improve our app and develop new features</li>
                    <li>To communicate with you about updates</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data. All data is encrypted 
                    in transit and at rest. We never sell your personal information to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal data at any time. 
                    You can export your data or request account deletion through the app settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@foclupus.com" className="text-primary hover:underline">
                      privacy@foclupus.com
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

export default Privacy;
