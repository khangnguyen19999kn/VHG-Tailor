import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Sparkle, Store } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-orange-100 flex justify-center mt-10">
      <div className="w-1/2 flex justify-between p-2 gap-2 mobile:w-full">
        <div className="w-2/5 flex justify-center items-center">
          <div className="w-full h-full relative">
            <Image src={"/logo.png"} fill alt="logo" />
          </div>
        </div>
        <div className="bigDesktop:w-2/5 p-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <Store />
                  <p>Hệ thống cửa hàng</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkle />
                    CN1: 145/22 Thống Nhất, TP Pleiku, tỉnh Gia Lai
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkle />
                    CN2: 145/22 Thống Nhất, TP Pleiku, tỉnh Gia Lai
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <Phone />
                  <p>Hotline</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-2">
                  <Sparkle />
                  <p>0912345678</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="bold text-center my-2">
            THEO DÕI CHÚNG TÔI TRÊN MẠNG XÃ HỘI
          </p>
          <div className="flex gap-2 justify-center">
            <div className="relative w-10 h-10">
              <Image src={"/social_facebook.webp"} fill alt="logo" />
            </div>
            <div className="relative w-10 h-10">
              <Image src={"/social_instagram.webp"} fill alt="logo" />
            </div>
            <div className="relative w-10 h-10">
              <Image src={"/social_youtube.webp"} fill alt="logo" />
            </div>
            <div className="relative w-10 h-10">
              <Image src={"/social_zalo.webp"} fill alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
