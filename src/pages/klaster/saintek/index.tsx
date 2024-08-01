import { Saintek, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function SaintekPage() {
  return (
    <>
      <Head>
        <title>Klaster Saintek</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Saintek />
        <Footer />
      </main>
    </>
  );
}
