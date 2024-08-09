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
                className="relative lg:-bottom-20 lg:h-[390px] xl:bottom-0"
              />
            </div>
            <div
              className="flex flex-col gap-y-[20px]"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <P className="font-jakarta text-[48px] font-bold leading-[57.6px] text-white lg:font-[52px] lg:leading-[67.6px]">
                Dimas Hand Vidya Paradhipta, S.Pt., M.Sc., Ph.D.
              </P>
              <P className="font-jakarta text-[24px] leading-[38.4px] text-white lg:text-[30px] lg:leading-[42px]">
                Dosen Pembimbing Lapangan Tim Melukis Pakis 2024
              </P>
            </div>
          </div>
        </div>
      </Container>

      {/* Meet Our Developer */}
      <Container className="my-[50px] font-jakarta">
        <H1 className="font-bold" data-aos="fade-left" data-aos-delay="500">
          Meet Our Developer
        </H1>
        <div className="my-12 grid grid-cols-1 items-center gap-[24px] lg:grid-cols-2 xl:grid-cols-4">
          {/* tasya*/}
          <div
            className="relative flex h-full max-h-[640px] w-full min-w-[250px] max-w-[300px] flex-col justify-center rounded-[24px] bg-red pt-12 align-middle"
            data-aos="zoom-in"
          >
            {/* orang */}
            <img
              src="/tasya.png"
              width={1000}
              height={1000}
              alt="Tasya"
              className="absolute left-1/2 z-10 mt-[50px] -translate-x-1/2 -translate-y-1/2 transform lg:h-[295px] lg:w-[205px]"
            />
            <div className="flex flex-col items-center">
              <div className="relative max-h-[240px] min-h-[220px] w-[205px] overflow-hidden rounded-b-[36px] rounded-t-[195px] border-[8px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"></div>
              {/* Nama */}
              <div className="my-2 flex flex-col">
                <P className="text-center font-jakarta text-[20px] font-bold leading-[-1%] text-white lg:text-[28px]">
                  Saadah Mardatillah
                </P>
                <P className="text-center font-jakarta text-[24px] leading-[1.3] text-white lg:text-[20px]">
                  Project Manager, Frontend Developer
                </P>
              </div>
              {/* Sosmed */}
              <div className="mt-1 flex flex-row gap-1">
                <a
                  href="https://github.com/saadahmardatillah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github-logo.png"
                    width={1000}
                    height={1000}
                    alt="Logo Github"
                    className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/saadahmardatillah/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin-logo.png"
                    width={1000}
                    height={1000}
                    alt="Logo Linkedin"
                    className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* farel */}
          <div
            className="relative flex h-[480px] w-full min-w-[250px] max-w-[300px] flex-col justify-center rounded-[24px] bg-red pt-12 align-middle"
            data-aos="zoom-in"
          >
            {/* orang */}
            <img
              src="/farel.png"
              width={1000}
              height={1000}
              alt="Farel"
              className="absolute left-1/2 z-10 mt-[50px] -translate-x-1/2 -translate-y-1/2 transform lg:h-[295px] lg:w-[205px]"
            />
            <div className="flex flex-col items-center">
              <div className="relative max-h-[240px] min-h-[220px] w-[205px] overflow-hidden rounded-b-[36px] rounded-t-[195px] border-[8px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"></div>
              {/* Nama */}
              <div className="my-2 flex flex-col">
                <P className="text-center font-jakarta text-[20px] font-bold leading-[-1%] text-white lg:text-[28px]">
                  Farrel Amroe Azhari
                </P>
                <P className="text-center font-jakarta text-[24px] leading-[1.3] text-white lg:text-[20px]">
                  Frontend Developer, UI/UX Designer
                </P>
              </div>
              {/* Sosmed */}
              <div className="mt-1 flex flex-row gap-1">
                <a
                  href="https://github.com/farrelamroe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github-logo.png"
                    width={1000}
                    height={1000}
                    alt="Logo Github"
                    className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/farrel-amroe-azhari-8b14b5217/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin-logo.png"
                    width={1000}
                    height={1000}
                    alt="Logo Linkedin"
                    className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* zaid */}
          <div
            className="relative flex h-[480px] w-full min-w-[250px] max-w-[300px] flex-col justify-center rounded-[24px] bg-red pt-12 align-middle"
            data-aos="zoom-in"
          >
            {/* orang */}
            <img
              src="/zaid.png"
              width={1000}
              height={1000}
              alt="Zaid"
              className="absolute left-1/2 z-10 mt-[50px] -translate-x-1/2 -translate-y-1/2 transform lg:h-[295px] lg:w-[205px]"
            />
            <div className="flex flex-col items-center">
              <div className="relative max-h-[240px] min-h-[220px] w-[205px] overflow-hidden rounded-b-[36px] rounded-t-[195px] border-[8px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"></div>
              {/* Nama */}
              <div className="my-2 flex flex-col">
                <P className="text-center font-jakarta text-[20px] font-bold leading-[-1%] text-white lg:text-[28px]">
                  Faris Zaidan Nafis
                </P>
                <P className="text-center font-jakarta text-[24px] leading-[1.3] text-white lg:text-[20px]">
                  UI/UX Designer, Frontend Developer
                </P>
              </div>
              {/* Sosmed */}
              <div className="mt-1 flex flex-row gap-1">
                <a
                  href="https://github.com/farisznafis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github-logo.png"
                    width={1000}
                    height={1000}
                    alt="Logo Github"
                    className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/farisznafis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin-logo.png"
                    width={1000}
                    height={1000}
                    alt="Logo Linkedin"
                    className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* lase */}
          <div
            className="relative flex h-[480px] w-full min-w-[250px] max-w-[300px] flex-col justify-center rounded-[24px] bg-red pt-12 align-middle"
            data-aos="zoom-in"
          >
            {/* orang */}
            <img
              src="/lase.png"
              width={1000}
              height={1000}
              alt="Tasya"
              className="absolute left-1/2 z-10 mt-[50px] -translate-x-1/2 -translate-y-1/2 transform lg:h-[295px] lg:w-[205px]"
            />
            <div className="flex flex-col items-center">
              <div className="relative max-h-[240px] min-h-[220px] w-[205px] overflow-hidden rounded-b-[36px] rounded-t-[195px] border-[8px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"></div>
              {/* Nama */}
              <div className="my-2 flex flex-col">
                <P className="text-center font-jakarta text-[20px] font-bold leading-[-1%] text-white lg:text-[28px]">
                  Gavriel F. Lase
                </P>
                <P className="text-center font-jakarta text-[24px] leading-[1.3] text-white lg:text-[20px]">
                  UX Writer
                  <br />
                  <br />
                </P>
              </div>
              {/* Sosmed */}
              <div className="mt-1 flex flex-row gap-1">
                <img
                  src="/github-logo.png"
                  width={1000}
                  height={1000}
                  alt="Logo Github"
                  className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                />
                <img
                  src="/linkedin-logo.png"
                  width={1000}
                  height={1000}
                  alt="Logo Linkedin"
                  className="relative lg:h-[40px] lg:w-[40px] xl:bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
