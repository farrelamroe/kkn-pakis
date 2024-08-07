import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataAgro,
} from "@/components";

export function Agro() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/agro/hero.png"
        title={
          <>
            Klaster
            <br />
            Agro
          </>
        }
        description="Klaster Agro pada KKN PPM UGM fokus pada pengembangan sektor pertanian, perkebunan, dan peternakan melalui pemberdayaan masyarakat dan inovasi teknologi pertanian."
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Klaster Agro!</H1>
        <H3 className="pt-[24px]">
          Berikut adalah program kerja yang telah dilaksanakan oleh klaster agro
        </H3>

        <Search items={dataAgro} routeTo="klaster/agro" />
      </Container>
    </>
  );
}
