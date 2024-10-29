import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="bg-secondaryColor items-center justify-center text-center">
      <div className="">
        <Image
          src="/images/footer-img.jpg"
          alt="person taking photo"
          quality={80}
          loading="lazy"
          width={700}
          height={120}
          className="mx-auto rounded-lg -pt-24"
        />
      </div>
      <ul className="text-gray-400 mx-auto py-[2rem] flex flex-col md:flex-row gap-[3rem] justify-center">
        {["Features", "Get started", "About"].map((item, index) => (
          <li key={index}>
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center text-white gap-[2rem] pb-[3rem]">
        <FaFacebook />
        <FaLinkedinIn />
        <FaInstagram />
        <FaXTwitter />
      </div>
      {/* <hr className="pb-[1rem]"/> */}
      <div className="bg-gray-500 h-[0.5px] mb-[1rem]"></div>
      <h3 className="text-white pb-[1rem]">&copy; pichaHub {currentYear}</h3>
    </div>
  );
};

export default Footer;
