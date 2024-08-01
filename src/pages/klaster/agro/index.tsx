import { Agro, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function AgroPage() {
  return (
    <>
      <Head>
        <title>Klaster Agro</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Agro />
        <Footer />
      </main>
    </>
  );
}
