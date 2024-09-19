export async function getProductsNew() {
  const res = await fetch("https://vhg.vovantrong.xyz/products/new");
  return res.json();
}
export async function getProductsWithType(type: string) {
  const res = await fetch(`https://vhg.vovantrong.xyz/products/${type}`);
  return res.json();
}
