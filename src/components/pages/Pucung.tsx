import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataPucung,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Pucung() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
        description="Sub unit Pogalan 1 (Dusun Pucung) pada KKN PPM UGM fokus pada pengembangan masyarakat melalui berbagai program pemberdayaan, pendidikan, dan infrastruktur lokal."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Sub Unit Pucung!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja yang telah dilaksanakan oleh sub unit Pogalan 1
          </H3>

          <Search items={dataPucung} routeTo="sub-unit/pucung" />
        </Container>
      </div>
    </>
  );
}
