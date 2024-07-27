import { ArrowBack, H1, H3, H4, dataArticleSemampiran } from "@/components";
import Image from "next/image";

export function ArticleSemampiran({ href }: any) {
  const data = dataArticleSemampiran[href];

  return (
    <>
      <ArrowBack />
      <Image
        src={data.image}
        alt="image"
        height={312}
        width={1112}
        className="mt-[28px] h-full max-h-[312px] w-full rounded-[24px] object-cover"
      />
      <ul className="custom-list-disc mt-[40px] pl-5 font-jakarta text-[18px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
        <li>{data.location}</li>
      </ul>
      <H1 className="font-alatsi mt-[15px] text-secondary">{data.title}</H1>
      <H3 className="mb-[126px] mt-[30px] text-justify font-jakarta text-secondary">
        {data.text}
      </H3>
    </>
  );
}
