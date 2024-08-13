import { H2 } from "@/components";

// ini juga bisa dipakai untuk cluster

export function SubunitKlasterCard(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <H2 className="mx-auto block pb-[37px] pt-[200px] text-center font-alatsi text-white xs:pt-[491px]">
          {title}
        </H2>
        <div className="card__content font-jakarta">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </>
  );
}
