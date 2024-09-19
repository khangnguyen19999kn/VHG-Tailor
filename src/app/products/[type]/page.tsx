import { getProductsWithType } from "@/api/products";
import ProductTypeListPage from "@/pages/product-type-list";

export default async function PageProductType({
  params,
}: {
  params: { type: string };
}) {
  const { type } = params;
  const productsWithType = await getProductsWithType(type);
  const dataProducts = productsWithType.data;

  return <ProductTypeListPage data={dataProducts} />;
}
