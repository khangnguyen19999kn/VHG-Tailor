import Card from "@/components/card";
import { IProductTypeListProps } from "@/pages/product-type-list";

export default function ProductList({ data }: IProductTypeListProps) {
  return (
    <div className="w-full my-10">
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
