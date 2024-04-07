import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { sidebar } from "@/constants/constants";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            alt="hamburger icon"
            width={36}
            height={36}
            className=" cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={"/icons/logo.svg"}
              width={32}
              height={32}
              alt="meetu logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extralight text-white">MeetU</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <ul className="flex h-full gap-6 flex-col pt-16 text-white">
                {sidebar.map((item) => {
                  const isActive = pathname === item.route;
                  return (
                    <SheetClose asChild key={item.label}>
                      <li
                        className={cn("p-3 rounded-lg w-full max-w-60", {
                          "bg-blue-1": isActive,
                        })}
                      >
                        <Link
                          href={item.route}
                          className="flex gap-5 items-center"
                        >
                          <Image
                            src={item.imgUrl}
                            alt={item.label}
                            width={20}
                            height={20}
                          />
                          <p className="font-semibold ">{item.label}</p>
                        </Link>
                      </li>
                    </SheetClose>
                  );
                })}
              </ul>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
