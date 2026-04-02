import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrainStats from "@/components/BrainStats";
import StepsSection from "@/components/StepsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import FeaturesHighlight from "@/components/FeaturesHighlight";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "WalnutAI",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web",
            url: siteUrl,
            description:
              "AI ecosystem for software delivery from intent to production. Automate requirements, code generation, testing, and gap analysis.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier available",
            },
          }),
        }}
      />
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
