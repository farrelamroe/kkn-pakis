import { H4 } from "@/components";
import Image from "next/image";

export function Card(props: any) {
  const { image, title } = props;

  return (
    <>
      <div className="w-full rounded-[14px] border bg-primary duration-300 hover:scale-110 hover:cursor-pointer lg:h-[324px] lg:max-w-[305px] xl:h-[288px]">
        <Image
          src={image}
          alt="image"
          width={305}
          height={180}
          className="h-[180px] w-full min-w-[180px] rounded-[14px] object-cover object-center"
        />
        <div className="h-[84px] content-center justify-center">
          <H4 className="px-[20px] font-jakarta font-bold">{title}</H4>
        </div>
      </div>
    </>
  );
}
