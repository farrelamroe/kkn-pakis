import { ArticleGerdu, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = ["pesona-gerdu"];
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
