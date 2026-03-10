import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HistorySection from "@/components/sections/HistorySection";
import VisionsSection from "@/components/sections/VisionsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import PricingAccordion from "@/components/sections/PricingAccordion";
import VenueCarousel from "@/components/sections/VenueCarousel";
import VenueShowcase from "@/components/sections/VenueShowcase";
import CateringSection from "@/components/sections/CateringSection";
import DreamSection from "@/components/sections/DreamSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import QuoteSection from "@/components/sections/QuoteSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HistorySection />
      <VisionsSection />
      <PackagesSection />
      <PricingAccordion />
      <VenueCarousel />
      <VenueShowcase />
      <CateringSection />
      <DreamSection />
      <MemoriesSection />
      <QuoteSection />
      <FAQSection />
      <ContactFormSection />
      <LocationSection />
      <ContactSection/>
      <Footer />
    </main>
  );
}