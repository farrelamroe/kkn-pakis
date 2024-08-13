/* eslint-disable @next/next/no-html-link-for-pages */
import { Container, H5, Text } from "@/components";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container className="rounded-t-[20px] bg-secondary font-jakarta text-white">
        <div className="mb-[26.75px] mt-[70px] flex h-full w-full flex-col items-start justify-start gap-y-[32px] lg:flex-row lg:justify-between">
          <div
            className="flex flex-col items-start gap-y-[16px]"
            data-aos="fade-right"
          >
            <div className="flex flex-row justify-between gap-x-[12px]">
              <img
                src="/logo-ugm.png"
                alt="image"
                height={1000}
                width={1000}
                className="w-[57px]"
              />
              <img
                src="/logo-kkn.png"
                alt="image"
                height={1000}
                width={1000}
                className="w-[57px]"
              />
            </div>
            <div className="flex flex-row items-center gap-x-[10px]">
              <img
                src="/logo-pakis.png"
                alt="image"
                height={1000}
                width={1000}
                className="w-[44px]"
              />
              <H5 className="font-jakarta">
                Melukis
                <br />
                Pakis
              </H5>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start gap-x-[100px] gap-y-[32px]">
            <div className="flex flex-col gap-y-[17px]" data-aos="fade-left">
              <Text size="lg" className="font-jakarta font-bold">
                Klaster
              </Text>
              <div className="flex flex-col gap-y-[5px]">
                <a href="/klaster/saintek">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Saintek
                  </Text>
                </a>
                <a href="/klaster/soshum">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Soshum
                  </Text>
                </a>
                <a href="/klaster/agro">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Agro
                  </Text>
                </a>
                <a href="/klaster/medika">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Medika
                  </Text>
                </a>
              </div>
            </div>
            <div
              className="flex flex-col gap-y-[17px]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Text size="lg" className="font-jakarta font-bold">
                Sub Unit
              </Text>
              <div className="flex flex-col gap-y-[5px]">
                <a href="/sub-unit/pucung">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Pogalan 1
                  </Text>
                </a>
                <a href="/sub-unit/gerdu">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Pogalan 2
                  </Text>
                </a>
                <a href="/sub-unit/semampiran">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Ketundan 1
                  </Text>
                </a>
                <a href="/sub-unit/semimpen">
                  <Text
                    size="lg"
                    className="underline-animation duration-300 hover:font-bold"
                  >
                    Ketundan 2
                  </Text>
                </a>
              </div>
            </div>
            <div
              className="flex flex-col gap-y-[17px]"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <Text size="lg" className="font-jakarta font-bold">
                Kontak Kami
              </Text>
              <div className="flex flex-row gap-x-[9.33px]">
                <a
                  href="https://www.instagram.com/melukis.pakis/"
                  className="socialContainer containerOne"
                >
                  <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@melukispakis"
                  className="socialContainer containerTwo"
                >
                  <svg
                    className="socialSvg tiktokSvg largeIcon"
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Tiktok</title>
                    <g
                      id="Icon/Social/tiktok-white"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
                        id="Fill-1"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  className="socialContainer containerThree"
                  href="mailto:kknpakis2023@gmail.com"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="socialSvg whatsappSvg"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"></path>
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Text size="md" className="mb-[70px]">
          Copyright 2024 Melukis Pakis
        </Text>
      </Container>
    </>
  );
}
