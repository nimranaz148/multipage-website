import Bestselling from "@/components/best-selling/Bestselling";
import HeroSection from "@/components/hero-section/HeroSection";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
     <HeroSection/>
     <Bestselling></Bestselling>
    </div         >
  );
}
