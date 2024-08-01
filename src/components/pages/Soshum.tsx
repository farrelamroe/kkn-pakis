import {
  ArrowBack,
  Card,
  Container,
  H1,
  H3,
  SubunitKlasterHero,
  dataSoshum,
} from "@/components";

export function Soshum() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/semampiran/semampiran-hero.png"
        title={
          <>
            Klaster
            <br />
            Soshum
          </>
        }
        description="Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja ajsdbjaadh aidshaldhaldhalksdha akhsdald. Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja."
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Klaster Soshum!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <div className="mb-[100px] mt-[48px] grid gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {dataSoshum.map(({ image, title, href }: any) => {
            return (
              <>
                <a href={`/klaster/soshum/${href}`} key={title}>
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
