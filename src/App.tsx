import { useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import { Developers } from "./components/Developers";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const App = () => {
  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const developersRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        sections={{
          heroRef,
          featureRef,
          workflowRef,
          pricingRef,
          developersRef,
        }}
      />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div ref={featureRef}>
          <FeatureSection />
        </div>
        <div ref={workflowRef}>
          <Workflow />
        </div>
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <div ref={developersRef}>
          <Developers />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
