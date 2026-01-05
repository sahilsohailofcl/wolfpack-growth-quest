import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesOverview from "@/components/landing/FeaturesOverview";
import DetailedFeatures from "@/components/landing/DetailedFeatures";
import MovingFeatureBar from "@/components/landing/MovingFeatureBar";
import JourneySection from "@/components/landing/JourneySection";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/landing/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesOverview />
      <DetailedFeatures />
      <MovingFeatureBar />
      <JourneySection />
      <DownloadCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
