import { Button } from "@/components/ui/button";
import "@/features/home/index.css";
import Link from "next/link";
export default function ProductTypes() {
  return (
    <div className="product-type mobile:flex mobile:flex-col mt-5 p-5 gap-3 mobile:p-0">
      <div className="item1 relative hover:-translate-y-1">
        <p className="absolute top-3 left-5 bold text-white text-3xl">SUIT</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/suit"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item2 relative hover:-translate-y-1">
        <p className="absolute top-1 left-2 bold text-white text-lg">SHIRT</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/shirt"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item3 relative hover:-translate-y-1">
        <p className="absolute bottom-1 left-2 bold text-white text-lg">
          TROUSER
        </p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/trouser"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item4 relative hover:-translate-y-1">
        <p className="absolute top-1 left-2 bold text-white text-lg">VEST</p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/vest"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item5 relative hover:-translate-y-1">
        <p className="absolute bottom-5 left-2 bold text-white text-lg">
          JACKET
        </p>
        <div className="w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
          <Link href={"/products/jacket"}>
            <Button variant={"outline"}>Xem thêm</Button>
          </Link>
        </div>
      </div>
      <div className="item6 relative hover:-translate-y-1">
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
