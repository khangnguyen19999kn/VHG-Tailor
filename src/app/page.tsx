import { getBlogsNew } from "@/api/blogs";
import { getHeroSection } from "@/api/hero-section";
import { getProductsNew } from "@/api/products";
import HomePage from "@/features/home";
import { TBlogs } from "@/types/blogs";
import { TResponseHeroSection } from "@/types/heroSection";
import { ImageDto, TProduct } from "@/types/product";
type TDataHomePage = {
  dataProductsNew: TProduct[];
  dataBlogsNew: TBlogs[];
  dataHeroSection: ImageDto[];
};
export interface IHomePageProps {
  data: TDataHomePage;
}

export default async function Home() {
  const dataProductsNew = await getProductsNew();
  const dataBlogsNew = await getBlogsNew();
  const dataHeroSection: TResponseHeroSection = await getHeroSection();

  const data = {
    dataProductsNew: dataProductsNew.data,
    dataBlogsNew: dataBlogsNew.data,
    dataHeroSection: dataHeroSection.data,
  };
  return (
    <div className="p-2">
      <HomePage data={data} />
    </div>
  );
}
