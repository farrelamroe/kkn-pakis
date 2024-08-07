import { Navbar, Klaster, Footer } from "@/components";
import Head from "next/head";

export default function KlasterPage() {
  return (
    <>
      <Head>
        <title>KKN-PPM UGM Pakis 2024</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Klaster />
        <Footer />
      </main>
    </>
  );
}
