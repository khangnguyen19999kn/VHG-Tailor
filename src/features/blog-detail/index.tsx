import CardBlog from "@/components/card-blog";
import { Separator } from "@/components/ui/separator";
import CarouselSuggest from "@/features/product-detail/components/carousel-suggest";
import { TBlogs } from "@/types/blogs";
import { CalendarDays, User } from "lucide-react";
interface IBlogDetailProps {
  blogData: TBlogs;
  blogDataSuggest: TBlogs[];
}

export default function BlogDetail({
  blogData,
  blogDataSuggest,
}: IBlogDetailProps) {
  const blogsSuggest = blogDataSuggest.map((item) => (
    <CardBlog key={item.slug} {...item} />
  ));

  return (
    <div className="w-full flex justify-center my-10 mobile:my-5">
      <div className="w-1/2 mobile:w-full mobile:p-3 laptop:w-2/3 tablet:w-3/4">
        <p className="text-3xl font-semibold mobile:text-2xl text-center">
          {blogData.title}
        </p>
        <div className="flex items-center gap-2 my-3 mobile:flex-col justify-center">
          <div className="flex items-center gap-1">
            <CalendarDays />
            <p>{new Date(blogData.createdAt).toUTCString()}</p>
          </div>
          <Separator
            className="w-[1px] h-2 bg-black mobile:hidden"
            orientation="vertical"
          />
          <div className="flex items-center gap-1">
            <User />
            <p>{blogData.author}</p>
          </div>
        </div>
        <div
          className="w-full mt-12 mobile:mt-8"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />
        <div className="w-full my-5">
          <p className="text-2xl font-bold text-center">Những bài viết liên quan</p>
          <div className="w-full my-5">
            <CarouselSuggest items={blogsSuggest} />
          </div>
        </div>
      </div>
    </div>
  );
}
