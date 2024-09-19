import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/product";
import Link from "next/link";
const fakeProps = {
  title: "Áo vest xanh ghi kẻ",
  coverImage:
    "https://theme.hstatic.net/1000333436/1001213866/14/hnc1_img_1_grande.jpg?v=344",
  detail:
    "- Họa tiết kẻ ô Scotland (Glen plaid) xanh ghi mang đến vẻ đẹp vừatrẻ trung, thời thượng;nhưng vẫn vô cùng lịch lãm. - Thiết kế Suitjacket 1 hàng khuy (single breasted) 2 cúc và ve chữ K (Notchlapel), cùng cầu vai được đệm cao giúp tôn lên hình thể của ngườiđàn ông Việt Nam. - Túi áo kiểu túi có nắp (Flap pockets) được maygọn gàng và tinh tế.",
  price: 2000000,
  slug: "ao-vest-xanh-ghi",
};
interface IProductList {
  dataProductNews: TProduct[];
}
export default function ProductList({ dataProductNews }: IProductList) {
  return (
    <div className="w-full">
      <p className="bold text-3xl my-5 text-center">BST Mới</p>
      <div className="flex flex-wrap gap-5 justify-center">
        {Array.isArray(dataProductNews) && dataProductNews.length > 0 ? (
          dataProductNews.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <p>Không có sản phẩm</p>
        )}
      </div>
      <div className="w-full flex justify-center my-5">
        <Button>
          <Link href="/products/all">Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
}
