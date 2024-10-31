import React from "react";
import Image from "next/image";

const HowEasy = () => {
  return (
    <div className="bg-secondaryColor h-full min-w-full  text-white">
      <div className="">
      <Image
        src="/images/photographer.jpg"
        alt="person taking photo"
        quality={80}
        loading="lazy"
        width={700}
        height={120}
        className="mx-auto rounded-lg -pt-24"
      />
      </div>
      {/* <p>Over here</p> */}
    </div>
  );
};

export default HowEasy;
