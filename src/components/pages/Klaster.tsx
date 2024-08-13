import {
  Container,
  H1,
  H3,
  Loader,
  MainSubunitKlasterHero,
  SubunitKlasterCard,
  dataKlaster,
} from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function Klaster() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cle
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return (
      <>
        <div className="block">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <>
      <MainSubunitKlasterHero
        image="/hero.png"
        title="Klaster"
        description="Klaster pada KKN PPM UGM mengacu pada pembagian kelompok mahasiswa berdasarkan disiplin ilmu untuk memaksimalkan dampak pengabdian masyarakat."
      />
      <div data-aos="fade-up">
        <Container className="pt-[101px] font-jakarta">
          <H1 className="text-center font-bold">Let’s See Our Klaster!</H1>
          <H3 className="pt-[24px] text-center">
            Berikut adalah Klaster dari Melukis Pakis di Desa Pogalan dan
            Ketundan
          </H3>
          <div
            className="mb-[100px] mt-[48px] grid grid-cols-1 gap-x-[28px] gap-y-[40px] sm:grid-cols-2 xl:grid-cols-4"
            data-aos="fade-up"
          >
            {dataKlaster.map(({ image, title, href, description }: any) => {
              return (
                <>
                  <a href={`/klaster/${href}`} key={title}>
                    <SubunitKlasterCard
                      image={image}
                      title={title}
                      description={description}
                    />
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
