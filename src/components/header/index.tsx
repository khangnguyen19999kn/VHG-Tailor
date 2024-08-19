"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-header h-28 sticky top-0 flex justify-center z-10">
      <div>
        <div className="min-w-72 h-3/5 flex justify-center items-center">
          <div className="w-48 h-full relative">
            <Link href={"/"}>
              <Image src={"/logo.png"} fill alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-around items-center w-full h-2/5 min-w-96">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p className="bold">Menu</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="bold">
            About
          </Link>

          <Link href="/contact" className="bold">
            Contact
          </Link>

          <Link href="/blog" className="bold">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
