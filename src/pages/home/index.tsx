import { IHomePageProps } from "@/app/page";
import CarouselCustom from "@/components/carousel-custom";
import Divider from "@/components/divider";
import BlogList from "@/pages/home/components/BlogList";
import ProductList from "@/pages/home/components/ProductList";
import ProductTypes from "@/pages/home/components/ProductTypes";
import "../home/index.css";

export default function HomePage({ data }: IHomePageProps) {
  const { dataProductsNew, dataBlogsNew, dataHeroSection } = data;
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full bigDesktop:w-1/2 desktop:w-2/3 ">
          <CarouselCustom images={dataHeroSection} />
        </div>
      </div>
      <div className="mt-2 w-full flex justify-center">
        <div className="bigDesktop:w-1/2 desktop:w-2/3 w-full">
          <ProductTypes />
          <Divider />
          <ProductList dataProductNews={dataProductsNew} />
          <Divider />
          <BlogList dataBlogsNew={dataBlogsNew} />
        </div>
      </div>
    </div>
  );
}
