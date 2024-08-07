import { Pucung, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function PucungPage() {
  return (
    <>
      <Head>
        <title>Pogalan 1 - Pucung</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Pucung />
        <Footer />
      </main>
    </>
  );
}
