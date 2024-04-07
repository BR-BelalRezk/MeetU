import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/icons/logo.svg"}
          width={32}
          height={32}
          alt="meetu logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extralight text-white max-sm:hidden">
          MeetU
        </p>
      </Link>
      <div className="flex items-center justify-between gap-5">
        {/* CLERK - USER MANAGEMENT */}
        <MobileNav />
      </div>
    </nav>
  );
}
