import { ArticleSoshum, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "dompet-digital",
    "pelatihan-akuntansi",
    "aset-dusun",
    "analisa-wisata",
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

export default function SoshumArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Klaster Soshum</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleSoshum href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
