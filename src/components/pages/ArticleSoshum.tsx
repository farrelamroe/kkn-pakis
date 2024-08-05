import { ArrowBack, H1, dataArticleSoshum } from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function ArticleSoshum({ href }: any) {
  const data = dataArticleSoshum[href];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <ArrowBack />
      <img
        src={data.image}
        alt="image"
        height={312}
        width={1112}
        className="mt-[28px] aspect-video h-full max-h-[312px] w-full rounded-[24px] object-cover lg:aspect-auto"
        data-aos="fade-up"
      />
      <ul
        className="custom-list-disc mt-[40px] pl-5 font-jakarta text-[18px] leading-[22px] lg:text-[20px] lg:leading-[24px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <li>{data.location}</li>
      </ul>
      <div data-aos="fade-up" data-aos-delay="600">
        <H1 className="mt-[15px] font-alatsi text-secondary">{data.title}</H1>
      </div>
      <div
        className="mb-[126px] mt-[30px] text-justify font-jakarta text-secondary"
        data-aos="fade-up"
      >
        {data.text}
      </div>
    </>
  );
}
