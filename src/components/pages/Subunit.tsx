import {
  Container,
  H1,
  H3,
  MainSubunitKlasterHero,
  SubunitKlasterCard,
  dataSubunit,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Subunit() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <MainSubunitKlasterHero
        image="/hero.png"
        title="Sub Unit"
        description="Sub-Unit pada KKN PPM UGM adalah kelompok kecil mahasiswa yang bekerja sama dalam proyek pengabdian masyarakat untuk mencapai tujuan spesifik di lokasi KKN."
      />
      <div data-aos="fade-up">
        <Container className="pt-[101px] font-jakarta">
          <H1 className="text-center font-bold">Let’s See Our Sub-Unit!</H1>
          <H3 className="pt-[24px] text-center">
            Berikut adalah Sub-Unit dari Melukis Pakis di Desa Pogalan dan
            Ketundan
          </H3>
          <div
            className="mb-[100px] mt-[48px] grid grid-cols-1 gap-x-[28px] gap-y-[40px] sm:grid-cols-2 xl:grid-cols-4"
            data-aos="fade-up"
          >
            {dataSubunit.map(({ image, title, href }: any) => {
              return (
                <>
                  <a href={`/sub-unit/${href}`} key={title}>
                    <SubunitKlasterCard image={image} title={title} />
                  </a>
                </>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
