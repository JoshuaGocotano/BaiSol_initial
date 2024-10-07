import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

interface PricingProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  isLoggedIn,
  onLoginClick,
}) => {
  const handleGetQuoteClick = () => {
    if (!isLoggedIn) {
      onLoginClick(); // Open login modal if user is not logged in
    } else {
      // Handle the logic for logged-in users (e.g., navigate to a quote form)
      console.log("Proceed to quote request page or action.");
    }
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2 transition-transform transform hover:scale-105 hover:border-secondary"
          >
            <div className="p-10 border border-neutral-700 rounded-xl transition-all duration-300">
              <p className="text-3xl mb-8">
                {option.title}
                {option.title === "Package B" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-base mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">PHP</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2 ">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleGetQuoteClick}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-800 border border-orange-900 rounded-lg transition duration-200"
              >
                Get Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
