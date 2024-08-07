import { Semimpen, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function SemimpenPage() {
  return (
    <>
      <Head>
        <title>Ketundan 2 - Semimpen</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Semimpen />
        <Footer />
      </main>
    </>
  );
}
