import { getProductDetail, getProductsWithType } from "@/api/products";
import ProductDetail from "@/pages/product-detail";
import { TResponseProductDetail, TResponseProducts } from "@/types/product";

// export async function generateStaticParams() {
//   let posts: TResponseProducts = await fetch(
//     "https://api.vhgtailorhouse.vn/products"
//   ).then((res) => res.json());

//   return posts.data.map((post) => ({
//     slug: post.slug,
//   }));
// }
export default async function PageProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const dataProductDetail: TResponseProductDetail = await getProductDetail(
    params.slug
  );
  const { type } = dataProductDetail.data;
  const dataProductSuggest: TResponseProducts = await getProductsWithType(
    type.name,
    6
  );
  return (
    <ProductDetail
      data={dataProductDetail.data}
      dataSuggest={dataProductSuggest.data}
    />
  );
}
