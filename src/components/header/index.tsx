"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className="w-full bg-header h-28 sticky top-0 flex justify-center z-50">
      <div className="w-full h-full">
        <div className="h-3/5 flex justify-center items-center">
          <div className="w-48 h-full relative">
            <Link href={"/"}>
              <Image src={"/logo.png"} fill alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-around items-center mx-auto h-2/5 mobile:w-full tablet:w-2/3 bigDesktop:w-1/4 w-1/3">
          <Link href="/gioi-thieu" className="font-bold relative group">
            <span>Giới thiệu</span>
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Separator orientation="vertical" className="bg-slate-400 h-1/3" />

          <DropdownMenu open={openDropDown}>
            <DropdownMenuTrigger onClick={() => setOpenDropDown(!openDropDown)}>
              <p className="font-bold relative group">
                Sản phẩm
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/all"}>Tất cả sản phẩm</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/suit"}>Suit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/jacket"}>Jacket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/shirt"}>Shirt</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/blazer"}>Blazer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/vest"}>Vest</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/trouser"}>Trouser</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDropDown(false)}>
                <Link href={"/products/accessories"}>Accessories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Separator orientation="vertical" className="bg-slate-400 h-1/3" />
          <Link href="/quy-trinh" className="font-bold relative group">
            Quy trình may
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Separator orientation="vertical" className="bg-slate-400 h-1/3" />
          <Link href="/blogs" className="font-bold relative group">
            Art Work
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
