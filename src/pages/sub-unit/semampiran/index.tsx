import { Semampiran, Navbar } from "@/components";
import Head from "next/head";

export default function SemampiranPage() {
  return (
    <>
      <Head>
        <title>Ketundan 1 - Semampiran</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Semampiran />
      </main>
    </>
  );
}
