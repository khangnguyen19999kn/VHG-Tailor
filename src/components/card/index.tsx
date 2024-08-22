import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const fakeProps = {
  title: "Áo vest xanh ghi kẻ",
  image:
    "https://theme.hstatic.net/1000333436/1001213866/14/hnc1_img_1_grande.jpg?v=344",
  detail:
    "- Họa tiết kẻ ô Scotland (Glen plaid) xanh ghi mang đến vẻ đẹp vừatrẻ trung, thời thượng;nhưng vẫn vô cùng lịch lãm. - Thiết kế Suitjacket 1 hàng khuy (single breasted) 2 cúc và ve chữ K (Notchlapel), cùng cầu vai được đệm cao giúp tôn lên hình thể của ngườiđàn ông Việt Nam. - Túi áo kiểu túi có nắp (Flap pockets) được maygọn gàng và tinh tế.",
  price: 2000000,
  slug: "ao-vest-xanh-ghi",
};

interface ICardProps {
  title: string;
  image: string;
  detail: string;
  price: number;
  slug: string;
}
export default function Card({
  title,
  detail,
  price,
  image,
  slug,
}: ICardProps) {
  return (
    <div className="w-72 h-[400px] rounded-sm relative block overflow-hidden group">
      <Image src={image} alt="img-card" fill />
      <div className="absolute z-10 w-full h-full bottom-0 left-0 bg-white bg-opacity-80 text-white p-4 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mt-5 text-black">
          <p className="text-xl bold text-center">{title}</p>
          <p className="text-base mt-1 bold">Chi tiết sản phẩm:</p>
          <p className="text-base line-clamp-6">{detail}</p>
          <div className="w-full rounded-xl mt-5 border-gray-900 border hover:bg-slate-200 hover:border-transparent  transition-all">
            <p className="text-lg bold text-center p-3">{`Giá bán: ${price.toLocaleString()} VNĐ`}</p>
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
