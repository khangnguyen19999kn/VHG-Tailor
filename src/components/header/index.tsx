"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/gioi-thieu"
                  className="bold cursor-not-allowed relative group"
                >
                  <span>Giới thiệu</span>
                  <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Đang phát triển</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="bold relative group">
                Sản phẩm
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/products/all"}>Tất cả sản phẩm</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/products/suit"}>Suit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/products/jacket"}>Jacket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/products/shirt"}>Shirt</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/products/blazer"}>Blazer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/products/vest"}>Vest</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/products/trouser"}>Trouser</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/quy-trinh" className="bold relative group">
            Quy trình may
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <Link href="/blogs" className="bold relative group">
            Blogs
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
