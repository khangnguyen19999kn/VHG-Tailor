"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageDto } from "@/types/product";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

function WrapCarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[500px] desktop:h-[550px] mobile:h-[400px] flex justify-center items-center relative">
      {children}
    </div>
  );
}

export default function CarouselCustom({ images }: { images: ImageDto[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <WrapCarouselItem>
              <Image src={image.url} alt="image of carousel" fill />
            </WrapCarouselItem>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
