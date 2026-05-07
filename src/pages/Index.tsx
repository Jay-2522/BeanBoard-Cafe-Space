import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import LocationsSection from "@/components/LocationsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <MenuSection />
      <LocationsSection />
      <WorkshopsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
