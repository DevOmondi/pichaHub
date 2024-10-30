"use client";

import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { TabList, TabGroup, Tab } from "@headlessui/react";
import { Menu, X, Home, Users, Image, Camera } from "lucide-react";
import Link from "next/link";

const Welcome = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Users", href: "/users", icon: Users },
    { name: "Album", href: "/album", icon: Image },
    { name: "Photo", href: "/photo", icon: Camera },
  ];

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* <span className="text-2xl font-bold text-indigo-600">Logo</span> */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-3 space-y-1">
            <TabGroup>
              <TabList className="flex space-x-1 rounded-xl bg-indigo-900/20 p-1">
                {navItems.map((item) => (
                  <Tab
                    key={item.name}
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2 ${
                        selected
                          ? "bg-white shadow"
                          : "text-indigo-100 hover:bg-white/[0.12] hover:text-white"
                      }`
                    }
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-center"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.name}
                    </Link>
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Welcome;
