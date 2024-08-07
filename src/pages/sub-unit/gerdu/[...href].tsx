import { ArticleGerdu, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "pesona-gerdu",
    "video-profil-pogalan",
    "pembayaran-digital-qris",
    "peta-penggunaan-lahan",
    "serah-terima-papan-informasi",
    "pembuatan-jamu-cegah-stunting",
    "peta-persebaran-umkm",
    "pencegahan-stunting-dan-gizi-ikan",
    "edukasi-mpasi",
    "pembuatan-pupuk-organik-cair",
    "analisis-destinasi-wisata",
  ];
  const paths = routes.map((route) => {
    return { params: { href: route.split("/") } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  return { props: { href: params.href } };
}

export default function GerduArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Pogalan 2 - Gerdu</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleGerdu href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
