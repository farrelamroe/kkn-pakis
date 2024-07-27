import { H2 } from "@/components";

// ini juga bisa dipakai untuk cluster

export function SubunitCard(props: any) {
  const { image, title } = props;
  return (
    <div
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      className="h-full xs:max-h-[580px] w-full max-w-full rounded-[8px] text-white duration-300 hover:scale-110"
    >
      <H2 className="mx-auto block pb-[37px] pt-[200px] xs:pt-[491px] text-center font-alatsi">
        {title}
      </H2>
    </div>
  );
}
