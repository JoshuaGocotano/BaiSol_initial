import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

interface NavBarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: {
    heroRef: React.RefObject<HTMLDivElement>;
    featureRef: React.RefObject<HTMLDivElement>;
    workflowRef: React.RefObject<HTMLDivElement>;
    pricingRef: React.RefObject<HTMLDivElement>;
    developersRef: React.RefObject<HTMLDivElement>;
  };
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  scrollToSection,
  sections,
  onLoginClick,
  isLoggedIn,
  onLogout,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (section: keyof typeof sections) => {
    scrollToSection(sections[section]);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center ml-3 mr-4">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-2xl font-bold tracking-wide">
              Bai
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                SoL
              </span>
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(item.section)}
                  className="hover:text-orange-400 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Login/Logout Buttons */}
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            {isLoggedIn ? (
              // Show logout button when user is logged in
              <button
                onClick={onLogout} // Call the onLogout handler
                className="py-2 px-10 border rounded-md hover:bg-neutral-700 transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={onLoginClick} // Trigger the login modal
                  className="py-2 px-10 border rounded-md hover:bg-neutral-700 transition-colors duration-300"
                >
                  Login
                </button>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:opacity-80 transition-opacity duration-300"
                >
                  Create Account
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => handleScroll(item.section)}
                    className="hover:text-orange-400 hover:underline underline-offset-4 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-5 mt-4">
              {isLoggedIn ? (
                // Show logout button in mobile menu when user is logged in
                <button
                  onClick={onLogout} // Call the onLogout handler
                  className="py-2 px-10 border rounded-md hover:bg-neutral-700 transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={onLoginClick} // Trigger the login modal
                    className="py-2 px-10 border rounded-md hover:bg-neutral-700 transition-colors duration-300"
                  >
                    Login
                  </button>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:opacity-80 transition-opacity duration-300"
                  >
                    Create Account
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
