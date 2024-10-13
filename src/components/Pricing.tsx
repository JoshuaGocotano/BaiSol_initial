import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// Load the Stripe instance with publishable key
const stripePromise = loadStripe(
  "pk_test_51Q1VOJ2L5wWxWZHnUEalN1MxONFa5YLPJjnIMLyoN0zMS4lrWgnM4xUwtTvJehVnTtYR6OY3n4D9IGu7d2XYoCuI0099PjuInc"
);

interface PricingProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  isLoggedIn,
  onLoginClick,
}) => {
  const handleGetQuoteClick = async (option: (typeof pricingOptions)[0]) => {
    if (!isLoggedIn) {
      onLoginClick(); // Open login modal if user is not logged in
    } else {
      try {
        // Send a POST request to backend to create a Payment Intent
        const response = await axios.post(
          "https://localhost:7132/api/stripe/create-checkout-session",
          {
            Title: option.title,
            Description: option.features.join(", "),
            Amount: parseInt(option.price.replace(/₱|,/g, "").trim()) * 100,
            Currency: "php",
          }
        );

        // Get the session ID from the response
        const sessionId = response.data.SessionId;

        // Load Stripe.js
        const stripe = await stripePromise;

        // Redirect the user to the Stripe Checkout page
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId });

          if (error) {
            console.error("Stripe checkout error:", error.message);
          }
        }
      } catch (error) {
        console.error("Error creating Stripe checkout session:", error);
      }
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
                <span className="text-5xl mt-6 mr-1">
                  {option.price.toLocaleString()}
                </span>
                <span className="text-2xl text-neutral-400 tracking-tight">
                  .00
                </span>
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
                onClick={() => handleGetQuoteClick(option)}
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
