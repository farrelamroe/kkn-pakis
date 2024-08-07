import {
  ArrowBack,
  Container,
  H1,
  H3,
  Search,
  SubunitKlasterHero,
  dataMedika,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Medika() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ml-[50px]">
        <ArrowBack />
      </div>
      <SubunitKlasterHero
        image="/medika/hero.png"
        title={
          <>
            Klaster
            <br />
            Medika
          </>
        }
        description="Klaster Medika pada KKN PPM UGM berfokus pada kesehatan masyarakat, dengan kegiatan seperti penyuluhan kesehatan, pemeriksaan medis, dan peningkatan fasilitas kesehatan lokal."
      />
      <div data-aos="fade-up">
        <Container className="mt-[101px] font-jakarta">
          <H1 className="font-bold">Let’s See Our Klaster Medika!</H1>
          <H3 className="pt-[24px]">
            Berikut adalah program kerja yang telah dilaksanakan oleh klaster
            medika
          </H3>

          <Search items={dataMedika} routeTo="klaster/medika" />
        </Container>
      </div>
    </>
  );
}
