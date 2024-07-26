import { H4 } from "@/components";
import Image from "next/image";

export function Card(props: any) {
  const { image, title } = props;

  return (
    <>
      <div className="h-full max-h-[288px] w-full max-w-[305px] rounded-[14px] bg-primary border hover:cursor-pointer hover:scale-110 duration-300">
        <Image
          src={image}
          alt="image"
          width={305}
          height={180}
          className="rounded-[14px]"
        />
        <H4 className="px-[20px] py-[32px] font-jakarta font-bold">{title}</H4>
      </div>
    </>
  );
}
