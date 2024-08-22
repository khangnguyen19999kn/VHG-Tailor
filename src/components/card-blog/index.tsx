import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ICardBlogProps {
  slug: string;
  image: string;
  title: string;
  className?: string;
}

export default function CardBlog({ slug, image, title ,className}: ICardBlogProps) {
  return (
    <div className={cn("min-w-72", className)}>
      <div className="h-72 bg-red-400 rounded relative block overflow-hidden">
        <Link href={`/blog/detail/${slug}`}>
          <Image
            fill
            src={image}
            alt="img-card"
            className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>
      <p className="bold my-1 text-center">{title}</p>
    </div>
  );
}
