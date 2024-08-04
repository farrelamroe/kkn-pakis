import {
  Container,
  H1,
  H3,
  SubunitKlasterHero,
  dataGerdu,
  ArrowBack,
  Search,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Gerdu() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Sub Unit Gerdu!</H1>
          <H3 className="pt-[24px]">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and blablabla
          </H3>

          <Search items={dataGerdu} routeTo="sub-unit/gerdu" />
        </Container>
      </div>
    </>
  );
}
