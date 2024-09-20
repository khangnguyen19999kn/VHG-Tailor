import { ImageDto } from "@/types/product";

export type TBlogs = {
  content: string;
  slug: string;
  coverImage: ImageDto;
  title: string;
  createdAt: Date;
  author: string;
};
export type TBlogsResponse = {
  status: number;
  message?: string;
  data: TBlogs[];
};
export type TBlogResponse = {
  status: number;
  message?: string;
  data: TBlogs;
};