import { H4 } from "@/components";
import Image from "next/image";

export function Card(props: any) {
  const { image, title } = props;

  return (
    <>
      <div className="h-full max-h-[288px] w-full rounded-[14px] border bg-primary duration-300 hover:scale-110 hover:cursor-pointer lg:max-w-[305px]">
        <Image
          src={image}
          alt="image"
          width={305}
          height={180}
          className="maw-w-[180px] h-full max-h-[180px] w-full rounded-[14px] object-cover"
        />
        <H4 className="px-[20px] py-[32px] font-jakarta font-bold">{title}</H4>
      </div>
    </>
  );
}
