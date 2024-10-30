"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PrimaryButton } from "@/components/primary-button";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-6 w-full md:w-[85%] mx-auto">
      <header
        className={`sticky top-0 z-50 mx-4 transition-all duration-300 rounded-md bg-slate-100 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg"
            : "bg-white/40 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Desktop logo */}
              <Link href="#" className="text-xl font-bold text-gray-800">
                <Image
                  src="/pichaHub-logo.png"
                  alt="pichaHub logo"
                  width={200}
                  height={200}
                  quality={80}
                  loading="lazy"
                  className="hidden md:block"
                />
              </Link>
              {/* Mobile logo */}
              <Link href="#" className="text-xl font-bold text-gray-800">
                <Image
                  src="/pichaHub-logo.png"
                  alt="pichaHub logo"
                  width={100}
                  height={100}
                  quality={80}
                  loading="lazy"
                  className="block md:hidden"
                />
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-12">
                <li>
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 transition-transform duration-300 ease-in-out"
              >
                {isMenuOpen ? (
                  <X className="animate-spin-once" />
                ) : (
                  <Menu className="hover:rotate-12 transition-transform" />
                )}
              </button>
            </div>
            <div className="md:block hidden">
              <Link href="/sign-in">
                <SignedOut>
                  <PrimaryButton>Sign In</PrimaryButton>
                </SignedOut>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`md:hidden fixed top-24 left-0 right-0 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="bg-white/70 backdrop-blur-md mx-4 px-4 pt-2 pb-4 rounded-3xl shadow-lg">
          <ul className="space-y-2">
            {[
              { title: "Home", route: "#" },
              { title: "About", route: "#" },
              { title: "Features", route: "#" },
              { title: "Contact", route: "#" },
            ].map((item, index) => (
              <li
                key={item.title}
                className={`transform transition-all duration-300 delay-${index}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Link
                  href={item.route}
                  className="block text-gray-800 hover:text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/sign-in">
              <SignedOut>
                <PrimaryButton>Sign In</PrimaryButton>
              </SignedOut>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
