// import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import HowEasy from "./components/HowEasy";
import Features from "./components/Features";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <hr className="my-[3rem] w-[95%] md:w-[85%] mx-auto" />
      <HowEasy />
      <Features />
      <Experience />
      <Footer />
    </div>
  );
}
