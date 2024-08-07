import { Button, H1 } from "@/components";
import Head from "next/head";
import Image from "next/image";

export default function NotFounf() {
  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan!</title>
        <link rel="icon" href="/logo-pakis.png" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center gap-[50px] text-center lg:flex-row">
        <Image src="/logo-pakis.png" alt="image" width={500} height={500} />
        <div>
          <H1 className="font-jakarta">Halaman tidak ditemukan!</H1>
          <Button
            size="lg"
            text={["Kembali"]}
            color="secondary"
            buttonCount={1}
            back={true}
            className="mx-auto mt-[24px] block"
          />
        </div>
      </div>
    </>
  );
}
