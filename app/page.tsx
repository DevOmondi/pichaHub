import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import HowEasy from "./components/HowEasy";
import Features from "./components/Features";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="w-[95%] lg:w-[85%] mx-auto">
      <Hero/>
      <Testimonials/>
      <hr className="my-[3rem]"/>
      <HowEasy/>
      <Features/>
      <Experience/>
    </div>
  );
}
