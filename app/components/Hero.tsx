import React from "react";
import { SecondaryButton } from "@/components/secondary-button";
import Image from "next/image";

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
      <div className="flex flex-col md:flex-row justify-between items-center w-[95%] md:w-[85%]">
        <Image
          src="/images/hero-img1.svg"
          alt="gallery illustration"
          quality={80}
          loading="lazy"
          width={200}
          height={200}
        />
        <div className="my-11 flex-col md:flex-row flex flex-wrap gap-5">
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            50k{" "}
            <span className="regular-14 lg:regular-20 ml-1 underline inline">
              Excellent Reviews
            </span>
          </p>
        </div>
        <Image
          src="/images/hero-img2.svg"
          alt="gallery illustration"
          quality={80}
          loading="lazy"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Hero;
