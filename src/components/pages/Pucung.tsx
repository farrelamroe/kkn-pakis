import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataPucung,
} from "@/components";

export function Pucung() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/pucung/hero.jpg"
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
        <H1 className="font-bold">Let’s See Our Sub Unit Pucung!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <Search items={dataPucung} routeTo="sub-unit/pucung" />
      </Container>
    </>
  );
}
