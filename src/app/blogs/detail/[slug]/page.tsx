import { getBlogDetail, getBlogsNew } from "@/api/blogs";
import BlogDetail from "@/features/blog-detail";
import { TBlogResponse, TBlogsResponse } from "@/types/blogs";

// export async function generateStaticParams() {
//   let posts: TBlogsResponse = await fetch(
//     "https://api.vhgtailorhouse.vn/blogs"
//   ).then((res) => res.json());
//   return posts.data.map((post) => ({
//     slug: post.slug,
//   }));
// }
export default async function PageBlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const dataBlogsNew: TBlogsResponse = await getBlogsNew(6);
  const dataBlogDetail: TBlogResponse = await getBlogDetail(params.slug);
  return (
    <BlogDetail
      blogData={dataBlogDetail.data}
      blogDataSuggest={dataBlogsNew.data}
    />
  );
}
