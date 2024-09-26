import { getProductsWithType } from "@/api/products";
import ProductList from "@/pages/home/components/ProductList";
import { TProduct, TResponseAllTypeProduct } from "@/types/product";

// export async function generateStaticParams() {
//   let posts: TResponseAllTypeProduct = await fetch(
//     "https://api.vhgtailorhouse.vn/products/type"
//   ).then((res) => res.json());
//   return posts.data.map((post) => ({
//     type: post,
//   }));
// }
export default async function PageProductType({
  params,
}: {
  params: { type: string };
}) {
  const { type } = params;
  const productsWithType = await getProductsWithType(type);
  const dataProducts: TProduct[] = productsWithType.data || [];

  return <ProductList dataProductNews={dataProducts} />;
}
