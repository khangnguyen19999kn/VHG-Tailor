import { Image } from "lucide-react";

export default function ProcedurePage() {
  return (
    <div className="w-full flex justify-center">
      <div className="bigDesktop:w-1/2 desktop:w-2/3 min-h-screen p-5">
        <p className="text-3xl bold font-[playFair] text-center">
          QUY TRÌNH MAY ĐO
        </p>
        <div className="grid grid-cols-2 gap-8 my-10">
          <div className="border rounded-md p-4 min-h-96 flex justify-center items-center">
            <Image />
          </div>
          <div className="p-4 min-h-96">
            <p className="text-2xl font-semibold">Bước 1:</p>
            <p>Làm gì đó ......</p>
          </div>
          <div className="p-4 min-h-96">
            <p className="text-2xl font-semibold">Bước 2:</p>
            <p>Làm gì đó ......</p>
          </div>
          <div className="border rounded-md p-4 min-h-96 flex justify-center items-center">
            <Image />
          </div>
          <div className="border rounded-md p-4 min-h-96 flex justify-center items-center">
            <Image />
          </div>
          <div className="p-4 min-h-96">
            <p className="text-2xl font-semibold">Bước 3:</p>
            <p>Làm gì đó ......</p>
          </div>
        </div>
      </div>
    </div>
  );
}
