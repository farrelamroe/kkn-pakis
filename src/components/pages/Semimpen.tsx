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
        description="Sub unit Ketundan 2 (Dusun Semimpen) dalam KKN PPM UGM berfokus pada pemberdayaan masyarakat, pengembangan infrastruktur, dan peningkatan layanan kesehatan di dusun tersebut."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Sub Unit Semimpen!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja yang telah dilaksanakan oleh sub unit
            Ketundan 2
          </H3>

          <Search items={dataSemimpen} routeTo="sub-unit/semimpen" />
        </Container>
      </div>
    </>
  );
}
