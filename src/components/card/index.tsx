import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  name,
  description,
  price,
  images,
  slug,
}: Partial<TProduct>) {
  return (
    <div className="w-72 mobile:w-full h-[400px] rounded-sm relative block overflow-hidden group">
      <Image src={images?.[0]?.url || ""} alt="img-card" fill />
      <div className="absolute z-10 w-full h-full bottom-0 left-0 bg-white bg-opacity-80 text-white p-4 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mt-5 text-black">
          <p className="text-xl bold text-center">{name}</p>
          <p className="text-base mt-1 bold">Chi tiết sản phẩm:</p>
          <p className="text-base line-clamp-6">{description}</p>
          <div className="w-full rounded-xl mt-5 border-gray-900 border hover:bg-slate-200 hover:border-transparent  transition-all">
            <p className="text-lg bold text-center p-3">{`Giá bán: ${
              price?.toLocaleString() || 0
            } VNĐ`}</p>
          </div>
          <Link href={`/products/detail/${slug}`}>
            <Button className="w-full mt-5">Xem chi tiết</Button>
          </Link>
        </div>
      </div>
      <div className="bg-white w-fit py-[2px] px-2 rounded-full border-gray-200 border absolute top-2 left-2">
        <p className="bold text-sm">NEW</p>
      </div>
    </div>
  );
}
