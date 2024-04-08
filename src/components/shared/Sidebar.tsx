"use client";
import { sidebar } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className=" sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <ul className="flex flex-1 flex-col gap-6">
        {sidebar.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <li
              key={item.label}
              className={cn("p-3 rounded-lg", { "bg-blue-1": isActive })}
            >
              <Link
                href={item.route}
                className="flex gap-5 items-center justify-start"
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={25}
                  height={25}
                />
                <p className="text-lg font-semibold max-lg:hidden">
                  {item.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
