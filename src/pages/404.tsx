import { H1 } from "@/components";
import Image from "next/image";

export default function NotFounf() {
  return (
    <>
      <div className="flex h-screen flex-row items-center justify-center gap-x-[50px]">
        <Image src="/logo-pakis.png" alt="image" width={500} height={500} />
        <H1 className="font-jakarta">Halaman tidak ditemukan!</H1>
      </div>
    </>
  );
}
