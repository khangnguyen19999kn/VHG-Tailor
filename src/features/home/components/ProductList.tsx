"use client";
import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { sortData } from "@/features/product-type-list/utils/sort-data";
import { TProduct } from "@/types/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface IProductList {
  dataProductNews: TProduct[];
  isSeeMore?: boolean;
}
export default function ProductList({
  dataProductNews,
  isSeeMore = true,
}: IProductList) {
  const searchParams = useSearchParams();
  const priceRange = searchParams.get("priceRange")
    ? searchParams.get("priceRange")
    : "all";
  const data = sortData(priceRange, dataProductNews);

  return (
    <div className="w-full">
      {isSeeMore && <p className="font-bold text-3xl my-5 text-center">BST Mới</p>}
      <div className="flex flex-wrap gap-5 justify-center mobile:p-5">
        {Array.isArray(dataProductNews) && dataProductNews.length > 0 ? (
          dataProductNews.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <p className="text-center text-2xl font-bold my-5">
            Không có sản phẩm
          </p>
        )}
      </div>
      {isSeeMore && (
        <div className="w-full flex justify-center my-5">
          <Button>
            <Link href="/products/all">Xem thêm</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
