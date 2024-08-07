import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataSoshum,
} from "@/components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Soshum() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/soshum/hero.png"
        title={
          <>
            Klaster
            <br />
            Soshum
          </>
        }
        description="Klaster Soshum pada KKN PPM UGM melibatkan mahasiswa dari bidang sosial humaniora untuk menerapkan ilmu dalam pemberdayaan masyarakat dan pengembangan sosial-ekonomi di lokasi KKN."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Klaster Soshum!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja yang telah dilaksanakan oleh klaster
            soshum
          </H3>

          <Search items={dataSoshum} routeTo="klaster/soshum" />
        </Container>
      </div>
    </>
  );
}
