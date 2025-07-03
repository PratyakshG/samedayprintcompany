import BestSellers from "@/components/BestSellers";
import HeroSection from "@/components/HeroSection";
import Locations from "@/components/Locations";
import PopularSection from "@/components/PopularSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PopularSection />
      <BestSellers />
      <Locations />
    </main>
  );
}
