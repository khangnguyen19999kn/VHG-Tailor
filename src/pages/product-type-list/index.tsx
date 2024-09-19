import ProductList from "@/pages/product-type-list/components/ProductList";
import { TProduct } from "@/types/product";

export interface IProductTypeListProps {
  data: TProduct[];
}

export default function ProductTypeListPage({ data }: IProductTypeListProps) {
  return <ProductList data={data} />;
}
