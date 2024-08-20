import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "lucide-react";
function WrapCarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-100 h-[500px] flex justify-center items-center">
      {children}
    </div>
  );
}
export default function CarouselHomePage() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
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
