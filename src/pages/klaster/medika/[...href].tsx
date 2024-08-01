import { ArticleMedika, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "pertemuan-dengan-kepala-dusun",
    "diskusi-dengan-kepala-dusun",
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

export default function MedikaArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Klaster Medika</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleMedika href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
