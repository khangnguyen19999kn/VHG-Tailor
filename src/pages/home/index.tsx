import Divider from "@/components/divider";
import BlogList from "@/pages/home/components/BlogList";
import CarouselHomePage from "@/pages/home/components/Carousel";
import ProductList from "@/pages/home/components/ProductList";

export default function HomePage() {
  return (
    <div>
      <CarouselHomePage />
      <div className="mt-2 w-full flex justify-center">
        <div className="w-1/2">
          <div className="bg-red grid">

          </div>
          <Divider />
          <ProductList />
          <Divider />
          <BlogList />
        </div>
      </div>
    </div>
  );
}
