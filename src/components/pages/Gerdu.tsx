import {
  Card,
  Container,
  H1,
  H3,
  SubunitKlasterHero,
  Text,
  dataGerdu,
  ArrowBack,
} from "@/components";
import Image from "next/image";

export function Gerdu() {
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/gerdu/hero.jpg"
        title={
          <>
            Sub Unit Pogalan 2
            <br />
            Dusun Gerdu
          </>
        }
        description=""
      />
      <Container className="mt-[101px] font-jakarta">
        <H1 className="font-bold">Let’s See Our Sub Unit Gerdu!</H1>
        <H3 className="pt-[24px]">
          The rise of RESTful APIs has been met by a rise in tools for creating,
          testing, and blablabla
        </H3>

        <div className="mb-[100px] mt-[48px] grid gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {dataGerdu.map(({ image, title, href }: any) => {
            return (
              <>
                <a href={`/sub-unit/gerdu/${href}`} key={title}>
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
