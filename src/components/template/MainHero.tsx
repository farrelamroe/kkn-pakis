import { Button, Container, H1, H3, H4 } from "@/components";
import Image from "next/image";

export function MainHero(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <Image
        src={image} alt="" height={10000} width={10000}
        className="mx-[50px] mb-[55px] mt-[120px] h-[490px] w-[calc(100%-100px)] rounded-[24px] text-white object-cover object-center"
      />
        <Container>
          <div className="relative top-[40%] xs:top-[50%] lg:top-[30%]">
            <H1 className="font-alatsi font-bold">{title}</H1>
            <H4 className="mb-[64px] max-w-[1310px] mt-[20px] font-jakarta">
              {description}
            </H4>
          </div>
        </Container>
    </>
  );
}
