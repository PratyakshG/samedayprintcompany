import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <>
      <Carousel
        className="h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="h-[500px] bg-neutral-200">Image and Details for Branding</CarouselItem>
          <CarouselItem className="h-[500px] bg-neutral-200">Image and Details for Branding</CarouselItem>
          <CarouselItem className="h-[500px] bg-neutral-200">Image and Details for Branding</CarouselItem>
        </CarouselContent>

        <div className="w-full items-center justify-center flex gap-5 pt-5">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
};

export default HeroSection;
