import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="my-[6rem] space-y-8 w-[95%] md:w-[85%] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-[4rem] md:gap-[12rem]">
        <div className="space-y-4 text-center md:text-left order-1 lg:order-2">
          <h2 className="font-bold text-3xl capitalize">
            Smart Album Organization
          </h2>
          <p className="text-sm text-gray-500 w-full md:w-[50%]">
            Automatically organize your photos into albums by date, location, or
            even by the people in them. Say goodbye to endless scrolling and
            find any memory in seconds!
          </p>
          <span className="gap-1 text-primaryColor hover:underline hidden md:flex">
            <Link href="#">Try It Out Now</Link>
            <ArrowUpRight />
          </span>
        </div>
        <div className="rounded-lg bg-imgBackground p-[4rem] order-2 lg:order-1">
          <Image
            src="/images/featureImg1.jpg"
            alt="Flower picture"
            height={800}
            width={800}
            quality={80}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[4rem] ">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-bold text-3xl capitalize">
            Instant Photo Sharing
          </h2>
          <p className="text-sm text-gray-500 w-full md:w-[50%]">
            Share photos and albums instantly with friends and family through
            secure, private links. Whether it’s a special event or a spontaneous
            moment, sharing memories has never been this easy!
          </p>
          <span className="gap-1 text-primaryColor hover:underline hidden md:flex">
            <Link href="#">Try It Out Now</Link>
            <ArrowUpRight />
          </span>
        </div>
        <div className="rounded-lg bg-imgBackground p-[4rem]">
          <Image
            src="/images/featureImg2.jpg"
            alt="Flower picture"
            height={800}
            width={800}
            quality={80}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
