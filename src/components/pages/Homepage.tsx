import { Container, H3, H2, MainHero } from "@/components";
import { Home_Name } from "../text/Home_Name";
import { Home_Title } from "../text/Home_Title";
import Image from "next/image";

export function Homepage() {
  return (
    <>
      <MainHero
        image="/foto-pakis-expand.png"
        title={
          <>
            TIM KKN MELUKIS PAKIS 2024
          </>
        }
        description="Dolor magna in occaecat sint elit Lorem eiusmod dolor amet occaecat ipsum. Proident aute ipsum laborum sunt consequat ea ut duis quis et esse voluptate. Cillum aliquip excepteur ipsum Lorem ea nostrud aliquip laborum in labore exercitation"
      />
      {/* Pak Dimas */}
      <Container>
        <div className="my-7">
          <Container className="bg-[#D04736] rounded-[54px] lg:h-[468px]">
            <div className="flex flex-col lg:flex-row justify-between items-center h-full gap-x-[70px]">
              <div className="w-[390px] h-[300px] bg-gradient-to-tr from-[#F2594B] to-[#F2DEDC] border-[10px] border-white rounded-t-[195px] rounded-b-[25px]">
                <Image
                  src="/pak-dimas.png"
                  width={1000}
                  height={1000}
                  alt="Pak Dimas"
                  className="relative -top-[73px]"
                />
              </div>
              <div className="flex flex-col">
                <Home_Name className="font-bold font-jakarta text-white">Dimas Hand Vidya Paradhipta, S.Pt., M.Sc., Ph.D.</Home_Name>
                <Home_Title className="font-jakarta text-white">Dosen Pembimbing Lapangan Tim Melukis Pakis 2024</Home_Title>
              </div>
            </div>
          </Container>
        </div>
      </Container>

      {/* Tampilan Video Profil Pogalan */}
      <Container className="h-[946px]">
        <div className="my-[100px]">
          <H2 className="font-bold font-jakarta lg:text-[48px] text-center">Video Profil Desa Pogalan</H2>
          <H3 className="font-jakarta mt-[16px] lg:text-lg text-center">Salah satu program kerja di Pogalan 1 (Desa Gerdu) membuat video profil tentang Desa Pogalan. Simak Yuk!</H3>
          <div className="h-[594px] mt-[24px] rounded-lg flex justify-center">
            <iframe
            className="rounded-lg shadow-[0_0px_35px_#D04736]"
            width="1300"
            height="570"
            src="https://www.youtube.com/embed/yjnSX_iUFVo?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}
