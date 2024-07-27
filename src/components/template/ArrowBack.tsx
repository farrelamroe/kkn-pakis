import Image from "next/image";
import { Text } from "@/components";

export function ArrowBack(){
    return (
      <div
        className=" mt-[111px] flex flex-row items-center justify-start gap-x-1 hover:cursor-pointer hover:font-bold duration-300"
        onClick={() => window.history.back()}
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