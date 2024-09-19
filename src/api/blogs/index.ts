export async function getBlogsNew() {
    const res = await fetch("https://vhg.vovantrong.xyz/blogs/new");
    return res.json();
  }