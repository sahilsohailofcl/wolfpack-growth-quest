import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhySection from "@/components/landing/WhySection";
import JourneySection from "@/components/landing/JourneySection";
import GamificationSection from "@/components/landing/GamificationSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <JourneySection />
      <GamificationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
