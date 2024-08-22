import CardBlog from "@/components/card-blog";
import { fakeBlogProps } from "@/pages/home/components/BlogList";
import CarouselSuggest from "@/pages/product-detail/components/carousel-suggest";
import { CalendarDays, User } from "lucide-react";

export default function BlogDetail() {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-1/2">
        <p className="text-3xl font-semibold">Tiêu đề bài viết</p>
        <div className="flex items-center gap-2 my-3">
          <CalendarDays />
          <p>22/08/2024</p>
          <User />
          <p>Tên tác giả</p>
        </div>
        <div className="w-full bg-orange-400 h-[1000px] flex justify-center items-center">
          <p>Chi tiết bài viết hiển thị ở đây</p>
        </div>
        <div className="w-full my-5">
          <p className="text-2xl bold text-center">Những bài viết liên quan</p>
          <div className="w-full my-5">
            <CarouselSuggest item={<CardBlog {...fakeBlogProps} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
