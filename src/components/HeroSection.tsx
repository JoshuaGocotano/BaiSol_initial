import React from "react";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

interface HeroSectionProps {
  userEmail: string | null; // Accept userEmail as a prop
}

export const HeroSection: React.FC<HeroSectionProps> = ({ userEmail }) => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {userEmail ? (
          <>
            Welcome to BaiSol,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {userEmail}{"!"}
            </span>
          </>
        ) : (
          <>
            BaiSol enhances management for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              SunVoltage Inc.
            </span>
          </>
        )}
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empowering SunVoltage Inc. with streamlined task management: Optimize
        workflows, enhance collaboration, and turn challenges into growth
        opportunities with our all-in-one solution.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:opacity-80 transition-opacity duration-300"
        >
          Get a Free Quote
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border hover:bg-neutral-700 transition-colors duration-300"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
