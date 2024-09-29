import CardBlog from "@/components/card-blog";
import { Button } from "@/components/ui/button";
import { TBlogs } from "@/types/blogs";
import Link from "next/link";
export const fakeBlogProps = {
  slug: "bai-viet-thu-vi",
  coverImage: {
    url: "https://theme.hstatic.net/1000333436/1001213866/14/fourth_htesti_img_3_large.jpg?v=344",
    public_id: "",
  },
  title: "Bài viết thú vị",
};

interface IBlogList {
  dataBlogsNew: TBlogs[];
}
export default function BlogList({ dataBlogsNew }: IBlogList) {
  return (
    <div className="w-full">
      <p className="font-bold text-3xl my-10 text-center">ART WORK</p>
      <div className="flex flex-wrap gap-5 justify-center">
        {Array.isArray(dataBlogsNew) && dataBlogsNew.length > 0 ? (
          dataBlogsNew.map((item) => <CardBlog key={item.slug} {...item} />)
        ) : (
          <p>Không có bài viết</p>
        )}
        {/* )
        {Array.from({ length: 4 }).map((_, index) => (
          <CardBlog key={index} {...fakeBlogProps} />
        ))} */}
      </div>
      <div className="w-full flex justify-center my-5">
        <Button>
          <Link href="/blogs">Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
}
