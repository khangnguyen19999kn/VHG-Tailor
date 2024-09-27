import { getProductsWithType } from "@/api/products";
import ProductList from "@/features/product-type-list/components/ProductList";
import { TProduct } from "@/types/product";

export default async function PageProductType({
  params,
}: {
  params: { type: string };
}) {
  const { type } = params;
  const productsWithType = await getProductsWithType(type);
  const dataProducts: TProduct[] = productsWithType.data || [];

  return <ProductList data={dataProducts} />;
}
