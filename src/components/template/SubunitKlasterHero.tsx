import { H1, H2, H4, H5 } from "@/components";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function SubunitKlasterHero(props: any) {
  const { image, title, description } = props;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize(); // Set initial width

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (windowWidth === null) {
    return null; // Render nothing until the component has mounted
  }

  let HeadingTag, DescriptionTag: any;
  if (windowWidth >= 768) {
    HeadingTag = H1;
    DescriptionTag = H4;
  } else {
    HeadingTag = H2;
    DescriptionTag = H5;
  }
  return (
    <>
      <div
        className="mx-[50px] mb-[41px] mt-[28px] h-[75vh] w-[calc(100%-100px)] rounded-[24px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        <div
          className="relative top-[35%] px-[20px] xs:top-[40%] lg:px-[54px]"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <HeadingTag className="font-alatsi font-bold text-white">
            {title}
          </HeadingTag>
          <DescriptionTag className="max-w-[661px] pb-[72px] pt-[20px] font-jakarta text-white">
            {description}
          </DescriptionTag>
        </div>
      </div>
    </>
  );
}
