import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/product";
import Link from "next/link";

interface IProductList {
  dataProductNews: TProduct[];
}
export default function ProductList({ dataProductNews }: IProductList) {
  return (
    <div className="w-full">
      <p className="bold text-3xl my-5 text-center">BST Mới</p>
      <div className="flex flex-wrap gap-5 justify-center mobile:p-5">
        {Array.isArray(dataProductNews) && dataProductNews.length > 0 ? (
          dataProductNews.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <p>Không có sản phẩm</p>
        )}
      </div>
      <div className="w-full flex justify-center my-5">
        <Button>
          <Link href="/products/all">Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
}
