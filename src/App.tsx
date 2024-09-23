import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import { Developers } from "./components/Developers";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Developers />
        <Footer />
      </div>
    </>
  );
};

export default App;
