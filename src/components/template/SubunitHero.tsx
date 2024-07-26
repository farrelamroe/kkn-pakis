import { H1, H4 } from "@/components";

export function SubunitHero(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <div
        className="mx-[50px] mb-[41px] mt-[137px] h-[75vh] w-[calc(100%-100px)] rounded-[24px] text-white"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="relative top-[50%]">
          <H1 className="font-alatsi pl-[54px] font-bold">
            {title}
          </H1>
          <H4 className="max-w-[661px] pb-[72px] pl-[54px] pt-[20px] font-jakarta">
            {description}
          </H4>
        </div>
      </div>
    </>
  );
}
