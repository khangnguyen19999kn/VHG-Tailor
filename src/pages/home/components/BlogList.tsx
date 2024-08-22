import CardBlog from "@/components/card-blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const fakeBlogProps = {
  slug: "bai-viet-thu-vi",
  image:
    "https://theme.hstatic.net/1000333436/1001213866/14/fourth_htesti_img_3_large.jpg?v=344",
  title: "Bài viết thú vị",
};
export default function BlogList() {
  return (
    <div className="w-full">
      <p className="bold text-3xl my-10 text-center">Bài viết</p>
      <div className="flex flex-wrap gap-5 justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardBlog key={index} {...fakeBlogProps} />
        ))}
      </div>
      <div className="w-full flex justify-center my-5">
        <Button>
          <Link href="/blog">Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
}
