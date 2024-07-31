import {
  ArticleSemimpen,
  ContainerArticle,
  Footer,
  Navbar,
} from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = ["pesona-semimpen"];
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
      <Footer />
    </>
  );
}
