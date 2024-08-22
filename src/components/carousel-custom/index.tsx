"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "lucide-react";
import React from "react";

function WrapCarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-100 h-[500px] flex justify-center items-center">
      {children}
    </div>
  );
}
export default function CarouselCustom() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <WrapCarouselItem>
              <div className="flex gap-2">
                <p>{index + 1}</p>
                <Image />
              </div>
            </WrapCarouselItem>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
