import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import PortfolioSection from "./sections/PortfolioSection";
import AboutSection from "./sections/AboutSection";
import ProcessSection from "./sections/ProcessSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "var(--white)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}