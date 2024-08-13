import { Text, Container, H2, H3 } from "@/components";
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
  "pesona-gerdu": {
    image: "/gerdu/week-1-hero.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Pesona Gerdu",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Dusun Gerdu merupakan salah satu dusun yang terletak di kaki Gunung
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
        <div className="flex flex-col items-center justify-between gap-x-[64px] gap-y-[32px] lg:flex-row">
          <img
            src="/gerdu/tugu.jpg"
            alt=""
            width={1000}
            height={1000}
            className="aspect-auto h-full max-h-[325px] w-full max-w-[562px] rounded-[24px] object-cover"
          />
          <div>
            <Text size="lg" color="secondary" className="indent-10">
              Dibalik keindahan alam yang terdapat pada Dusun Gerdu ini,
              terdapat sejarah yang jarang orang ketahui. Yaitu tentang pahlawan
              bernama Letkol dr. Soedjono yang merupakan seorang dokter Brigade
              Kuda Putih. Letkol dr. Soedjono lahir di Banyumas, Februari 1915
              yang mana dr.Soedjono merupakan dokter lulusan sekolah kedokteran
              yang didirikan oleh Jepang.
            </Text>
            <br />
            <Text size="lg" color="secondary" className="indent-10">
              Perjalanan perjuangan dr.Soedjono tidaklah mudah. Sebelum akhirnya
              berada di Magelang, dr.Soedjono pernah mengabdi di Divisi
              Siliwangi sebgai dokter pada Resimen Kian Santang di Purwakarta,
              Jawa Barat. Kemudian pindah ke Solo di bawah pimpinan Jendral
              Gatot Soebroto.
            </Text>
            <br />
            <Text size="lg" color="secondary" className="indent-10">
              dr.Soedjono gugur ditembak oleh pasukan Anjing NICA, yaitu pasukan
              tentara Belanda di Dusun Gerdu, Desa Pogalan, Kecamatan Pakis,
              Kabupaten Magelang. Pada saat kejadian, pos yang berada di kaki
              Gunung Merbabu tersebut diobrak-abrik pasukan Anjing NICA.
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
  "video-profil-pogalan": {
    image: "/gerdu/vid-profil-cover-2.png",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Video Profil Desa Pogalan",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Desa Pogalan, yang terletak di Kecamatan Pakis, Kabupaten Magelang,
          memiliki potensi yang luar biasa untuk dikembangkan. Desa ini memiliki
          kekayaan hasil kerajinan UMKM anyaman bambu, dan juga memiliki pesona
          alam dan warisan sejarah yang menarik untuk dieksplorasi. Dalam rangka
          memperkenalkan dan mempromosikan potensi Desa Pogalan, telah dilakukan
          pembuatan video profil desa. Video profil tersebut tidak hanya
          menampilkan keindahan alam dan kekayaan budaya, tetapi juga menyoroti
          kehidupan sehari-hari masyarakat desa.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Proses pembuatan video profil ini dilakukan dengan cara melakukan
          wawancara dengan beberapa narasumber, seperti perangkat desa, pelaku
          UMKM kerajinan anyaman bambu, pelaku wisata, serta masyarakat lokal.
          Melalui wawancara, tim produksi video dapat menggali informasi yang
          komprehensif mengenai berbagai aspek kehidupan di Desa Pogalan. Salah
          satu fokus utama dalam video profil ini adalah potensi UMKM kerajinan
          anyaman bambu. Desa Pogalan dikenal sebagai sentra kerajinan anyaman
          bambu yang menghasilkan berbagai produk unik dan berkualitas. Video
          profil ini menampilkan proses pembuatan kerajinan, serta menyoroti
          keunikan dan keunggulan produk-produk tersebut. Selain itu, video
          profil juga menyoroti potensi wisata alam dan sejarah yang dimiliki
          oleh Desa Pogalan. Pemandangan alam yang indah seperti Wisata Alam
          Grenden dan Top Selfie Kragilan yang menyuguhkan keindahan hutan
          pinus, serta peninggalan sejarah yang menarik yakni Monumen dr.
          Soedjono, menjadi daya tarik tersendiri bagi wisatawan yang ingin
          menjelajahi Desa Pogalan.
        </Text>
        <br />
        <div className="flex flex-col items-center justify-between gap-x-[64px] gap-y-[32px] lg:flex-row">
          <div>
            <Text size="lg" color="secondary" className="indent-10">
              Untuk pertanian, dilakukan wawancara kepada Pak Hafid sebagai
              Penyuluh Pertanian Pertama di Desa Pogalan. Untuk peternakan,
              dilakukan wawancara kepada Pak Madiyono sebagai Kepala Desa
              Pogalan. Pertanyaan yang diberikan adalah sebagai berikut:
            </Text>
            <br />
            <ul className="custom-list-disc">
              <li>Kondisi Pertanian/Peternakan Saat Ini</li>
              <li>Jenis Tumbuhan dan Hewan Ternak Utama</li>
              <li>Tujuan Pertanian/Peternakan</li>
              <li>Peran Organisasi dalam Pertanian/Peternakan</li>
              <li>Program dan Kegiatan Pertanian/Peternakan</li>
              <li>Harapan Masa Depan Pertanian/Peternakan</li>
            </ul>
          </div>
          <img
            src="/gerdu/video-peternakan.png"
            alt=""
            width={1000}
            height={1000}
            className="aspect-auto h-full max-h-[325px] w-full max-w-[562px] rounded-[12px] object-cover"
          />
        </div>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Selain video wawancara, ditambah juga cuplikan dari berbagai kegiatan
          di Desa Pogalan sebagai informasi tambahan. Kegiatan ini mencakup
          kegiatan sehari-hari petani dan peternak yang bekerja di sawah dan
          ladang, kegiatan sehari-hari warga Dusun di Pogalan seperti Hadroh,
          TPA, Kegiatan Belajar Mengajar (KBM) di sekolah, dan lainnya.
          Keindahan alam Desa Pogalan yang memukau, seperti panorama pegunungan
          yang hijau, keanekaragaman flora dan fauna juga ditampilkan pada
          video. Ini semua diharapkan dapat menarik minat penonton tidak hanya
          dari dalam negeri tetapi juga dari mancanegara.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Melalui video profil ini, diharapkan dapat meningkatkan awareness
          masyarakat luas terhadap keberadaan Desa Pogalan dan mendorong
          peningkatan kunjungan wisatawan. Selain itu, video ini juga dapat
          menjadi sarana untuk mempromosikan produk-produk UMKM kerajinan
          anyaman bambu, sehingga dapat meningkatkan pendapatan masyarakat.
          Dengan demikian, pembuatan video profil Desa Pogalan merupakan upaya
          strategis untuk memperkenalkan dan mengembangkan potensi desa, baik
          dari segi UMKM, pariwisata, maupun kehidupan sosial budaya masyarakat.
          Diharapkan, video profil ini dapat menjadi salah satu alat efektif
          untuk mendorong kemajuan dan kesejahteraan Desa Pogalan di masa depan.
        </Text>
        <br />

        {/* Tampilan Video Profil Pogalan */}
        {/* <div className="mt-[24px] flex h-[594px] justify-center rounded-lg">
          <iframe
            className="rounded-lg shadow-[0_0px_35px_#D04736]"
            width="1300"
            height="570"
            src="https://www.youtube.com/embed/yjnSX_iUFVo?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div> */}
      </>
    ),
  },
  "pembayaran-digital-qris": {
    image: "/gerdu/qris.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title:
      "Sosialisasi Sistem Pembayaran Digital QRIS sebagai Optimalisasi Digitalisasi UMKM di Desa Pogalan",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Sistem pembayaran digital QRIS (Quick Response Code Indonesia
          Standard) adalah standardisasi pembayaran menggunakan QR Code
          pembayaran yang ditetapkan oleh Bank Indonesia untuk memfasilitasi
          pembayaran non tunai. Sistem pembayaran ini merupakan salah satu
          inovasi penting dalam meningkatkan produktivitas dan efisiensi Usaha
          Mikro, Kecil, dan Menengah (UMKM) di Indonesia. Melihat pertumbuhan
          teknologi digital yang semakin pesat ini menuntut semua pelaku usaha
          untuk beradaptasi menerapkan teknologi tersebut. Akan tetapi, masih
          banyak UMKM yang belum mengadaptasi sistem pembayaran digital QRIS
          karena minimnya pengetahuan dan sumber daya yang diperlukan untuk
          menerapkan teknologi ini. Berdasarkan observasi yang telah dilakukan
          pada beberapa UMKM di Desa Pogalan, Kecamatan Pakis, Kabupaten
          Magelang, didapatkan informasi bahwa pelaku UMKM tersebut belum
          mengadaptasi sistem pembayaran digital QRIS. Hal ini karena kurangnya
          pengetahuan UMKM tersebut terkait manfaat, kelebihan, dan cara
          pembuatan serta penggunaan sistem pembayaran digital tersebut. Oleh
          karena itu, perlu dilakukan sosialisasi pengenalan sistem pembayaran
          digital QRIS untuk meningkatkan pemahaman dan adopsi sistem pembayaran
          ini.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Sosialisasi pengenalan sistem pembayaran digital QRIS dilakukan kepada
          enam sampel UMKM di Desa Pogalan yang tepatnya di area Dusun Gerdu.
          UMKM tersebut antara lain warung makan, toko kelontong, dan toko
          pertanian. Metode yang digunakan dalam sosialisasi tersebut berupa
          presentasi melalui media leaflet dan diskusi interaktif. Informasi
          yang disampaikan antara lain pengertian QRIS, tujuan, manfaat bagi
          pelaku usaha dan pelanggan, ciri-ciri QRIS yang resmi, tarif transaksi
          QRIS, persyaratan pembuatan serta cara alternatif pembuatan QRIS
          melalui Aplikasi Dana yang bisa diakses melalui smartphone. Hasil
          sosialisasi sistem pembayaran digital QRIS telah menunjukkan
          peningkatan pemahaman dan rencana untuk mengadaptasi sistem pembayaran
          digital tersebut. Meskipun masih ada beberapa UMKM yang belum
          mengadopsi teknologi ini, tetapi mereka memiliki antusias yang tinggi
          untuk belajar memahami dan mengadaptasi teknologi digital ini.
          Terdapat beberapa faktor yang mendorong mereka untuk mengadaptasi
          sistem pembayaran digital QRIS antara lain kemudahan penggunaan,
          kemanfaatan , dan kepercayaan.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Berdasarkan sosialisasi yang telah dilakukan pada UMKM di Desa Pogalan
          menunjukkan hasil yang positif dalam meningkatkan produktivitas dan
          efisiensi UMKM. Dengan demikian, diharapkan kedepannya UMKM di Desa
          Pogalan dapat mengadaptasi sistem pembayaran digital QRIS sehingga
          dapat meningkatkan produktivitas dan efisiensi dalam kegiatan
          usahanya. Selain itu dapat meningkatkan akses ke pasar yang lebih luas
          dan memanfaatkan sumber pembiayaan yang lebih ramah.
        </Text>
      </>
    ),
  },
  "peta-penggunaan-lahan": {
    image: "/gerdu/peta.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Analisis Peta Penggunaan Lahan di Desa Pogalan",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Penggunaan lahan merupakan usaha manusia dalam memanfaatkan lahan pada
          suatu wilayah tertentu untuk memenuhi kebutuhan hidupnya. Penggunaan
          lahan dapat dibedakan menjadi dua, yaitu penggunaan lahan secara alami
          (kehutanan) maupun buatan (pertanian, perumahan, maupun industri).
          Beberapa kategori penggunaan lahan tersebut disesuaikan dengan kondisi
          bentang alam yang ada sehingga dapat ditinjau lebih lanjut untuk tipe
          penggunaan lahan yang tepat. Sebagai contoh, di daerah dataran tinggi
          akan didominasi penggunaan lahan berupa tegalan dan hutan, sedangkan
          daerah dataran rendah akan didominasi pemukiman, sawah, maupun
          industri. Perbedaan penggunaan lahan tersebut dilakukan untuk menjaga
          keberlanjutan lingkungan dan pemenuhan kebutuhan hidup para penduduk
          sekitar. Oleh karena itu, penggunaan lahan pada suatu wilayah perlu
          dipetakan untuk merepresentasikan kondisi lahan yang ada di lapangan.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Peta penggunaan lahan yang telah terbentuk adalah peta penggunaan
          lahan yang berada di Desa Pogalan, Pakis, Magelang. Peta penggunaan
          lahan tersebut diserahkan kepada Balai Desa Pogalan untuk dapat
          menjadi acuan dalam mengambil kebijakan yang tepat terkait pemanfaatan
          lahan di Desa Pogalan dengan mempertimbangkan keberlanjutan
          lingkungan. Dengan adanya peta tersebut juga dapat membantu dalam
          menggambarkan potensi sumber daya alam yang ada, membantu dalam
          merencanakan dan mengembangkan suatu wilayah tersebut, serta dapat
          memprediksi risiko bencana yang dapat terjadi.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Pada peta penggunaan lahan Desa Pogalan sebagaimana yang terdapat
          dalam gambar dapat direpresentasikan bahwa tipe penggunaan lahan yang
          ada yaitu sawah atau tegalan, pemukiman, dan hutan. Sawah atau tegalan
          disimbolkan dengan warna hijau muda, hutan disimbolkan dengan warna
          hijau tua, dan pemukiman disimbolkan dengan warna oranye. Penggolongan
          tersebut dapat menggambarkan penggunaan lahan yang dominan di Desa
          Pogalan, yaitu hutan, disusul oleh sawah atau tegalan dan pemukiman.
          Dari analisis peta ini dapat disimpulkan bahwa dengan kondisi
          penggunaan lahan yang didominasi hutan dan sawah atau tegalan, maka
          sebagian besar penduduk yang ada di wilayah tersebut bermata
          pencaharian sebagai petani. Selain itu, luas kawasan pemukiman yang
          kecil dan masih kurangnya akses pendidikan yang layak dapat
          berpengaruh terhadap rendahnya potensi sumber daya manusia yang
          berkualitas.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Dengan adanya pengetahuan terkait sebaran penggunaan lahan yang ada di
          Desa Pogalan, maka dapat dinyatakan bahwa potensi sumber daya alam
          seperti pemanfaatan lahan untuk pertanian telah dimanfaatkan dengan
          baik. Hal tersebut dikarenakan wilayah ini berada di sekitar Kaki
          Lereng Gunung Merbabu yang mana mempunyai potensi tanah yang subur dan
          kaya nutrisi. Namun, dalam pengembangkan ekosistem berkelanjutan masih
          dirasa kurang karena semakin banyak terjadi perubahan penggunaan lahan
          dari lahan hutan menjadi pertanian. Hal ini menjadi perhatian bagi
          pemangku kebijakan untuk dapat lebih tegas dalam menetapkan peraturan
          terkait perubahan penggunaan lahan untuk menjaga keseimbangan
          ekosistem.
        </Text>
      </>
    ),
  },
  "serah-terima-papan-informasi": {
    image: "/gerdu/papan-informasi.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title:
      "Pembuatan Papan Informasi Sebagai Wadah Warga Mendapatkan Informasi",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Dalam upaya meningkatkan akses informasi bagi masyarakat di Dusun
          Gerdu, Desa Pogalan, Kecamatan Pakis, mahasiswa Kuliah Kerja
          Nyata-Pembelajaran Pemberdayaan Masyarakat (KKN-PPM) Universitas
          Gadjah Mada (UGM) telah meluncurkan program penyediaan papan
          informasi. Kegiatan ini merupakan bagian dari komitmen mahasiswa untuk
          memberikan kontribusi nyata kepada masyarakat di berbagai daerah di
          Indonesia. Papan informasi yang dibuat oleh mahasiswa KKN-PPM UGM
          bertujuan untuk menyediakan informasi yang relevan dan berguna bagi
          masyarakat setempat. Mulai dari jadwal kegiatan penting, informasi
          kesehatan, lowongan pekerjaan, hingga berbagai kegiatan sosial budaya,
          papan informasi ini diharapkan dapat membantu masyarakat dalam
          mendapatkan informasi yang lebih mudah dan efektif.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          &ldquo;Kami sangat berharap papan informasi ini dapat membantu
          masyarakat di Dusun Gerdu dalam mengakses informasi yang
          penting,&rdquo; kata salah satu mahasiswa KKN-PPM UGM yang terlibat
          dalam kegiatan ini. &ldquo;Dengan demikian, kami berusaha meningkatkan
          kesadaran dan partisipasi masyarakat dalam berbagai kegiatan sosial
          dan ekonomi.&rdquo;Pembuatan papan informasi ini juga mendapatkan
          dukungan penuh dari masyarakat setempat. Ketua RT dan RW Desa Pogalan
          menyatakan setuju dengan kegiatan ini dan berharap dapat memberikan
          manfaat bagi masyarakat.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          &ldquo;Kami sangat mengapresiasi kegiatan ini. Papan informasi akan
          membantu masyarakat dalam mendapatkan informasi yang lebih mudah dan
          efektif,&rdquo; kata Ketua Dusun Gerdu
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Kegiatan ini juga merupakan bagian dari program KKN-PPM UGM yang
          bertujuan memberikan sumbangsih ilmu dan pengabdian kepada masyarakat
          di lokasi KKN. Dengan demikian, mahasiswa KKN-PPM UGM diharapkan dapat
          meningkatkan kontribusi nyata bagi masyarakat dan memperkuat identitas
          budaya setempat.Dengan papan informasi yang disediakan, masyarakat di
          Dusun Gerdu diharapkan dapat lebih mudah mengakses informasi yang
          penting dan meningkatkan kualitas hidup mereka. Kegiatan ini juga
          menunjukkan komitmen Universitas Gadjah Mada dalam memberikan
          kontribusi nyata bagi masyarakat dan meningkatkan kesadaran masyarakat
          dalam berbagai aspek kehidupan.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Selain itu, papan informasi ini juga diharapkan dapat meningkatkan
          kesadaran masyarakat tentang pentingnya informasi dalam kehidupan
          sehari-hari. Dengan demikian, masyarakat dapat lebih terinformasi dan
          terlibat dalam berbagai kegiatan yang dapat meningkatkan kualitas
          hidup mereka.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Dampak positif yang diharapkan dari papan informasi yang dibuat oleh
          mahasiswa KKN-PPM UGM meliputi beberapa aspek, yaitu pendidikan,
          kesehatan, ekonomi, dan sosial budaya. Papan informasi dapat membantu
          masyarakat dalam mendapatkan informasi yang relevan dan berguna,
          seperti jadwal kegiatan dan informasi penting, sehingga dapat
          meningkatkan pengetahuan dan kesadaran masyarakat. Informasi tentang
          kesehatan, seperti jadwal vaksinasi, pelayanan kesehatan, dan tips
          kesehatan, juga dapat membantu masyarakat dalam menjaga kesehatan
          mereka. Selain itu, papan informasi dapat menyebarkan informasi
          tentang peluang ekonomi, seperti lowongan pekerjaan dan peluang usaha,
          yang dapat membantu masyarakat dalam meningkatkan pendapatan mereka.
          Informasi tentang kegiatan sosial budaya, seperti festival dan acara
          tradisional, dapat meningkatkan kesadaran dan partisipasi masyarakat
          dalam kegiatan sosial budaya. Dengan demikian, papan informasi yang
          dibuat oleh mahasiswa KKN-PPM UGM diharapkan dapat memberikan dampak
          positif yang signifikan bagi masyarakat setempat.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Dalam kesimpulan, kegiatan penyediaan papan informasi oleh mahasiswa
          KKN-PPM UGM di Dusun Gerdu merupakan langkah yang tepat untuk
          meningkatkan akses informasi dan kesadaran masyarakat. Kegiatan ini
          diharapkan dapat menjadi contoh yang baik bagi masyarakat lainnya
          dalam meningkatkan kualitas hidup melalui akses informasi yang lebih
          baik.
        </Text>
      </>
    ),
  },
  "pembuatan-jamu-cegah-stunting": {
    image: "/gerdu/jamu.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Pembuatan Jamu Cegah Stunting",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Pada hari Kamis, 18 Juli 2024, tim KKN-PPM Universitas Gadjah Mada sub
          unit Pogalan 2 yang berlokasi di Dusun Gerdu melaksanakan program
          kerja sosialisasi dan pembuatan jamu cegah stunting yang dihadiri oleh
          kader posyandu dan ibu-ibu PKK. Kegiatan ini merupakan salah satu
          upaya inovatif untuk mencegah stunting dengan memanfaatkan bahan-bahan
          alami. Tujuan program kerja ini untuk memberikan pengetahuan dan
          keterampilan keluarga dalam membuat minuman olahan berbahan baku
          tanaman obat keluarga (TOGA).
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Sampai saat ini stunting masih menjadi isu kesehatan yang serius di
          beberapa daerah di Indonesia, tidak terkecuali di Kabupaten Magelang.
          Berdasarkan data Elektronik Pencatatan dan Pelaporan Gizi Berbasis
          Masyarakat (E-PPGBM), prevalensi stunting di Kabupaten Magelang
          mengalami kenaikan dari 13,11% pada tahun 2022 menjadi 15,22% pada
          tahun 2023. Stunting merupakan gangguan pertumbuhan dan perkembangan
          pada anak yang disebabkan kekurangan gizi kronis. Salah satu faktor
          risiko stunting adalah kurangnya nafsu makan sehingga anak cenderung
          mengalami penurunan berat badan. Oleh karena itu, perlu upaya
          pencegahan stunting yang tidak hanya melalui pemberian gizi pangan
          fungsional, tetapi juga dengan pemanfaatan tanaman obat keluarga
          (TOGA) berupa kombinasi jamu temulawak dan kunyit.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Kandungan kurkumin pada temulawak dapat mengaktifkan enzim pencernaan
          sehingga bermanfaat untuk meningkatkan nafsu makan pada balita dan
          anak. Sementara itu, kunyit berfungsi untuk meningkatkan daya tahan
          tubuh sehingga anak tidak mudah terserang penyakit. Dengan konsumsi
          jamu kombinasi temulawak dan kunyit diharapkan nafsu makan anak
          bertambah sehingga gizi dan nutrisi untuk tubuh terpenuhi serta
          terbebas dari stunting.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Resep pembuatan jamu cegah stunting ini dibuat dari komposisi bahan
          rimpang dan non rimpang dengan perbandingan 1:1. Bahan rimpang yang
          dibutuhkan terdiri dari ¼ kg temulawak dan ¼ kg kunyit. Sementara itu,
          bahan non-rimpang terdiri dari 20 gram kayu manis, 50 gram secang, 13
          batang serai, 2 buah kapulaga, 2 batang cengkeh, 250 mL air, dan 250
          gram gula pasir. Jamu ini dapat dikonsumsi oleh ibu dan anak sehari
          satu kali dengan takaran 1 sendok makan serbuk jamu ditambah 75-100 mL
          air panas.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Melalui program kerja ini diharapkan dapat terbentuk generasi yang
          lebih sehat dan terbebas dari stunting. Selain itu, keterlibatan
          masyarakat dalam kegiatan pembuatan jamu juga diharapkan dapat menjaga
          keberlanjutan dari program kerja yang sudah dilaksanakan.
        </Text>
      </>
    ),
  },
  "peta-persebaran-umkm": {
    image: "/gerdu/peta-persebaran.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title:
      "Analisis Peta Persebaran UMKM untuk Meningkatkan Potensi Wisatawan di Desa Pogalan",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          UMKM (Usaha Mikro, Kecil, dan Menengah) memegang peran yang sangat
          penting dalam meningkatkan perekonomian daerah maupun negara. Dalam
          sektor pariwisata, umkm berperan untuk meningkatkan perkembangan suatu
          destinasi wisata dengan cara menawarkan berbagai produk atau layanan
          unggulannya kepada masyarakat pengunjung wisata. Hal tersebut
          menjadikan UMKM sebagai daya tarik pendukung untuk meningkatkan jumlah
          wisatawan yang berkunjung. Selain itu, banyaknya jumlah UMKM juga
          dapat memberikan lapangan pekerjaan bagi masyarakat di sekitar tempat
          destinasi wisata. Desa Pogalan merupakan salah satu desa yang memiliki
          berbagai destinasi wisata alam pegunungan yang banyak dikunjungi oleh
          wisatawan. Destinasi wisata di Desa Pogalan, Kecamatan Pakis,
          Kabupaten Magelang terletak di lereng Gunung Merbabu yang memiliki
          keindahan alam dan budaya yang menarik bagi wisatawan. Terdapat dua
          objek wisata yang ada di Desa Pogalan, yaitu Top Selfie Kragilan dan
          Wisata Alam Grenden.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Setelah melakukan survei dan analisis data maka terbentuk gambar Peta
          Persebaran UMKM di Desa Pogalan. Berdasarkan gambar tersebut diperoleh
          informasi bahwa terdapat beberapa sampel sebaran UMKM yang telah
          dipetakan di Desa Pogalan. Terlihat bahwa persebaran UMKM yang ada di
          Desa Pogalan belum merata, persebaran UMKM hanya terdapat pada lokasi
          tertentu saja seperti pusat kelurahan, sepanjang jalan dan area
          pemukiman tertentu. Berikut Analisis peta persebaran UMKM di Desa
          Pogalan dengan pendekatan geografi :
        </Text>
        <br />
        <ul className="custom-list-disc">
          <li>
            Jarak persebaran UMKM di Desa Pogalan beberapa lokasi, seperti pusat
            kelurahan sepanjang jalan utama tertentu dan pasar atau rest area.
            Hal tersebut menunjukkan bahwa UMKM memanfaatkan kedekatan jalan
            utama untuk mendapatkan aksesibilitas konsumen. Selain itu, beberapa
            UMKM tersebar di area pemukiman tertentu yang bertujuan untuk
            menargetkan konsumen di area sekitarnya.
          </li>
          <li>
            Jarak UMKM dengan destinasi wisata cukup dekat sehingga memiliki
            peluang tinggi untuk berkembang karena mudah dijangkau oleh
            wisatawan yang berkunjung.
          </li>
          <li>
            Dalam aspek keterjangkauan, terdapat kemudahan dalam mengakses
            lokasi UMKM karena berada di sepanjang jalan utama desa walaupun
            belum merata.
          </li>
        </ul>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Analisis lain melalui pendekatan ekonomi adalah :
        </Text>
        <br />
        <ul className="custom-list-disc">
          <li>
            Jenis UMKM yang tersebar beragam seperti warung makan, toko
            kelontong, bengkel, toko pertanian, dan percetakan. Hal tersebut
            menunjukkan bahwa pelaku UMKM berusaha memenuhi apa yang dibutuhkan
            oleh konsumennya.
          </li>
          <li>
            Belum ada UMKM yang menyediakan produk khas yang unik sebagai daya
            tarik destinasi wisata. Dengan adanya produk khas destinasi wisata
            dapat menjadi daya tarik wisatawan untuk memberikan pengalaman yang
            lebih baik sehingga menjadikan wisatawan ingin mengunjungi kembali
            destinasi wisata tersebut.
          </li>
          <li>
            Belum adanya branding lebih lanjut terhadap produk khas Desa Wisata
            Pogalan yang sudah ada sehingga keberadaan produk tersebut belum
            begitu dikenal oleh wisatawan.
          </li>
        </ul>
        <br />
        <Text size="lg" className="indent-10">
          Dengan semakin banyak sebaran UMKM yang tumbuh dan berkembang secara
          merata di Desa Pogalan, sangat berdampak pada pertumbuhan destinasi
          wisata di Desa Pogalan baik wisata Top Selfie maupun Wisata Alam
          Grenden. Hal ini karena UMKM memiliki peran yang penting sebagai daya
          tarik wisatawan melalui produk unggulan yang ditawarkan. Selain itu,
          BUMDes juga berperan penting dalam meningkatkan pertumbuhan destinasi
          wisata untuk terus melakukan branding produk khas daerah secara
          konsisten dan mengikuti perkembangan zaman sehingga dapat memenuhi
          target sasaran yang tepat.
        </Text>
      </>
    ),
  },
  "pencegahan-stunting-dan-gizi-ikan": {
    image: "/gerdu/ikan-hero.png",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title:
      "Analisis Peta Persebaran UMKM untuk Meningkatkan Potensi Wisatawan di Desa Pogalan",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Stunting adalah kondisi gagal tumbuh pada anak balita akibat
          kekurangan gizi kronis, terutama pada 1.000 hari pertama kehidupan,
          yang berdampak pada perkembangan fisik dan kognitif anak. Stunting
          merupakan masalah kesehatan yang serius di Indonesia, dengan
          prevalensi yang masih tinggi di beberapa wilayah. Salah satu
          pendekatan yang efektif untuk mengatasi stunting adalah melalui
          sosialisasi pencegahan dan peningkatan asupan gizi, terutama dengan
          memanfaatkan sumber daya lokal seperti ikan.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Ikan merupakan sumber protein hewani yang kaya akan nutrisi penting,
          seperti asam lemak omega-3, vitamin D, kalsium, dan berbagai mineral.
          Nutrisi-nutrisi ini berperan penting dalam pertumbuhan dan
          perkembangan anak, terutama pada masa-masa awal kehidupan. Dengan
          demikian, peningkatan konsumsi ikan dapat menjadi salah satu strategi
          utama dalam upaya pencegahan stunting.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Sosialisasi pencegahan stunting harus dimulai dari tingkat keluarga,
          terutama ibu hamil dan menyusui. Penyuluhan mengenai pentingnya asupan
          gizi yang cukup dan seimbang selama kehamilan dan masa menyusui sangat
          penting untuk memastikan bayi mendapatkan nutrisi yang dibutuhkan
          untuk tumbuh kembang optimal. Di sini, ikan dapat diperkenalkan
          sebagai bagian dari menu harian yang sehat dan bergizi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Selain itu, program-program pemerintah dan lembaga non-pemerintah
          harus bekerja sama dalam mengadakan kampanye sosialisasi di berbagai
          komunitas. Kampanye ini dapat mencakup penyuluhan langsung di
          posyandu, sekolah, dan pusat kesehatan masyarakat, serta melalui media
          massa dan media sosial. Informasi yang disampaikan harus mencakup
          manfaat gizi ikan, cara mengolah ikan dengan benar, serta pentingnya
          variasi dalam pola makan untuk memastikan asupan gizi yang seimbang.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pendidikan gizi juga perlu diperluas ke sekolah-sekolah dasar, di mana
          anak-anak diajarkan tentang pentingnya mengonsumsi makanan bergizi,
          termasuk ikan. Kurikulum pendidikan gizi yang terintegrasi dengan
          program makan siang sekolah dapat menjadi cara efektif untuk
          memastikan anak-anak mendapatkan nutrisi yang mereka butuhkan selama
          masa pertumbuhan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Selain itu, peningkatan aksesibilitas dan ketersediaan ikan juga
          merupakan faktor penting. Pemerintah dan sektor swasta dapat bekerja
          sama untuk memastikan pasokan ikan yang cukup dan harga yang
          terjangkau di pasar lokal. Program pengembangan budidaya ikan dan
          teknologi penangkapan ikan yang ramah lingkungan dapat membantu
          meningkatkan produksi ikan dalam negeri sehingga masyarakat dapat
          dengan mudah mengakses sumber protein berkualitas ini.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam upaya pencegahan stunting, peran serta seluruh lapisan
          masyarakat sangat diperlukan. Keterlibatan aktif dari pemerintah,
          lembaga swadaya masyarakat, dunia usaha, hingga individu sangat
          penting untuk mencapai hasil yang optimal. Sosialisasi yang efektif
          mengenai manfaat gizi ikan dan cara pencegahan stunting akan membawa
          perubahan positif dalam kualitas hidup generasi mendatang.
        </Text>
      </>
    ),
  },
  "edukasi-mpasi": {
    image: "/gerdu/mpasi.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Edukasi Prinsip Pemberian dan Variasi Menu MPASI",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Makanan pendamping ASI (MPASI) merupakan makanan yang diberikan kepada
          bayi mulai usia 6 bulan sebagai tambahan ASI. MPASI harus diberikan
          secara tepat dengan memperhatikan kebutuhan nutrisi yang diperlukan
          bayi sehingga dapat mendukung pertumbuhan dan perkembangan bayi. Akan
          tetapi, tidak jarang ibu-ibu masih belum memahami dengan baik mengenai
          MPASI, mulai dari waktu pemberian, jenis makanan, hingga cara
          pengolahannya. Oleh karena itu, Tim KKN-PPM UGM sub unit Pogalan 2
          yang berlokasi di Dusun Gerdu melaksanakan program kerja edukasi
          prinsip pemberian dan variasi menu MPASI. Tujuan dari program ini
          adalah untuk meningkatkan pengetahuan kepada masyarakat khususnya para
          ibu mengenai pentingnya MPASI yang bergizi dan bervariasi.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Edukasi dilakukan melalui presentasi dan media leaflet agar lebih
          menarik serta mudah dipahami. Materi yang disampaikan berupa
          pengenalan MPASI yang meliputi prinsip pemberian, cara mengolah, dan
          menyajikan MPASI yang sesuai dengan kebutuhan nutrisi bayi. Selain
          itu, para ibu juga diberikan contoh resep MPASI yang bervariasi
          sehingga anak tidak mudah bosan dengan makanannya. Bahan-bahan yang
          digunakan disesuaikan dengan komoditas unggul pertanian masyarakat
          Gerdu, seperti wortel, labu siam, dan kol. Salah satu contoh menunya,
          yaitu bubur soto ayam santan dan nasi sup telur puyuh bola ayam.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Setelah sesi pemaparan materi, dilakukan evaluasi dengan pemberian
          soal kuis kepada peserta untuk mengetahui sejauh mana pemahaman ibu.
          Di akhir kegiatan, dilakukan sesi tanya jawab untuk mempersilakan para
          ibu bertanya jika ada pemaparan yang kurang jelas. Kegiatan edukasi
          MPASI ini mendapatkan antusiasme yang tinggi dari masyarakat, terutama
          ibu-ibu. Peserta dapat memahami prinsip pemberian MPASI yang tepat dan
          termotivasi untuk menyajikan variasi menu MPASI bagi anak mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Program edukasi mengenai prinsip pemberian ASI dan variasi menu MPASI
          yang dilaksanakan oleh mahasiswa KKN telah memberikan manfaat yang
          signifikan bagi masyarakat desa. Edukasi yang diberikan diharapkan
          mampu meningkatkan kesadaran masyarakat akan pentingnya pemberian
          MPASI yang tepat, serta mendorong kreativitas ibu-ibu dalam menyajikan
          makanan yang sehat dan menarik bagi buah hatinya.
        </Text>
      </>
    ),
  },
  "pembuatan-pupuk-organik-cair": {
    image: "/gerdu/poc-hero.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Pembuatan Pupuk Organik Cair",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Pupuk Organik Cair (POC) merupakan suatu bahan pembenah tanah yang
          ditujukan untuk memperbaiki sifat fisika, kimia, dan biologi tanah,
          struktur tanah, tekstur tanah, serta meningkatkan kesuburan tanah.
          Pupuk organik cair dapat berasal dari seresah tanaman ataupun kotoran
          hewan ternak yang diolah melalui proses dekomposisi dan fermentasi.
          Pupuk organik cair mengandung unsur hara makroesensial yang dibutuhkan
          tanaman, yaitu nitrogen, fosfor, dan kalium, serta unsur hara
          mikroesensial lainnya. Kandungan unsur hara tersebut sangat penting
          untuk mendukung proses fotosintesis, pembentukan bunga dan buah, dan
          ketahanan tanaman terhadap hama dan penyakit. Selain itu, pupuk
          organik cair juga mengandung asam – asam organik dan hormon tumbuh
          alami yang dapat meningkatkan pertumbuhan tanaman secara optimal.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Pembuatan pupuk organik cair dapat dilakukan dengan memanfaatkan
          limbah sayur yang ada. Bahan berupa limbah sayur dipilih karena
          sebagian besar limbah hasil pertanian hortikultura di Desa Pogalan
          hanya dibuang di pematang sawah tanpa diolah kembali. Hal tersebut
          tentu menimbulkan pencemaran lingkungan berupa bau tidak sedap
          sehingga dapat mengganggu keberlangsungan aktivitas di sekitarnya.
          Limbah sayur dapat diolah menjadi pupuk dengan dua metode, yaitu galon
          tumpuk dan ember sederhana. Pada metode galon tumpuk, potongan limbah
          sayur diletakkan di galon yang atas dan akan disemprotkan larutan EM4
          dan molase secara merata. Proses dekomposisi akan berjalan selama
          kurang lebih 2 minggu dalam kondisi anaerobik kemudian pupuk organik
          cair siap dipanen. Berbeda dengan ember sederhana yang mana potongan
          limbah sayur akan dimasukkan pada sebuah ember kosong lalu ditambahkan
          air, molase, serta EM4 dengan perbandingan 1:1:20 secara bersamaan.
          Kemudian, akan dicampur dengan pengaduk dan ditutup rapat agar
          tercipta kondisi anaerobik.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Pupuk organik cair yang telah dipanen akan didistribusikan pada warga
          sekitar, khususnya di Dusun Gerdu. Kegiatan pendistribusian dibersamai
          dengan sosialisasi kepada warga terkait langkah pengaplikasian pupuk
          organik cair pada lahan. Sebelum diaplikasikan ke lahan, pupuk organik
          cair harus dijemur selama beberapa hari hingga berwarna coklat
          kehitaman dan tidak berbau. Pupuk organik cair yang telah matang harus
          diencerkan dengan perbandingan 1:10 kemudian siap untuk disemprotkan
          ke lahan. Pupuk organik cair tersebut bermanfaat untuk meningkatkan
          produktivitas tanaman, menarik minat petani Dusun Gerdu untuk lebih
          dapat memanfaatkan limbah sayur yang terbuang secara sia - sia agar
          dapat dimanfaatkan kembali menjadi pupuk organik, serta dapat
          menurunkan penggunaan pupuk anorganik yang berlebihan. Hal tersebut
          akan mendukung sistem pertanian berkelanjutan dan menjaga keseimbangan
          ekosistem.
        </Text>
      </>
    ),
  },
  "analisis-destinasi-wisata": {
    image: "/gerdu/destinasi-wisata.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title:
      "Analisis Destinasi Wisata di Desa Pogalan Untuk Pembuatan Peta Wisata Sebagai Pengembangan Pariwisata",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Dalam upaya meningkatkan daya tarik dan memudahkan aksesibilitas
          pariwisata di Desa Pogalan, Kecamatan Pakis, Kabupaten Magelang,
          penulis telah melaksanakan program kerja yang berfokus pada analisis
          destinasi wisata untuk pembuatan peta wisata. Peta ini diharapkan
          dapat memberikan kontribusi signifikan terhadap pengembangan sektor
          pariwisata lokal.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Peta wisata yang akurat dan informatif menawarkan berbagai manfaat.
          Pertama, peta ini membantu wisatawan dalam menemukan dan mengakses
          destinasi utama di Desa Pogalan, seperti area wisata alam, situs
          sejarah, serta fasilitas pendukung. Kedua, dengan adanya peta ini,
          pengunjung dapat merencanakan perjalanan mereka dengan lebih efisien
          sehingga waktu dapat digunakan secara optimal untuk menikmati berbagai
          atraksi. Ketiga, peta wisata yang detail juga mendukung promosi
          destinasi lokal dengan menyoroti keunikan dan potensi wisata yang ada
          di desa tersebut.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Tujuan dari pembuatan peta wisata ini adalah untuk menyediakan panduan
          yang jelas dan terperinci bagi wisatawan yang ingin mengeksplorasi
          Desa Pogalan. Peta ini bertujuan untuk menonjolkan berbagai atraksi
          dan fasilitas penting seperti gunung, hutan, hotel, dan tempat makan.
          Selain itu, peta ini diharapkan dapat menjadi alat bantu dalam
          merencanakan rute perjalanan yang efisien, sehingga pengunjung dapat
          menikmati pengalaman wisata dengan maksimal.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam proses pembuatan peta wisata, beberapa kegiatan utama telah
          dilakukan. Pertama, saya mengambil titik koordinat dari berbagai
          destinasi wisata di Desa Pogalan menggunakan Google Maps. Data
          koordinat tersebut kemudian diolah menggunakan Excel untuk memastikan
          akurasi dan konsistensi informasi. Selanjutnya, saya mencari dan
          memilih simbol-simbol yang relevan untuk dimasukkan ke dalam peta,
          seperti simbol gunung, hutan, hotel, tempat makan, dan destinasi
          wisata lainnya. Pemilihan simbol yang tepat memastikan bahwa informasi
          dalam peta dapat dipahami dengan mudah oleh pengguna.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dengan peta wisata yang dihasilkan, diharapkan Desa Pogalan dapat
          lebih dikenal dan dikunjungi oleh wisatawan. Keberadaan Desa Pogalan
          yang makin dikenal ini dapat membawa dampak positif bagi masyarakat
          sekitar. Potensi wisata yang dimiliki Desa Pogalan dapat terealisasi
          dan dinikmati masyarakat. Peta wisata ini pada akhirnya dapat
          mendukung pertumbuhan ekonomi lokal melalui sektor pariwisata.
        </Text>
      </>
    ),
  },

  "desain-baju-gerdu": {
    image: "/gerdu/desain-baju-cover.png",
    location:
      "Dusun Kragilan, Kelurahan Pogalan dan Rumah Pak Gendut, Dusun Gerdu",
    title: "Sosialisasi Penggunaan Canva dan Pemanfaatan AI",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Dalam era digital saat ini, teknologi telah membuka banyak kemungkinan
          baru, terutama dalam bidang desain grafis dan pemanfaatan kecerdasan
          buatan (AI). Dalam upaya untuk mempromosikan salah satu wisata di
          Dusun Kragilan. yaitu Top Selfie secara lebih efektif, dilakukan
          sosialisasi yang ditujukan khusus untuk para pengurus wisata di lokasi
          tersebut. Proker ini bertujuan untuk membekali para pengurus dengan
          keterampilan desain grafis menggunakan Canva serta pemanfaatan
          kecerdasan buatan (AI) untuk meningkatkan promosi dan visibilitas Top
          Selfie Dusun Kragilan.
        </Text>
        <br />
        <div className="flex flex-col items-center justify-between gap-x-[64px] gap-y-[32px] lg:flex-row">
          <div>
            <Text size="lg" color="secondary" className="indent-10">
              Canva, platform desain grafis yang mudah digunakan, telah menjadi
              alat yang sangat populer di kalangan profesional maupun amatir.
              Dengan Canva, siapa saja dapat membuat desain yang menarik tanpa
              memerlukan keahlian desain yang mendalam. Sosialisasi penggunaan
              Canva ini bertujuan untuk memberikan pemahaman yang lebih baik
              tentang fitur-fitur yang tersedia, seperti template desain, alat
              pengeditan gambar, dan integrasi media sosial. Kami berharap bahwa
              dengan pengetahuan ini, peserta akan dapat memanfaatkan Canva
              untuk membuat materi promosi, poster, infografis, dan berbagai
              materi visual lainnya dengan lebih mudah dan efektif.
            </Text>
            <br />
            <Text size="lg" color="secondary" className="indent-10">
              Selain itu, pemanfaatan AI dalam desain dan kreativitas juga
              merupakan aspek penting dari proker ini. Kecerdasan buatan dapat
              membantu mempercepat proses desain, meningkatkan akurasi, dan
              bahkan memberikan ide-ide inovatif yang mungkin tidak terpikirkan
              sebelumnya. Dengan menggunakan AI, kita dapat mengoptimalkan
              berbagai proses kreatif, mulai dari pengeditan foto hingga
              pembuatan desain yang disesuaikan dengan preferensi pengguna.
              Sosialisasi ini akan mengajarkan peserta tentang alat-alat AI yang
              dapat diintegrasikan dengan Canva dan bagaimana cara memaksimalkan
              teknologi ini untuk meningkatkan hasil desain mereka.
            </Text>
          </div>
          <img
            src="/gerdu/sosialisasi-canva.jpeg"
            alt=""
            width={1000}
            height={1000}
            className="aspect-auto h-full max-h-[325px] w-full max-w-[562px] rounded-[12px] object-cover"
          />
        </div>
        <br />
        <div className="flex flex-col items-center justify-between gap-x-[64px] gap-y-[32px] lg:flex-row">
          <img
            src="/gerdu/evaluasi-desain-baju.jpeg"
            alt=""
            width={1000}
            height={1000}
            className="aspect-auto h-full max-h-[325px] w-full max-w-[562px] rounded-[12px] object-cover"
          />
          <div>
            <Text size="lg" className="indent-10">
              Terdapat proker tambahan dari permintaan pemuda Dusun Gerdu, yaitu
              membuat desain baju warga Dusun. Baju ini nantinya akan digunakan
              setiap kegiatan warga. Pembuatan desain baju dilaksanakan di rumah
              Ketua Pemuda Gerdu, Pak Gendut, pada jam 8 malam bersama beberapa
              pemuda. Pembuatan baju ini tidak hanya akan memberikan produk yang
              diinginkan oleh warga tetapi juga menjadi contoh nyata bagaimana
              teknologi dan kreativitas dapat digabungkan untuk memenuhi
              kebutuhan pasar.
            </Text>
            <br />
            <Text size="lg" className="indent-10">
              Dengan inisiatif ini, diharapkan dapat memberdayakan masyarakat
              untuk lebih kreatif dan inovatif dalam berbagai bidang, serta
              memanfaatkan teknologi modern untuk mencapai hasil yang lebih
              baik. Sosialisasi penggunaan Canva dan AI adalah langkah penting
              menuju masa depan yang lebih cerdas dan terhubung, di mana setiap
              individu dapat menjadi bagian dari perubahan digital yang positif.
            </Text>
          </div>
        </div>

        <br />
      </>
    ),
  },
};
