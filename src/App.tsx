import { useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import { Developers } from "./components/Developers";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { LoginModal } from "./components/LoginModal";

const App = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const heroRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const developersRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref === heroRef) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen((prev) => !prev); // Toggle modal visibility
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(""); // Clear user email on logout
    navigate("/"); // Redirect to home
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
        onLoginClick={toggleLoginModal}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto pt-20 px-6">
              <div ref={heroRef}>
                <HeroSection userEmail={userEmail} />
              </div>
              <div ref={featureRef}>
                <FeatureSection />
              </div>
              <div ref={workflowRef}>
                <Workflow />
              </div>
              <div ref={pricingRef}>
                <Pricing
                  isLoggedIn={isLoggedIn}
                  onLoginClick={toggleLoginModal}
                />
              </div>
              <div ref={developersRef}>
                <Developers />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>

      {isLoginModalOpen && (
        <LoginModal onClose={toggleLoginModal} setUserEmail={handleLogin} />
      )}
    </>
  );
};

export default App;
