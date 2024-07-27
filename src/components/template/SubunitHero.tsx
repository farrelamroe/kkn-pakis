import { H1, H4 } from "@/components";

export function SubunitHero(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <div
        className="mx-[50px] mb-[41px] mt-[28px] h-[75vh] w-[calc(100%-100px)] rounded-[24px]"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="relative top-[35%] xs:top-[40%] lg:top-[50%] px-[20px] lg:px-[54px]">
          <H1 className=" font-alatsi font-bold text-primary">{title}</H1>
          <H4 className="max-w-[661px] pb-[72px] pt-[20px] font-jakarta text-white">
            {description}
          </H4>
        </div>
      </div>
    </>
  );
}
