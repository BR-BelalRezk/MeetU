import Image from "next/image";

export default function Loader() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Image
        src={"/icons/loading-circle.svg"}
        alt="loader"
        width={50}
        height={50}
      />
    </div>
  );
}
