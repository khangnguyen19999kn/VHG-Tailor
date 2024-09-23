import { ImageDto } from "@/types/product";

export type TResponseHeroSection = {
  status: number;
  message?: string;
  data: ImageDto[];
};
