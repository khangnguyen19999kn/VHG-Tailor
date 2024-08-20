import Image from "next/image";

export default function CardBlog() {
  return (
    <div className="w-72">
      <div className="h-72 bg-red-400 rounded relative block overflow-hidden">
        <Image
          fill
          src="https://theme.hstatic.net/1000333436/1001213866/14/fourth_htesti_img_3_large.jpg?v=344"
          alt="img-card"
          className="transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <p className="bold my-1 text-center">Bài viết thú vị</p>
    </div>
  );
}
