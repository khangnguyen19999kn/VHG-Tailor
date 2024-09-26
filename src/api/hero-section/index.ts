export async function getHeroSection() {
  const res = await fetch("https://api.vhgtailorhouse.vn/hero-section", {
    cache: "no-store",
  });
  return res.json();
}
