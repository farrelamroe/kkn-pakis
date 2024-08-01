import { Text } from "@/components";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticlePucung = {
  [key: string]: Article;
};

export const dataArticlePucung: DataArticlePucung = {
  "pesona-pucung": {
    image: "/pucung/week-1-hero.jpeg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Pesona Pucung",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Dusun Pucung merupakan permata tersembunyi di Jawa Tengah. Sebuah
          dusun kecil yang terletak di Desa Pogalan, Kecamatan Pakis, Kabupaten
          Magelang. Dusun ini menawarkan keindahan alam yang memukau, kehidupan
          masyarakat yang masih sangat tradisional, serta suasana yang tenang
          dan damai, membuatnya menjadi tempat yang ideal untuk melepas penat
          dari hiruk-pikuk perkotaan. Secara geografis, Dusun Pucung dikelilingi
          oleh perbukitan dan sawah yang hijau. Keberadaan perbukitan ini
          memberikan pemandangan alam yang menakjubkan, terutama saat matahari
          terbit dan terbenam. Udara yang segar d bersih menjadi daya tarik
          tersendiri bagi para pengunjung yang datang untuk menikmati ketenangan
          dan keindahan alam. Di pagi hari, kabut tipis sering menyelimuti dusun
          ini, menciptakan suasana magis yang sulit ditemukan di tempat lain.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kehidupan masyarakat Dusun Pucung masih sangat kental dengan budaya
          dan adat istiadat Jawa. Mayoritas penduduk Dusun Pucung berprofesi
          sebagai petani, menggantungkan hidup mereka pada hasil bumi. Selain
          bertani, beberapa warga juga memelihara ternak seperti sapi dan
          kambing. Kearifan lokal dan gotong royong menjadi nilai-nilai yang
          masih dijunjung tinggi oleh masyarakat di sini. Mereka sering bekerja
          sama dalam berbagai kegiatan, seperti saat musim panen atau
          acara-acara adat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Salah satu acara adat yang masih dilestarikan di Dusun Pucung adalah
          upacara &ldquo;Sedekah Bumi&rdquo;. Acara ini biasanya dilakukan pada
          waktu tertentu sebagai ungkapan rasa syukur kepada Tuhan atas hasil
          bumi yang melimpah. Saat acara ini, masyarakat berkumpul di satu
          tempat, membawa berbagai macam hasil panen, dan melakukan doa bersama.
          Tradisi ini tidak hanya menjadi ajang untuk bersyukur, tetapi juga
          mempererat tali silaturahmi antarwarga.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dusun Pucung juga memiliki beberapa daya tarik kesenian. Kesenian di
          Dusun Pucung yaitu “Topeng Ireng”. Tarian ini memiliki ciri khas yang
          unik karena penari mengenakan topeng hitam (ireng) yang melambangkan
          kekuatan gaib atau kekuatan magis. Tradisi ini berkembang sebagai
          bagian dari upacara atau perayaan tradisional, sering kali terkait
          dengan kepercayaan spiritual dan kegiatan keagamaan tertentu. Topeng
          hitam yang digunakan dalam tarian ini diyakini memiliki kekuatan
          mistis yang dapat melindungi penari dari gangguan roh atau makhluk
          gaib lainnya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Adapun daya tarik lainnya Dusun Pucung yaitu terdapat kelompok
          pengrajin anyaman bambu “Sipta Mandiri”. Anyaman bambu adalah salah
          satu kerajinan tangan yang telah lama menjadi bagian dari budaya dan
          kehidupan masyarakat di Dusun Pucung, Desa Pogalan, Kecamatan Pakis,
          Kabupaten Magelang, Jawa Tengah. Anyaman bambu tidak hanya sebagai
          keterampilan yang praktis, tetapi juga merupakan warisan budaya yang
          penting dalam kehidupan sehari-hari dan ekonomi lokal. Keterampilan
          ini sering kali diajarkan dari generasi ke generasi, dengan
          teknik-teknik tradisional yang dipelajari dan diterapkan secara
          turun-temurun. Anyaman bambu tidak hanya berfungsi sebagai kerajinan
          tangan, tetapi juga memiliki nilai estetika dan fungsi praktis dalam
          kehidupan sehari-hari.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Meskipun Dusun Pucung masih terbilang tradisional dan jauh dari
          kemewahan modern, namun hal inilah yang menjadi daya tarik utama dusun
          ini. Para pengunjung dapat merasakan kehidupan yang lebih sederhana
          dan dekat dengan alam. Selain itu, keramahan penduduk lokal membuat
          siapa saja yang datang merasa seperti di rumah sendiri. Dusun Pucung
          di Desa Pogalan, Kecamatan Pakis, memang layak menjadi salah satu
          destinasi kunjungan rekreasi di Jawa Tengah. Keindahan alam, kehidupan
          masyarakat yang harmonis, dan budaya yang kaya menjadikan dusun ini
          tempat yang ideal untuk menikmati ketenangan dan keindahan alam yang
          masih alami. Bagi mereka yang mencari pelarian dari kesibukan kota,
          Dusun Pucung adalah pilihan yang sempurna.
        </Text>
      </>
    ),
  },
};
