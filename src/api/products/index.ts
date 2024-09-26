export async function getProductsNew() {
  const res = await fetch("https://api.vhgtailorhouse.vn/products/new", {
    cache: "no-store",
  });
  return res.json();
}
export async function getProductsWithType(type: string, limit?: number) {
  const urlFetch = limit
    ? `https://api.vhgtailorhouse.vn/products/${type}?limit=${limit}`
    : `https://api.vhgtailorhouse.vn/products/${type}`;
  const res = await fetch(urlFetch, {
    cache: "no-store",
  });
  return res.json();
}

export async function getProductDetail(slug: string) {
  const res = await fetch(
    `https://api.vhgtailorhouse.vn/products/detail/${slug}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
