import { Medika, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function MedikaPage() {
  return (
    <>
      <Head>
        <title>Klaster Medika</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Medika />
        <Footer />
      </main>
    </>
  );
}
