import Image from "next/image";
import { Text } from "@/components";
import { useRouter } from "next/router";

export function ArrowBack() {
  const router = useRouter();
  return (
    <div
      className="mt-[111px] flex flex-row items-center justify-start gap-x-1 duration-300 hover:cursor-pointer hover:font-bold"
      onClick={() => router.back()}
    >
      <Image
        src="/arrow.png"
        alt=""
        width={15}
        height={50}
        className="h-fit w-fit"
      />
      <Text size="xs" className="font-jakarta">
        Kembali
      </Text>
    </div>
  );
}
