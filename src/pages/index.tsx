import { Navbar } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KKN-PPN UGM Pakis 2024</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
