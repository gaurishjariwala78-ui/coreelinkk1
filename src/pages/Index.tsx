import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AnimatedStats from "@/components/home/AnimatedStats";
import AboutSection from "@/components/home/AboutSection";
import GrowthChart from "@/components/home/GrowthChart";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AnimatedStats />
        <AboutSection />
        <GrowthChart />
        <ServicesSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
