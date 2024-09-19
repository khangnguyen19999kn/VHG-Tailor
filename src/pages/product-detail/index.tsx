import Card from "@/components/card";
import CarouselCustom from "@/components/carousel-custom";
import { Button } from "@/components/ui/button";
import CarouselSuggest from "@/pages/product-detail/components/carousel-suggest";
import Image from "next/image";
export const fakeProps = {
  title: "Áo vest xanh ghi kẻ",
  image: {
    url: "https://theme.hstatic.net/1000333436/1001213866/14/hnc1_img_1_grande.jpg?v=344",
    public_id: "",
  },
  detail:
    "- Họa tiết kẻ ô Scotland (Glen plaid) xanh ghi mang đến vẻ đẹp vừatrẻ trung, thời thượng;nhưng vẫn vô cùng lịch lãm. - Thiết kế Suitjacket 1 hàng khuy (single breasted) 2 cúc và ve chữ K (Notchlapel), cùng cầu vai được đệm cao giúp tôn lên hình thể của ngườiđàn ông Việt Nam. - Túi áo kiểu túi có nắp (Flap pockets) được maygọn gàng và tinh tế.",
  price: 2000000,
  slug: "ao-vest-xanh-ghi",
};
const exampleDetailProductHTMLString = `<div style="font-family: Arial, sans-serif; max-width: 600px;"><h1 style="color: #333;">VHG Suit</h1><img src="https://theme.hstatic.net/1000333436/1001213866/14/hnc1_img_1_grande.jpg?v=344" alt="Luxury Men's Suit" style="width: 100%; height: auto; border-radius: 5px;"><p style="color: #555; font-size: 16px;">Elevate your wardrobe with our <strong>Luxury Men's Suit</strong>, designed with the finest materials to offer unparalleled comfort and style. Perfect for any formal occasion, this suit features a classic fit, sleek lapels, and a modern silhouette that complements any physique.</p><ul style="color: #555; font-size: 16px;"><li>Material: 100% Wool</li><li>Color: Navy Blue</li><li>Sizes Available: S, M, L, XL</li></ul><p style="color: #333; font-size: 18px; font-weight: bold;">Price: $499.00</p></div>`;
export default function ProductDetail() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center my-10">
      <div className="bigDesktop:w-1/2 desktop:w-2/3 w-full p-3 h-full">
        <div className="w-full h-full flex justify-center gap-5">
          <div className="w-2/5 h-full">
            <CarouselCustom />
          </div>
          <div className="w-3/5 border rounded-xl p-8 flex flex-col gap-4">
            <p className="text-4xl bold">Tên sản phẩm ở đây</p>
            <div className="flex gap-3 items-center">
              <p>Màu sắc:</p>
              <div className="relative w-10 h-10">
                <Image
                  src={
                    "https://theme.hstatic.net/1000333436/1001213866/14/hnc1_img_1_grande.jpg?v=344"
                  }
                  alt="img-card-detail"
                  className="rounded-full"
                  fill
                />
              </div>
            </div>
            <div className="flex gap-1">
              <p>Kiểu dáng:</p>
              <p>Chi tiết kiểu dáng...</p>
            </div>
            <div className="flex gap-1">
              <p>Chất liệu:</p>
              <p>Chi tiết chất liệu</p>
            </div>
            <div className="flex gap-1">
              <p>Size:</p>
              <p>Các size</p>
            </div>
            <div className="w-full rounded-xl mt-5 border-gray-900 border hover:bg-slate-200 hover:border-transparent  transition-all">
              <p className="text-lg bold text-center p-3">{`Giá bán: 200000000 VNĐ`}</p>
            </div>
            <Button className="w-full bold">Mua Ngay</Button>
          </div>
        </div>
        <div className="w-full my-5">
          <p className="text-2xl bold">Chi tiết sản phẩm</p>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: exampleDetailProductHTMLString }}
          ></div>
        </div>
        <div className="w-full my-5">
          <p className="text-2xl bold text-center">
            Sản phẩm có thể bạn quan tâm
          </p>
          <div className="w-full my-5">
            <CarouselSuggest item={<Card {...fakeProps} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
