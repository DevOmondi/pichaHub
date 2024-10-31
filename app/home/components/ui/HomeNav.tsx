// import { User } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#" className="flex-shrink-0 flex items-center">
            {/* Desktop */}
            <Image
              src="/pichaHub-logo.png"
              alt="pichaHub logo"
              width={200}
              height={200}
              quality={80}
              loading="lazy"
              className="hidden md:block"
            />
            {/* Mobile */}
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
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
