import {
  Gerdu,
  MainSubunitHero,
  Navbar,
  SubunitHero,
  Subunit,
} from "@/components";
import Head from "next/head";

export default function SubunitPage() {
  return (
    <>
      <Head>
        <title>Have I Eaten - Beranda</title>
        <link rel="icon" href="" />
      </Head>
      <main>
        <Navbar />
        <Subunit />
      </main>
    </>
  );
}
