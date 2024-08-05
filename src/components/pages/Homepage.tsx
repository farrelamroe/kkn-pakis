import {
  Container,
  MainHero,
  H1,
  H5,
  H4,
  P,
  dataBeranda,
  Counter,
} from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <MainHero
        image="/foto-pakis-expand.png"
        title={<>TIM KKN MELUKIS PAKIS 2024</>}
        description="Kecamatan Pakis terletak di Kabupaten Magelang, Jawa Tengah, Indonesia. Kecamatan ini dikenal dengan keindahan alamnya, yang mencakup area pegunungan dan lahan pertanian yang subur. Pakis memiliki berbagai potensi wisata alam dan budaya, termasuk situs bersejarah dan pemandangan alam yang menarik. Sebagai salah satu daerah pedesaan, Pakis juga berfokus pada pertanian, dengan tanaman utama seperti padi dan sayuran. Kecamatan ini berperan penting dalam mendukung ekonomi lokal melalui kegiatan pertanian dan pariwisata. Pakis merupakan bagian dari Magelang yang kaya akan budaya dan tradisi lokal."
      />
      <Container>
        <div
          className="relative my-[50px] h-full rounded-[54px] bg-secondary"
          data-aos="zoom-in"
        >
          <div className="relative mx-[100px] flex flex-col items-center justify-between gap-[40px] py-[65px] lg:flex-row">
            <img
              src="/peta-pakis.png"
              width={1000}
              height={1000}
              alt="Peta pakis"
              className="h-full lg:max-w-[400px] xl:max-w-[615px]"
              data-aos="fade-right"
              data-aos-delay="500"
            />
            <div className="flex flex-col items-center gap-y-[36px]">
              {dataBeranda.map(({ text, image, end }, i) => {
                return (
                  <>
                    <div
                      className="flex w-full flex-row items-center gap-x-[9px] rounded-[16px] bg-red px-[35px] py-[33px]"
                      key={i}
                      data-aos="fade-left"
                    >
                      <img
                        src={image}
                        width={1000}
                        height={1000}
                        alt="Peta pakis"
                        className="h-fit max-w-[51px]"
                      />
                      <div className="flex flex-col items-start font-jakarta text-white">
                        <H5>{text}</H5>
                        <Counter end={end} duration={2000} />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div
          className="relative my-[50px] h-full rounded-[54px] bg-red px-[100px]"
          data-aos="zoom-in"
        >
          <div className="relative flex h-full flex-col items-center justify-between gap-[70px] pb-[65px] pt-[103px] lg:flex-row">
            <div
              className="relative max-h-[350px] min-h-[300px] w-[390px] overflow-hidden rounded-b-[25px] rounded-t-[195px] border-[10px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img
                src="/pak-dimas.png"
                width={1000}
                height={1000}
                alt="Pak Dimas"
                className="relative lg:-bottom-20 xl:bottom-0"
              />
            </div>
            <div
              className="flex flex-col gap-y-[20px]"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <P className="font-jakarta text-[48px] leading-[57.6px] text-white lg:font-[52px] lg:leading-[67.6px]">
                Dimas Hand Vidya Paradhipta, S.Pt., M.Sc., Ph.D.
              </P>
              <P className="font-jakarta text-[24px] leading-[38.4px] text-white lg:text-[30px] lg:leading-[42px]">
                Dosen Pembimbing Lapangan Tim Melukis Pakis 2024
              </P>
            </div>
          </div>
        </div>
      </Container>
      <div data-aos="fade-up">
        <Container className="my-[100px] text-center font-jakarta">
          <H1 className="font-bold">Video Profil Desa Pogalan</H1>
          <H4>
            Salah satu program kerja di Pogalan 1 (Desa Gerdu) membuat video
            profil tentang Desa Pogalan. Simak Yuk!
          </H4>
          <iframe
            src="https://www.youtube.com/embed/09788H9vnDs?si=MfiMKWcKjcUPeB9q"
            title="YouTube video player"
            sandbox="allow-same-origin allow-scripts allow-popups"
            className="mt-[40px] aspect-video h-full max-h-[594px] w-full rounded-[8px]"
            allowFullScreen
          />
        </Container>
      </div>
    </>
  );
}
