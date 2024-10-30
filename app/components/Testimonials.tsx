import React from "react";
import { TestimonialsCards } from "@/components/testimonial-cards";
import Link from "next/link";
import { ArrowUpRight} from "lucide-react";

const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row w-[95%] md:w-[85%] mx-auto items-center justify-between">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="font-bold text-3xl">Real reviews from real users!</h2>
        <p className="text-sm text-gray-500">See why people love us.</p>
        <span className="gap-1 text-primaryColor hover:underline hidden md:flex">
          <Link href="#">
            See More 
          </Link>
          <ArrowUpRight />
        </span>
      </div>
      <TestimonialsCards />
    </div>
  );
};

export default Testimonials;
