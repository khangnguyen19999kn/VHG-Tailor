import { TProduct } from "@/types/product";

export const sortData = (priceRange: string | null, data: TProduct[]) => {
  if (priceRange === "all" || !priceRange) {
    return data;
  }
  switch (priceRange) {
    case "cheap":
      return data.filter((item) => item.price < 3000000);
    case "affordable":
      return data.filter(
        (item) => item.price >= 3000000 && item.price < 5000000
      );
    case "expensive":
      return data.filter((item) => item.price >= 5000000);
    default:
      return data;
  }
};
