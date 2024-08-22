import IconSuit from "@/assets/icons/IconSuit";

export default function Divider() {
  return (
    <div className="w-full flex gap-2 justify-center items-center my-10">
      <div className="min-w-40 h-[2px] bg-red-600"></div>
      <IconSuit className="w-10 h-10"/>
      <div className="min-w-40 h-[2px] bg-red-600"></div>
    </div>
  );
}
