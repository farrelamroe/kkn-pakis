import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataSemimpen,
} from "@/components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Semimpen() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/semimpen/hero.jpg"
        title={
          <>
            Sub Unit Ketundan 2
            <br />
            Dusun Semimpen
          </>
        }
        description=""
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Sub Unit Semimpen!</H1>
          <H3 className="pt-[24px]">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and blablabla
          </H3>

          <Search items={dataSemimpen} routeTo="sub-unit/semimpen" />
        </Container>
      </div>
    </>
  );
}
