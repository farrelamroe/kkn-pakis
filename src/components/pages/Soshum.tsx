import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
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
        image="/soshum/hero.png"
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

        <Search items={dataSoshum} routeTo="klaster/soshum" />
      </Container>
    </>
  );
}
