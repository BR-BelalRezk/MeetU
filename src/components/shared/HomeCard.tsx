"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
type Props = {
  color: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
};
export default function HomeCard({
  img,
  title,
  description,
  handleClick,
  color,
}: Props) {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        color
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="add-meeting-icon" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}
