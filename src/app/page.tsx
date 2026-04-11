import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrainStats from "@/components/BrainStats";
import StepsSection from "@/components/StepsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
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
        <FeaturesHighlight />
      </main>
      <Footer />
    </>
  );
}
