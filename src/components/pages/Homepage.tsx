import { Container, MainHero, H1, H4, P } from "@/components";
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
        description="Dolor magna in occaecat sint elit Lorem eiusmod dolor amet occaecat ipsum. Proident aute ipsum laborum sunt consequat ea ut duis quis et esse voluptate. Cillum aliquip excepteur ipsum Lorem ea nostrud aliquip laborum in labore exercitation"
      />
      {/* Pak Dimas */}
      <Container>
        <div
          className="relative my-[50px] h-full rounded-[54px] bg-[#D04736] px-[100px]"
          data-aos="zoom-in"
        >
          <div className="relative flex h-full flex-col items-center justify-between gap-[70px] pb-[65px] pt-[103px] lg:flex-row">
            <div
              className="relative max-h-[350px] min-h-[300px] w-[390px] overflow-hidden rounded-b-[25px] rounded-t-[195px] border-[10px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <Image
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
