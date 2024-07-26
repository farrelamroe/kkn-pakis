import { Card, Container, H1, H3, SubunitHero, dataPucung } from "@/components";

export function Pucung() {
  return (
    <>
      <SubunitHero
        image="/hero.png"
        title={
          <>
            Pogalan 1
            <br />
            Pucung
          </>
        }
        description="Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja ajsdbjaadh aidshaldhaldhalksdha akhsdald. Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja."
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Project!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <div className="mt-[48px] grid grid-cols-4 gap-x-[28px] gap-y-[40px]">
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
