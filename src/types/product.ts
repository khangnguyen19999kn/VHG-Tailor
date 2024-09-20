export interface ImageDto {
  public_id: string;
  url: string;
}
export type TProduct = {
  description: string;
  id: string;
  images: ImageDto[];
  link: string;
  material: string;
  name: string;
  price: number;
  sizes: string[];
  slug: string;
  type: { id: number; name: string };
  viewCount: number;
};
export type TResponseProducts = {
  status: number;
  message?: string;
  data: TProduct[];
};

export type TResponseProductDetail = {
  status: number;
  message?: string;
  data: TProduct;
};
