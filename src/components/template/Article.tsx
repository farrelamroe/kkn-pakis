import { H1, H3, H4, dataArticleGerdu } from "@/components";
import Image from "next/image";

export function Article({ href }: any) {
    const data = dataArticleGerdu[href];
 
  return (
    <>
      <Image
        src={data.header}
        alt="image"
        height={312}
        width={1112}
        className="h-[312px] rounded-[24px] object-cover"
      />
      <H4 className="mt-[40px] font-jakarta">{data.location}</H4>
      <H1 className="font-alatsi mt-[15px]">{data.title}</H1>
      <H3 className="mt-[30px] font-jakarta">{data.text}</H3>
    </>
  );
}