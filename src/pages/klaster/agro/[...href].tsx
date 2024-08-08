import { ArticleAgro, ContainerArticle, Footer, Navbar } from "@/components";
import Head from "next/head";

export async function getStaticPaths() {
  const routes = [
    "mengenal-ikan",
    "pemanfaatan-limbah-sayur",
    "penanaman-tanaman-refugia",
    "gerakan-minum-susu",
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

export default function AgroArticle({ href }: any) {
  return (
    <>
      <Head>
        <title>Klaster Agro</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <Navbar />
      <ContainerArticle>
        <ArticleAgro href={href} />
      </ContainerArticle>
      <Footer />
    </>
  );
}
