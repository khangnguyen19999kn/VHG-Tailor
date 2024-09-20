export async function getBlogsNew(limit?: number) {
  const url = limit
    ? `https://vhg.vovantrong.xyz/blogs?limit=${limit}`
    : "https://vhg.vovantrong.xyz/blogs";
  const res = await fetch(url, {
    cache: "force-cache",
  });
  return res.json();
}
export async function getBlogs() {
  const res = await fetch("https://vhg.vovantrong.xyz/blogs", {
    cache: "force-cache",
  });
  return res.json();
}
export async function getBlogDetail(slug: string) {
  const res = await fetch(`https://vhg.vovantrong.xyz/blogs/detail/${slug}`, {
    cache: "force-cache",
  });
  return res.json();
}
