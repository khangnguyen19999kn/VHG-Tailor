"use client";
import { useParams } from "next/navigation";

export default function PageProductType() {
  const params = useParams();
  const { type } = params as { type: string };
  return <div>PageProductType</div>;
}
