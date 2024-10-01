"use client";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function LongImage() {
  useGSAP(() => {
    gsap.from(".img-item", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".long-image",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex long-image">
        <div className="w-1/4 h-80 relative img-item">
          <Image
            src="/long-image-2.png"
            alt="long-image"
            width={300}
            height={300}
            className="w-full h-full"
          />
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full cursor-pointer hover:opacity-30 transition-all" />
        </div>

        <div className="w-1/4 h-80 relative img-item">
          <Image
            src="/long-image-3.png"
            alt="long-image"
            width={300}
            height={300}
            className="w-full h-full"
          />
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full cursor-pointer hover:opacity-30 transition-all" />
        </div>

        <div className="w-1/4 h-80 relative img-item">
          <Image
            src="/long-image-4.png"
            alt="long-image"
            width={300}
            height={300}
            className="w-full h-full"
          />
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full cursor-pointer hover:opacity-30 transition-all" />
        </div>
        <div className="w-1/4 h-80 relative img-item">
          <Image
            src="/long-image-1.png"
            alt="long-image"
            width={300}
            height={300}
            className="w-full h-full"
          />
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full cursor-pointer hover:opacity-30 transition-all" />
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <Link href={"/products/all"}>
          <CoolMode
            options={{
              particle: "/logo-icon.ico",
            }}
          >
            <Button>Xem thêm các sản phẩm</Button>
          </CoolMode>
        </Link>
      </div>
    </div>
  );
}
