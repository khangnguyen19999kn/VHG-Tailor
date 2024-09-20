import Card from "@/components/card";
import CarouselCustom from "@/components/carousel-custom";
import { Button } from "@/components/ui/button";
import CarouselSuggest from "@/pages/product-detail/components/carousel-suggest";
import { TProduct } from "@/types/product";
import Image from "next/image";
interface IProductDetailProps {
  data: TProduct;
  dataSuggest: TProduct[];
}

export default function ProductDetail({
  data,
  dataSuggest,
}: IProductDetailProps) {
  const itemSuggest = dataSuggest.map((item) => (
    <Card key={item.id} {...item} />
  ));
  return (
    <div className="w-full h-full min-h-screen flex justify-center my-10 mobile:my-2">
      <div className="bigDesktop:w-1/2 desktop:w-2/3 w-full p-3 h-full">
        <div className="w-full h-full flex justify-center gap-5 mobile:flex-col">
          <div className="w-2/5 h-full mobile:w-full">
            <CarouselCustom images={data.images} />
          </div>
          <div className="w-3/5 border rounded-xl p-8 flex flex-col gap-4 mobile:w-full">
            <p className="text-4xl bold">{data.name}</p>
            <div className="flex gap-3 items-center">
              <p>Màu sắc:</p>
              <div className="relative w-10 h-10">
                <Image
                  src={data.images[0].url}
                  alt="img-card-detail"
                  className="rounded-full"
                  fill
                />
              </div>
            </div>
            <div className="flex gap-1">
              <p>Kiểu dáng:</p>
              <p>{data.type.name.toUpperCase()}</p>
            </div>
            <div className="flex gap-1">
              <p>Chất liệu:</p>
              <p>{data.material}</p>
            </div>
            <div className="flex gap-1">
              <p>Size:</p>
              <div className="flex gap-1 font-semibold">
                {data.sizes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="w-full rounded-xl mt-5 border-gray-900 border hover:bg-slate-200 hover:border-transparent  transition-all">
              <p className="text-lg bold text-center p-3">{`Giá bán: ${data.price.toLocaleString()} VNĐ`}</p>
            </div>
            <a href={data.link} target="_blank">
              <Button className="w-full bold">Mua Ngay</Button>
            </a>
          </div>
        </div>
        <div className="w-full my-5">
          <p className="text-2xl bold">Chi tiết sản phẩm</p>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </div>
        <div className="w-full mb-5 mt-8">
          <p className="text-2xl bold text-center">
            Sản phẩm có thể bạn quan tâm
          </p>
          <div className="w-full my-5">
            <CarouselSuggest items={itemSuggest} />
          </div>
        </div>
      </div>
    </div>
  );
}
