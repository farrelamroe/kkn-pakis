import {
  Container,
  MainHero,
  H1,
  H5,
  P,
  dataBeranda,
  dataDeveloper,
  Counter,
} from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Loader } from "../template/Loader";

export function Homepage() {
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
      <MainHero
        image="/foto-pakis-expand.png"
        title={<>TIM KKN MELUKIS PAKIS 2024</>}
        description="Kecamatan Pakis terletak di Kabupaten Magelang, Jawa Tengah, Indonesia. Kecamatan ini dikenal dengan keindahan alamnya, yang mencakup area pegunungan dan lahan pertanian yang subur. Pakis memiliki berbagai potensi wisata alam dan budaya, termasuk situs bersejarah dan pemandangan alam yang menarik. Sebagai salah satu daerah pedesaan, Pakis juga berfokus pada pertanian, dengan tanaman utama seperti padi dan sayuran. Kecamatan ini berperan penting dalam mendukung ekonomi lokal melalui kegiatan pertanian dan pariwisata. Pakis merupakan bagian dari Magelang yang kaya akan budaya dan tradisi lokal."
      />

      {/* Tentang Pakis */}
      <Container>
        <div
          className="relative my-[50px] h-full rounded-[54px] bg-secondary"
          data-aos="zoom-in"
        >
          <div className="relative mx-[100px] flex flex-col items-center justify-between gap-x-[24px] gap-y-[40px] py-[65px] lg:flex-row">
            <Image
              src="/peta-pakis.png"
              width={1000}
              height={1000}
              alt="Peta pakis"
              className="h-full min-w-[250px] lg:max-w-[400px] xl:max-w-[615px]"
              data-aos="fade-right"
              data-aos-delay="500"
            />
            <div className="flex flex-col items-center gap-y-[36px]">
              {dataBeranda.map(({ text, image, end }, i) => {
                return (
                  <>
                    <div
                      className="flex w-full flex-row items-center gap-x-[9px] rounded-[16px] bg-red px-[20px] py-[33px] lg:px-[35px]"
                      key={i}
                      data-aos="fade-left"
                    >
                      <Image
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

      {/* Pak Dimas */}
      <Container>
        <div
          className="relative my-[50px] h-full rounded-[54px] bg-red px-[100px]"
          data-aos="zoom-in"
        >
          <div className="relative flex h-full flex-col items-center justify-between gap-[70px] py-[65px] lg:flex-row">
            <div
              className="relative h-full max-h-[350px] w-full min-w-[200px] max-w-[300px] overflow-hidden rounded-b-[25px] rounded-t-[195px] border-[10px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <Image
                src="/pak-dimas.png"
                width={1000}
                height={1000}
                alt="Pak Dimas"
                className="relative lg:-bottom-0 lg:h-[390px] xl:bottom-0"
              />
            </div>
            <div
              className="flex flex-col gap-y-[20px]"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <P className="font-jakarta text-[36px] font-bold leading-[50px] text-white lg:font-[52px] lg:leading-[67.6px]">
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
        <div className="my-12 flex flex-row flex-wrap items-center justify-center gap-[24px]">
          {dataDeveloper.map(({ name, image, position, github, linkedin }) => {
            return (
              <>
                <div
                  className="cardDeveloper h-[525px] w-full max-w-[300px] rounded-[24px] bg-red p-[24px] lg:max-h-[481px]"
                  data-aos="zoom-in"
                >
                  <div className="cardDeveloper-info">
                    <div className="cardDeveloper-avatar relative max-h-[220] w-full max-w-[205px] overflow-hidden rounded-b-[25px] rounded-t-[195px] border-[10px] border-white bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC]">
                      <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="Foto Developer"
                        className="relative -bottom-[40px] max-h-[220px] object-cover lg:bottom-0"
                      />
                    </div>
                    <P className="h-[80px] text-center font-jakarta text-[20px] font-bold leading-[-1%] text-white lg:text-[28px]">
                      {name}
                    </P>
                    <P className="text-center font-jakarta text-[24px] leading-[1.3] text-white lg:text-[20px]">
                      {position}
                    </P>
                  </div>
                  <div className="cardDeveloper-social mt-1 flex flex-row justify-center gap-1 pb-[24px]">
                    {github !== null ? (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <section className="flex items-center justify-center">
                          <button className="from-gray-800 to-black group flex justify-center rounded-md bg-gradient-to-r p-2 font-semibold text-white drop-shadow-xl transition-all duration-500 hover:translate-y-3 hover:rounded-[50%] hover:from-[#331029] hover:to-[#310413]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 15 15"
                              className="w-[30px]"
                            >
                              <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                fill="currentColor"
                                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                              ></path>
                            </svg>
                            <span className="group-hover:text-gray-700 absolute opacity-0 duration-700 group-hover:-translate-y-10 group-hover:text-sm group-hover:opacity-100">
                              GitHub
                            </span>
                          </button>
                        </section>
                      </a>
                    ) : (
                      <></>
                    )}

                    {linkedin !== null ? (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <section className="flex items-center justify-center">
                          <button className="from-gray-800 group flex justify-center rounded-md p-2 font-semibold text-white drop-shadow-xl transition-all duration-500 hover:translate-y-3 hover:rounded-[50%] hover:bg-secondary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1.1em"
                              viewBox="0 0 512 512"
                              stroke-width="0"
                              fill="#FFFFFF"
                              className="h-[30px] w-[30px]"
                            >
                              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                            </svg>
                            <span className="group-hover:text-gray-700 absolute opacity-0 duration-700 group-hover:-translate-y-10 group-hover:text-sm group-hover:opacity-100">
                              Linkedin
                            </span>
                          </button>
                        </section>
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
}
