"use client";
import Card from "@/components/card";
import { IProductTypeListProps } from "@/features/product-type-list";
import { sortData } from "@/features/product-type-list/utils/sort-data";
import { useSearchParams } from "next/navigation";

export default function ProductList({ data }: IProductTypeListProps) {
  const searchParams = useSearchParams();
  const priceRange = searchParams.get("priceRange")
    ? searchParams.get("priceRange")
    : "all";
  const dataProduct = sortData(priceRange, data);
  return (
    <div className="w-full my-10">
      <div className="flex flex-wrap gap-5 justify-center">
        {dataProduct.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
