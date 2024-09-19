
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
  typeId: string;
  viewCount: number;
}