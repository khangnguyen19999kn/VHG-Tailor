import { Button } from "@/components/ui/button";
import "@/pages/home/index.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function ProductTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll("div") || [];
    const totalItems = items?.length;

    const animateItems = () => {
      items.forEach((item) => {
        item.classList.remove("float-up");
      });

      items[activeIndex].classList.add("float-up");

      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 1000); // Thời gian mỗi item nổi lên và hạ xuống
    };

    animateItems();

    const interval = setInterval(animateItems, 1500); // Chu kỳ tổng cho mỗi item (thời gian nổi lên + thời gian chờ)
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div
      className="bg-red product-type mt-5 p-5 gap-3 mobile:p-0"
      ref={gridRef}
    >
      <div className="item1 relative">
        <p className="absolute top-3 left-5 bold text-white text-3xl">SUIT</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/suit"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item2 relative">
        <p className="absolute top-1 left-2 bold text-white text-lg">SHIRT</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/shirts"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item3 relative">
        <p className="absolute bottom-1 left-2 bold text-white text-lg">
          TROUSER
        </p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/trouser"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item4 relative">
        <p className="absolute top-1 left-2 bold text-white text-lg">VEST</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/vest"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item5 relative">
        <p className="absolute bottom-5 left-2 bold text-white text-lg">
          JACKET
        </p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/jacket"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item6 relative">
        <p className="absolute top-1 left-2 bold text-white text-lg">BLAZER</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/blazer"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
