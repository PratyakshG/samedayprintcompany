import BestSellers from "@/components/BestSellers";
import HeroSection from "@/components/HeroSection";
import Locations from "@/components/Locations";
import PopularSection from "@/components/PopularSection";

export default function Home() {
  return (
    <div className="w-full px-10 py-10">
      <HeroSection />
      <PopularSection />
      <BestSellers />
      <Locations />
    </div>
  );
}
