import { ArticleSemampiran, ContainerArticle, Navbar } from "@/components";
import Head from "next/head";
import Image from "next/image";

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

export default function SemampiranArticleSemampiran({ href }: any) {
  return (
    <>
      <Head>
        <title>Ketundan 1 - Semampiran</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleSemampiran href={href} />
      </ContainerArticle>
    </>
  );
}
