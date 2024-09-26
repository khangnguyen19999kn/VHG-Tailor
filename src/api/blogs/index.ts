export async function getBlogsNew(limit?: number) {
  const url = limit
    ? `https://api.vhgtailorhouse.vn/blogs?limit=${limit}`
    : "https://api.vhgtailorhouse.vn/blogs";
  const res = await fetch(url, {
    cache: "no-store",
  });
  return res.json();
}
export async function getBlogs() {
  const res = await fetch("https://api.vhgtailorhouse.vn/blogs", {
    cache: "no-store",
  });
  return res.json();
}
export async function getBlogDetail(slug: string) {
  const res = await fetch(
    `https://api.vhgtailorhouse.vn/blogs/detail/${slug}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
