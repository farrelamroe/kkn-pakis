import { H1, H2, H3, H4, H5 } from "@/components";
import { useState, useEffect } from "react";

export function SubunitHero(props: any) {
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
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="relative top-[35%] px-[20px] xs:top-[40%] lg:px-[54px]">
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
