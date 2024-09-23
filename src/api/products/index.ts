export async function getProductsNew() {
  const res = await fetch("https://vhg.vovantrong.xyz/products/new", {
    cache: "no-store",
  });
  return res.json();
}
export async function getProductsWithType(type: string, limit?: number) {
  const urlFetch = limit
    ? `https://vhg.vovantrong.xyz/products/${type}?limit=${limit}`
    : `https://vhg.vovantrong.xyz/products/${type}`;
  const res = await fetch(urlFetch, {
    cache: "no-store",
  });
  return res.json();
}

export async function getProductDetail(slug: string) {
  const res = await fetch(
    `https://vhg.vovantrong.xyz/products/detail/${slug}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
