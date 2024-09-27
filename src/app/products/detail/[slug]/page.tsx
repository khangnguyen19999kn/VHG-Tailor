import { getProductDetail, getProductsWithType } from "@/api/products";
import ProductDetail from "@/features/product-detail";
import { TResponseProductDetail, TResponseProducts } from "@/types/product";
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
