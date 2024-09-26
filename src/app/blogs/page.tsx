import { getBlogs } from "@/api/blogs";
import CardBlog from "@/components/card-blog";
import { TBlogsResponse } from "@/types/blogs";

export default async function PageListBlog() {
  const dataBlog: TBlogsResponse = await getBlogs();
  return (
    <div className="w-full flex justify-center">
      <div className="bigDesktop:w-1/2 desktop:w-2/3 min-h-screen p-5">
        <p className="text-3xl bold font-[playFair] text-center">{`LOOK BOOK`}</p>
        <div className="flex flex-wrap gap-5 justify-center my-10">
          {dataBlog.data.map((item) => (
            <CardBlog key={item.slug} {...item} className="w-1/4" />
          ))}
        </div>
      </div>
    </div>
  );
}
