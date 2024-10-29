import React from "react";
import { PrimaryButton } from "@/components/primary-button";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-imgBackground to-white">
      <div className="flex flex-col items-center justify-center text-center py-[4rem] space-y-8">
        <h1 className="font-bold text-4xl w-full lg:w-[50%] mx-auto capitalize">
          Ready to experience the power of pichaHub for yourself?
        </h1>
        <p className="text-sm text-gray-500">
          Organize, share, and relive your favorite moments seamlessly
        </p>
        <div className="items-center">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Experience;
