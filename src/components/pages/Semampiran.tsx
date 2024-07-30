import {
  ArrowBack,
  Card,
  Container,
  H1,
  H3,
  SubunitHero,
  dataSemampiran,
} from "@/components";

export function Semampiran() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitHero
        image="/hero.png"
        title={
          <>
            Ketundan 1
            <br />
            Semampiran
          </>
        }
        description="Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja ajsdbjaadh aidshaldhaldhalksdha akhsdald. Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja."
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Sub Unit Semampiran!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <div className="mb-[100px] mt-[48px] grid gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {dataSemampiran.map(({ image, title, href }: any) => {
            return (
              <>
                <a href={`/sub-unit/semampiran/${href}`} key={title}>
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
