import { Soshum, Navbar, Footer } from "@/components";
import Head from "next/head";

export default function SoshumPage() {
  return (
    <>
      <Head>
        <title>Klaster Soshum</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Soshum />
        <Footer />
      </main>
    </>
  );
}
