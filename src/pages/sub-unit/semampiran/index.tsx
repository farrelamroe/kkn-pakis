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

export async function getServerSideProps() {
  const isPageReady = false; // Replace with your condition

  if (!isPageReady) {
    return {
      notFound: true, // This will redirect to the 404 page
    };
  }

  return {
    props: {}, // Pass props to the page component if needed
  };
}
