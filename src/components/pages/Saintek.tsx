import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataSaintek,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Saintek() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/saintek/hero.png"
        title={
          <>
            Klaster
            <br />
            Saintek
          </>
        }
        description="Klaster Saintek pada KKN PPM UGM fokus pada penerapan ilmu sains dan teknologi untuk mengatasi masalah dan meningkatkan kualitas hidup masyarakat."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Klaster Saintek!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja unggulan yang telah dilaksanakan oleh klaster
            saintek
          </H3>

          <Search items={dataSaintek} routeTo="klaster/saintek" />
        </Container>
      </div>
    </>
  );
}
