import { ArticleSemimpen, ContainerArticle, Navbar } from "@/components";
import Head from "next/head";
import Image from "next/image";

export async function getStaticPaths() {
  const routes = ["profil-dusun-semimpen"];
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

export default function SemimpenArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Ketundan 2 - Semimpen</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleSemimpen href={href} />
      </ContainerArticle>
    </>
  );
}
