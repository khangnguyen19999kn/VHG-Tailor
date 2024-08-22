import Card from "@/components/card";
const fakeProps = {
  title: "Áo vest xanh ghi kẻ",
  image:
    "https://theme.hstatic.net/1000333436/1001213866/14/hnc1_img_1_grande.jpg?v=344",
  detail:
    "- Họa tiết kẻ ô Scotland (Glen plaid) xanh ghi mang đến vẻ đẹp vừatrẻ trung, thời thượng;nhưng vẫn vô cùng lịch lãm. - Thiết kế Suitjacket 1 hàng khuy (single breasted) 2 cúc và ve chữ K (Notchlapel), cùng cầu vai được đệm cao giúp tôn lên hình thể của ngườiđàn ông Việt Nam. - Túi áo kiểu túi có nắp (Flap pockets) được maygọn gàng và tinh tế.",
  price: 2000000,
  slug: "ao-vest-xanh-ghi-ke",
};
export default function ProductList() {
  return (
    <div className="w-full my-10">
      <div className="flex flex-wrap gap-5 justify-center">
        {Array.from({ length: 40 }).map((_, index) => (
          <Card key={index} {...fakeProps} />
        ))}
      </div>
    </div>
  );
}
