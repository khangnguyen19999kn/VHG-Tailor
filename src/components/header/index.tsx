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
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const handleClickItemDropdown = (url: string) => {
    router.push(url);
  };
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

          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="font-bold relative group">
                Sản phẩm
                <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></div>
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/all")}
              >
                <p>Tất cả sản phẩm</p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/suit")}
              >
                <p>Suit</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/jacket")}
              >
                <p>Jacket</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/shirt")}
              >
                <p>Shirt</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/blazer")}
              >
                <p>Blazer</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/vest")}
              >
                <p>Vest</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/trouser")}
              >
                <p>Trouser</p>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleClickItemDropdown("/products/accessories")}
              >
                <p>Accessories</p>
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
