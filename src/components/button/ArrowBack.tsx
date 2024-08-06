import Image from "next/image";
import { Text } from "@/components";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function ArrowBack() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="mt-[111px] flex flex-row items-center justify-start gap-x-1"
      onClick={() => router.back()}
      data-aos="fade-right"
    >
      <Image
        src="/arrow.png"
        alt=""
        width={15}
        height={15}
        className="h-fit w-fit max-h-[15px] max-w-[15px]"
      />
      <Text
        size="xs"
        className="underline-animation font-jakarta duration-300 hover:cursor-pointer hover:font-bold"
      >
        Kembali
      </Text>
    </div>
  );
}
