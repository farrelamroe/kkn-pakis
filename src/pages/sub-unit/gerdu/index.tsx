import { Footer, Gerdu, Navbar } from "@/components";
import Head from "next/head";

export default function GerduPage() {
  return (
    <>
      <Head>
        <title>Pogalan 2 - Gerdu</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <main>
        <Navbar />
        <Gerdu />
        <Footer />
      </main>
    </>
  );
}
