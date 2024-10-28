import React from "react";
import { SecondaryButton } from "@/components/secondary-button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-[4rem] space-y-8">
      <h1 className="font-bold text-4xl w-full lg:w-[50%] mx-auto">
        Your moments deserve more than storage—turn them into lasting memories.
      </h1>
      <p className="text-sm text-gray-500">
        Organize, share, and relive your favorite moments seamlessly
      </p>
      <div className="items-center">
      <SecondaryButton>Get Started</SecondaryButton>
      </div>
    </div>
  );
};

export default Hero;
