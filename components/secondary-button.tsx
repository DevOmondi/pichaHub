import React from "react";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface SecondaryButtonProps {
  children: ReactNode;
}

export function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <button className="group flex items-center justify-center border-3 border-[#8d39fa] text-[#8d39fa] px-6 py-3 rounded-lg transition-all duration-200 hover:bg-[#8d39fa] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8d39fa] focus:ring-opacity-50 text-lg font-semibold h-14 min-w-[200px]">
      {children}
      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}
