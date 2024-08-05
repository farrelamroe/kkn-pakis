import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataSemampiran,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Semampiran() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/semampiran/hero.jpg"
        title={
          <>
            Ketundan 1
            <br />
            Semampiran
          </>
        }
        description="Sub unit Ketundan 1 (Dusun Semampiran) pada KKN PPM UGM fokus pada pengembangan masyarakat lokal melalui program pemberdayaan ekonomi, pendidikan, dan kesehatan berbasis kebutuhan dusun."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Sub Unit Semampiran!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja yang telah dilaksanakan oleh sub unit
            Ketundan 1
          </H3>

          <Search items={dataSemampiran} routeTo="sub-unit/semampiran" />
        </Container>
      </div>
    </>
  );
}
