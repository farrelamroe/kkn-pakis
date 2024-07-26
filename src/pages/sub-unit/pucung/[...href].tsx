import { Article, ContainerArticle, Navbar } from "@/components";
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

export default function PucungArticle({ href }: any) {
  return (
    <>
      <Navbar />
      <ContainerArticle>
        <Article href={href} />
      </ContainerArticle>
    </>
  );
}
