import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrainStats from "@/components/BrainStats";
import StepsSection from "@/components/StepsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BrainStats />
        <StepsSection />
        <AchievementsSection />
        <TechnologiesSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
