import {
  Container,
  H1,
  H3,
  MainSubunitHero,
  SubunitCard,
  dataSubunit,
} from "@/components";

export function Subunit() {
  return (
    <>
      <MainSubunitHero
        image="/hero.png"
        title="Sub Unit"
        description=""
      />
      <Container className="pt-[101px] font-jakarta">
        <H1 className="text-center font-bold">Let’s See Our Sub-Unit!</H1>
        <H3 className="pt-[24px] text-center">
          Berikut adalah Sub-Unit dari Melukis Pakis di Desa Pogalan dan
          Ketundan
        </H3>
        <div className="mb-[100px] mt-[48px] grid grid-cols-1 gap-x-[28px] gap-y-[40px] sm:grid-cols-2 xl:grid-cols-4">
          {dataSubunit.map(({ image, title, href }: any) => {
            return (
              <>
                <a href={`/sub-unit/${href}`} key={title}>
                  <SubunitCard image={image} title={title} />
                </a>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}
