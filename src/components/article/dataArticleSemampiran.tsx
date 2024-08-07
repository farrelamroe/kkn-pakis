import {Text} from "@/components"
type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleSemampiran = {
  [key: string]: Article;
};

export const dataArticleSemampiran: DataArticleSemampiran = {
  "pertemuan-dengan-kepala-dusun": {
    image: "/hero.png",
    location: "Rumah Pak Bayan",
    title: "Pertemuan dengan Kepala Dusun",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
  "pesona-semampiran": {
    image: "/hero.png",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pesona Semampiran",
    text: (
      <> 
        <Text size="lg" className="indent-10">
        Dusun Semampiran merupakan salah satu Dusun yang terletak di Desa Ketundan, Kecamatan Pakis, Kabupaten Magelang. Dusun Semampiran terletak di ketinggian sekitar 1300 MDPL. Dengan ketinggian tersebut, Dusun Semampiran memiliki udara yang dingin saat menjelang malam. Di sisi lain, Dusun Semampiran memiliki pemandangan indah dari bentangan Gunung Sindoro dan Gunung Sumbing. Bentangan Gunung Sindoro dan Gunung Sumbing akan terlihat indah ketika pagi atau sore cerah dengan semburat warna jingga dari matahari. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dusun Semampiran merupakan salah satu dusun besar yang dipimpin oleh Kepala Dusun yang disebut dengan Pak Bayan. Dusun ini dibagi menjadi sepuluh RT dengan 170 jumlah KK di dalamnya. Mayoritas masyarakat Dusun Semampiran adalah Islam. Oleh karena itu, berbagai macam kegiatan keagamaan bernuansa Islam ada di sini, seperti berjanjen, yasinan, khatam Qur’an, dan sholawat. Kegiatan tersebut rutin dilaksanakan setiap minggu, baik oleh perkumpulan ibu-ibu maupun bapak-bapak.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Masyarakat Dusun Semampiran memiliki lingkungan sosial yang hangat. Hal tersebut tercipta dari kegiatan gotong royong ketika panen besar, obrolan ringan dan hangat ketika masyarakat bekerja di ladang, acara besar dan lomba rutin setiap tahun, dan perkumpulan pemuda ketika bermain voli.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Ketika membicarakan tentang Dusun Semampiran, tidak akan terlepas dengan kata “Pertanian”. Mayoritas, masyarakat di dusun ini adalah petani. Pertanian menjadi penggerak ekonomi utama di dusun ini. Komoditas pertanian dusun Semampiran adalah kubis, sawi, pakcoy, brokoli, stroberi, bit, cabai, dan bakau. Ketika musim panen tiba dan harga jual komoditas tinggi, banyak petani mendapatkan keuntungan yang besar.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Di sisi lain, masyarakat Dusun Semampiran memiliki satu keminatan yang sama. Hal tersebut adalah voli. Bisa dikatakan, voli menjadi hobi masyarakat Dusun Semampiran, terutama bagi anak-anak, pemuda, dan bapak-bapak. Dusun Semampiran selalu menjadi juara bertahan dalam setiap perlombaan voli setiap tahun di des
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kegemaran masyarakat di sini terimplementasikan dalam bentuk kegiatan rutin yang harus dilakukan setiap sore. Satu kegiatan yang selalu dilaksanakan setiap sore adalah bermain voli di lapangan tengah. Dalam kegiatan tersebut, keharmonisan, kebersamaan, dan sportivitas penduduk Dusun Semampiran tercipta dan berakar kuat dalam interaksi sosial masyarakat Dusun Semampiran.
        </Text>
      </>
    ),
  },
};
