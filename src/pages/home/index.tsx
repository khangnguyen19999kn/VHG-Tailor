import CarouselCustom from "@/components/carousel-custom";
import Divider from "@/components/divider";
import BlogList from "@/pages/home/components/BlogList";
import ProductList from "@/pages/home/components/ProductList";
import ProductTypes from "@/pages/home/components/ProductTypes";
import "../home/index.css";
export default function HomePage() {
  return (
    <div>
      <CarouselCustom />
      <div className="mt-2 w-full flex justify-center">
        <div className="bigDesktop:w-1/2 desktop:w-2/3">
          <ProductTypes />
          <Divider />
          <ProductList />
          <Divider />
          <BlogList />
        </div>
      </div>
    </div>
  );
}
