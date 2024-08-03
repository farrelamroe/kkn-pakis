import {
  ArrowBack,
  Card,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataSaintek,
} from "@/components";

export function Saintek() {
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
            Saintek
          </>
        }
        description="Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja ajsdbjaadh aidshaldhaldhalksdha akhsdald. Ini penjelasan singkat dari sub unit blablabla ajsdoajds oajsadjao aisodaodja."
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Klaster Saintek!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <Search items={dataSaintek} routeTo="klaster/saintek" />
      </Container>
    </>
  );
}
