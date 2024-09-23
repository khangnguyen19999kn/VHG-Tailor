export async function getHeroSection() {
  const res = await fetch("https://vhg.vovantrong.xyz/hero-section", {
    cache: "no-store",
  });
  return res.json();
}
