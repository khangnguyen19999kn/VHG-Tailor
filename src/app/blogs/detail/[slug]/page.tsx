import { getBlogDetail, getBlogsNew } from "@/api/blogs";
import BlogDetail from "@/features/blog-detail";
import { TBlogResponse, TBlogsResponse } from "@/types/blogs";


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
