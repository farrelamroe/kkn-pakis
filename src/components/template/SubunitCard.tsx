import { H2 } from "@/components";

// ini juga bisa dipakai untuk cluster

export function SubunitCard(props: any) {
  const { image, title } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full max-w-full rounded-[8px] text-white duration-300 hover:scale-110 xs:max-h-[580px]"
    >
      <H2 className="mx-auto block pb-[37px] pt-[200px] text-center font-alatsi xs:pt-[491px]">
        {title}
      </H2>
    </div>
  );
}
