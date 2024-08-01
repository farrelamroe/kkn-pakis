import { Container, H1, H3 } from "@/components";

export function MainSubunitKlasterHero(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        className="h-screen w-full text-white"
      >
        <Container>
          <div className="relative top-[40%] xs:top-[50%] lg:top-[40%]">
            <H1 className="font-alatsi font-bold">{title}</H1>
            <H3 className="max-w-[661px] pb-[130px] pt-[40px] font-jakarta">
              {description}
            </H3>
          </div>
        </Container>
      </div>
    </>
  );
}
