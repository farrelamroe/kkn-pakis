import {
  ArrowBack,
  Card,
  Container,
  H1,
  H3,
  SubunitHero,
  dataPucung,
} from "@/components";

export function Pucung() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitHero
        image="/pucung/pucung-hero.png"
        title={
          <>
            Sub Unit Pogalan 1
            <br />
            Dusun Pucung
          </>
        }
        description=""
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Project!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <div className="mb-[100px] mt-[48px] grid gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {dataPucung.map(({ image, title, href }: any) => {
            return (
              <>
                <a href={`/sub-unit/pucung/${href}`} key={title}>
                  <Card image={image} title={title} />
                </a>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}
