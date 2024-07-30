import { Text } from "@/components";
import Image from "next/image";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleGerdu = {
  [key: string]: Article;
};

export const dataArticleGerdu: DataArticleGerdu = {
  "profil-dusun-gerdu": {
    image: "/gerdu/week-1-gerdu-2.png",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Profil Dusun Gerdu",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Dusun Gerdu, merupakan salah satu dusun yang terletak di kaki Gunung
          Merbabu di Desa Pogalan, Kecamatan Pakis, Kabupaten Magelang, Provinsi
          Jawa Tengah. Dusun ini memiliki keindahan alam yang sangat cantik
          dengan pemandangan utama Gunung Merbabu. Selain itu, dari dusun ini
          kita dapat melihat keindahan Gunung Merapi, Gunung Sumbing, Gunung
          Sindoro, Gunung Tidar, dan Perbukitan Menoreh yang sangat indah. Pada
          pagi hari, jika cuaca sedang cerah, semua gunung dan perbukitan
          tersebut dapat terlihat jelas dan sangat indah untuk di pandang. Tak
          jauh dari dusun ini, terdapat terdapat tempat wisata yang cukup
          populer pada tahun 2020. Tepatnya pada Top Selfi Kragilan yang
          merupakan hutan punus yang ada pada kawasan Taman Nasional Gunung
          Merbabu. Selain itu, terdapat camping ground yang terletak di Dusun
          Grenden.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Dibalik keindahan alam yang terdapat pada Dusun Gerdu ini, terdapat
          sejarah yang jarang orang ketahui. Yaitu tentang pahlawan bernama
          Letkol dr. Soedjono yang merupakan seorang dokter Brigade Kuda Putih.
          Letkol dr. Soedjono lahir di Banyumas, Februari 1915 yang mana
          dr.Soedjono merupakan dokter lulusan sekolah kedokteran yang didirikan
          oleh Jepang.
        </Text>
        <br />
        <div className="flex flex-col items-center justify-between gap-x-[64px] gap-y-[32px] lg:flex-row">
          <Image
            src="/gerdu/week-1-gerdu-1.png"
            alt=""
            width={1000}
            height={1000}
            className="aspect-auto h-full max-h-[325px] w-full max-w-[562px] rounded-[24px] object-cover"
          />
          <div>
            <Text size="lg" color="secondary" className="indent-10">
              Perjalanan perjuangan dr.Soedjono tidaklah mudah. Sebelum akhirnya
              berada di Magelang, dr.Soedjono pernah mengabdi di Divisi
              Siliwangi sebgai dokter pada Resimen Kian Santang di Purwakarta,
              Jawa Barat. Kemudian pindah ke Solo di bawah pimpinan Jendral
              Gatot Soebroto.
            </Text>
            <br />
            <Text size="lg" color="secondary" className="indent-10">
              dr.Soedjono gugur di tembak oleh pasukan Anjing NICA, yaitu
              pasukan tentara Belanda di Dusun Gerdu, Desa Pogalan, Kecamatan
              Pakis, Kabupaten Magelang. Pada saat kejadian, pos yang berada di
              kaki Gunung Merbabu tersebut diobrak-abrik pasukan Anjing NICA.
              Kemudian dr.Soedjono berusaha meloloskan diri dengan melompat
              pagar. Namuan naas, kaki dr.Soedjono tersangkut tanaman waluh dan
              terjatuh. Tanpa pikir panjang, pasukan Anjing NICA langsung
              menembak di tempat hingga gugur.
            </Text>
          </div>
        </div>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Pada awalnya, dr.Soedjono dimakamkan di pemakaman yang ada di Dusun
          Gerdu. Untuk mengenang jasa dr.Soedjono, namanya diabadikan menjadi
          nama Rumah Sakit Tentara (RST) di Kota Magelang dengan nama RST
          dr.Soedjono yang terletak di Jl. Urip Sumoharjo, Magelang.
        </Text>
      </>
    ),
  },
};
