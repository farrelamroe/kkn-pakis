import { Button, Container, H1, H3 } from "@/components";

export function MainHero(props: any) {
  const { image, title, description } = props;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        className="h-screen w-full text-white"
      >
        <Container>
          <div className="relative top-[40%] xs:top-[50%] lg:top-[30%]">
            <H1 className="font-alatsi font-bold">{title}</H1>
            <H3 className="mb-[24px] max-w-[661px] pt-[40px] font-jakarta">
              {description}
            </H3>
            <Button
              size="lg"
              text={["Sub Unit", "Klaster"]}
              color="secondary"
              buttonCount={2}
              href={["/sub-unit", "/klaster"]}
              className="mr-5"
              back={false}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
