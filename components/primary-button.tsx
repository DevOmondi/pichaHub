import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  children: ReactNode;
}

export function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <div>
      <Button className="bg-[#8d39fa] hover:bg-[#7b2de0] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 active:bg-[#6a25c5]">
        {children}
      </Button>
    </div>
  );
}