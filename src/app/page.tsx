import { getBlogsNew } from "@/api/blogs";
import { getProductsNew } from "@/api/products";
import HomePage from "@/pages/home";
import { TBlogs } from "@/types/blogs";
import { TProduct } from "@/types/product";
type TDataHomePage = {
  dataProductsNew: TProduct[];
  dataBlogsNew: TBlogs[];
};
export interface IHomePageProps {
  data: TDataHomePage;
}

export default async function Home() {
  const dataProductsNew = await getProductsNew();
  const dataBlogsNew = await getBlogsNew();

  const data = {
    dataProductsNew: dataProductsNew.data,
    dataBlogsNew: dataBlogsNew.data,
  };
  return (
    <div className="p-2">
      <HomePage data={data} />
    </div>
  );
}
