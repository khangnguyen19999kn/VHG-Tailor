"use client";

import useScrollToTop from "@/hooks/useScrolltoTop";
import FilterProductPage from "@/pages/product-type-list/components/FilterProductPage";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function ProductTypeListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const { type } = params as { type: string };
  useScrollToTop();

  return (
    <div>
      <div className="w-full h-72 mt-5 relative bg-[url('/banner-product-list.jpg')] bg-center bg-no-repeat bg-cover bg-fixed flex justify-center items-center">
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <p className="text-5xl bold font-[playFair] z-10 text-ivorywhite">
          {type.toUpperCase()}
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center my-5">
        <div className="bigDesktop:w-1/2 h-full relative p-2 mobile:w-full mobile:p-5 w-4/5">
          <p className="text-3xl bold font-[playFair] text-center">{`BỘ SƯU TẬP ${type.toUpperCase()}`}</p>
          <div className="absolute top-0 left-0 mobile:static mobile:flex mobile:justify-center mobile:mt-5">
            <Suspense>
              <FilterProductPage />
            </Suspense>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
