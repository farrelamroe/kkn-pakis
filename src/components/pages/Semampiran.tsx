import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataSemampiran,
} from "@/components";

export function Semampiran() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/semampiran/hero.jpg"
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

        <Search items={dataSemampiran} routeTo="sub-unit/semampiran" />
      </Container>
    </>
  );
}
