import { Button, Container, H1, H3, H4 } from "@/components";
import { Home_H1 } from "../text/Home_H1";
import Image from "next/image";

export function MainHero(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <Image
        src={image} alt="" height={10000} width={10000}
        className="mx-[50px] mb-[25px] mt-[120px] h-[490px] w-[calc(100%-100px)] rounded-[24px] text-white object-cover object-center"
        // style={{ objectPosition: 'right bottom' }}
      />
        <Container>
          <div className="relative top-[40%] xs:top-[50%] lg:top-[30%]">
            <Home_H1 className="font-alatsi font-bold">{title}</Home_H1>
            <H4 className="mb-[24px] max-w-[1310px] pt-[10px] font-jakarta">
              {description}
            </H4>
          </div>
        </Container>
    </>
  );
}
