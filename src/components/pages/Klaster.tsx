import {
  Container,
  H1,
  H3,
  MainSubunitKlasterHero,
  SubunitKlasterCard,
  dataKlaster,
} from "@/components";

export function Klaster() {
  return (
    <>
      <MainSubunitKlasterHero
        image="/hero.png"
        title="Klaster"
        description=""
      />
      <Container className="pt-[101px] font-jakarta">
        <H1 className="text-center font-bold">Let’s See Our Klaster!</H1>
        <H3 className="pt-[24px] text-center">
          Berikut adalah Klaster dari Melukis Pakis di Desa Pogalan dan Ketundan
        </H3>
        <div className="mb-[100px] mt-[48px] grid grid-cols-1 gap-x-[28px] gap-y-[40px] sm:grid-cols-2 xl:grid-cols-4">
          {dataKlaster.map(({ image, title, href }: any) => {
            return (
              <>
                <a href={`/klaster/${href}`} key={title}>
                  <SubunitKlasterCard image={image} title={title} />
                </a>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}
