import { H2, Text } from "@/components";
import Image from "next/image";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleSemimpen = {
  [key: string]: Article;
};

export const dataArticleSemimpen: DataArticleSemimpen = {
  "pesona-semimpen": {
    image: "/semimpen/week-1-hero.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Pesona Semimpen",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Dusun Semimpen merupakan salah satu dusun yang terletak di Kelurahan
          Ketundan, Kecamatan Pakis, Kabupaten Magelang, Jawa Tengah. Dusun yang
          berbatasan langsung dengan kawasan Taman Nasional Gunung Merbabu.
          Keindahan alam yang menawan dan kebudayaan yang masih lestari menjadi
          daya tarik bagi penduduk lokal maupun wisatawan untuk berkunjung ke
          Semimpen.
        </Text>
        <br />
        <H2 className="font-bold">Sejarah Dusun Semimpen</H2>
        <br />
        <Text size="lg" className="indent-10">
          Dusun Semimpen memiliki sejarah panjang yang tidak terlepas dari
          perkembangan Desa Pakis dan Kabupaten Magelang secara keseluruhan.
          Nama &ldquo;Semimpen&rdquo; sendiri diyakini berasal dari kata dalam
          bahasa Jawa yang berarti &ldquo;tempat tersembunyi.&rdquo; Hal ini
          mungkin merujuk pada lokasi dusun yang sedikit terpencil namun tetap
          memiliki akses yang memadai ke pusat-pusat kegiatan ekonomi dan sosial
          di sekitarnya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Sejarah Dusun Semimpen juga tidak dapat lepas dari sejarah
          kerajaan-kerajaan Jawa yang pernah berdiri di wilayah ini, seperti
          Mataram Kuno dan Mataram Islam. Warisan budaya dan tradisi dari masa
          lalu masih terlihat dalam kehidupan sehari-hari masyarakat Dusun
          Semimpen, mulai dari upacara adat hingga seni dan kerajinan tangan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Semimpen berasal dari nama nenek moyang yang mendiami daerah Dusun
          Semimpen sekarang. Sebelum menjadi dusun, Dusun Semimpen merupakan
          rumah dari nenek moyang yang konon bernama Simbah Kyai Simpen dan
          Simbah Nyai Simpen. Nama kedua Simbah ini kemudian menjadi cikal bakal
          nama Dusun Semimpen.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Tradisi dan adat Jawa di dusun ini masih sangat kental. Salah satu
          contoh tradisi yang masih dilestarikan ialah bersih dusun, yang mana
          di dalamnya terdapat kesenian bernama Ronggeng. Kesenian ini sangat
          melegenda. Dari ratusan tahun lalu hingga sekarang kesenian ini masih
          dilestarikan. Ronggeng harus dilaksanakan setiap bulan Rajab ketika
          saat itu ada adat tata cara bersih dusun dan lain-lain.
        </Text>
        <br />
        <H2 className="font-bold">Kondisi Geografis</H2>
        <br />
        <Text size="lg" className="indent-10">
          Dusun Semimpen berada di ketinggian kurang lebih 1200 meter di atas
          permukaan laut (mdpl) dengan suhu rata-rata 18-22 derajat celcius.
          Dikelilingi oleh pegunungan, siapa pun yang berada di dusun ini akan
          dimanjakan dengan indahnya pemandangan dan sejuknya udara Semimpen.
          Selain itu, letak Dusun Semimpen yang berada di bawah kaki Gunung
          Merbabu menjadikan dusun ini sebagai salah satu tempat yang memiliki
          pemandangan memukau.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dusun Semimpen memiliki iklim tropis dengan dua musim utama, yaitu
          musim hujan dan musim kemarau. Pada saat musim hujan, curah hujan dan
          intensitas hujan cukup tinggi. Hal ini menyebabkan tanah dan tanaman
          di dusun ini mendapatkan air hujan di sepanjang musim sehingga tanah
          dan tanaman tumbuh dengan sangat subur, Kondisi demikian mendukung
          kegiatan pertanian yang menjadi mata pencaharian utama masyarakat.
        </Text>
        <br />
        <H2 className="font-bold">Kehidupan Sosial dan Ekonomi</H2>
        <br />
        <Text size="lg" className="indent-10">
          Masyarakat Dusun Semimpen masih menganut nilai-nilai tradisional.
          Keramahan dan gotong royong menjadi identitas yang paling melekat pada
          masyarakat Semimpen. Kehidupan sosial di dusun ini sangat erat.
          Berbagai kegiatan masyarakat dilakukan secara bersama-sama, seperti
          kerja bakti, perayaan hari-hari besar, dan kegiatan keagamaan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Mayoritas penduduk Dusun Semimpen bekerja sebagai petani. Pertanian
          menjadi sektor ekonomi utama. Adapun tanaman unggulan yang ditanam
          ialah berbagai jenis tanaman hortikultura seperti kubis, pakcoy,
          timun, cabai, dan sawi putih. Selain bertani, beberapa penduduk
          Semimpen beternak sapi, kambing, dan unggas sebagai tambahan
          penghasilan.
        </Text>
        <br />
        <H2 className="font-bold">Kubro Dangdut (Brondut)</H2>
        <br />
        <div className="flex flex-col items-center justify-between gap-x-[64px] gap-y-[32px] lg:flex-row">
          <img
            src="/semimpen/brondut.jpg"
            alt=""
            width={1000}
            height={1000}
            className="aspect-video h-full max-h-[325px] w-full max-w-[562px] rounded-[24px] object-cover"
          />
          <Text size="lg" className="indent-10">
            Kearifan lokal dan budaya tradisional masih dijaga dengan baik di
            Dusun Semimpen. Hal ini menjadi daya tarik tersendiri bagi
            wisatawan. Salah satu kesenian menarik yang ada di Dusun Semimpen
            adalah Brondut atau Kubro Dangdut. Mengikuti perkembangan zaman
            modern, tarian kesenian Brodut menjadi kesenian yang digemari oleh
            masyarakat. Bahkan kesenian ini ditonton oleh puluhan ribu orang.
            Brondut awalnya hanya Kubro yang menggunakan iringan nyanyian
            lagu-lagu Islamiyah dan perjuangan Indonesia. Akan tetapi, seiring
            berjalannya waktu, Kubro berkembang menjadi Kubro Dangdut (Brondut)
            dengan iringan musik dangdut.
          </Text>
        </div>
        <br />
        <H2 className="font-bold">Harapan dan Masa Depan</H2>
        <br />
        <Text size="lg" className="indent-10">
          Dengan berbagai kekayaan sumber daya yang dimiliki, Dusun Semimpen
          berpotensi untuk terus berkembang dan meningkatkan kesejahteraan
          masyarakatnya. Pemerintah desa dan masyarakat setempat terus berupaya
          untuk mengembangkan sektor-sektor ekonomi potensial, termasuk
          pertanian, pariwisata dan industri kreatif. Dukungan dari berbagai
          pihak, baik pemerintah daerah maupun investor, diharapkan dapat
          mempercepat perkembangan dusun ini.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelestarian budaya dan lingkungan juga menjadi fokus utama dalam
          pembangunan Dusun Semimpen. Masyarakat setempat sangat sadar akan
          pentingnya menjaga warisan budaya dan alam yang dimiliki Upaya
          demikian bertujuan agar generasi mendatang dapat terus menikmati
          keindahan dan keunikan dusun ini.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dengan upaya bersama dan komitmen yang kuat, Dusun Semimpen dapat
          mencapai potensi optimalnya. Nilai-nilai tradisional yang tetap dijaga
          dan kondisi alam yang mendukung membuat Dusun Semimpen dapat terus
          berkembang dan maju. Pada akhirnya, kemajuan ini akan membuat
          masyarakat Dusun Semimpen makin sejahtera tanpa meninggal nilai-nilai
          luhurnya.
        </Text>
      </>
    ),
  },
  "dompet-digital": {
    image: "/semimpen/week-2-hero.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title:
      "Masyarakat Melek Teknologi: Memahami dan Menggunakan Dompet Digital",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Kemajuan teknologi digital yang pesat menjadikan dompet digital
          sebagai kebutuhan penting di masyarakat, termasuk di daerah pedesaan
          seperti Dusun Semimpen. Dompet digital adalah aplikasi atau layanan
          yang memungkinkan pengguna menyimpan uang secara elektronik dan
          melakukan berbagai transaksi tanpa uang tunai. Sosialisasi mengenai
          dompet digital di Dusun Semimpen bertujuan untuk memperkenalkan
          teknologi ini kepada masyarakat setempat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Sosialisasi dilakukan dengan pendekatan interdisipliner, yaitu
          teknologi dan internet, ekonomi/keuangan, dan hukum. Dari segi
          teknologi dan internet, pembahasan difokuskan mengenai cara teknologi
          bekerja dalam dompet digital. Dari segi ekonomi atau keuangan,
          disampaikan materi mengenai berbagai jenis atau metode digital dalam
          melakukan transaksi. Manfaat dari transaksi yang dilakukan secara
          digital juga menjadi bahan materi dari segi ekonomi. Kemudian, dari
          segi hukum, dijelaskan terkait terminologi, dasar hukum, dan kewajiban
          dari penyelenggara elektronik. Dengan pendekatan interdisipliner ini
          diharapkan dapat menambah sudut pandang dalam memandang dompet
          digital.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam sosialisasi ini, masyarakat belajar mengenai dompet digital yang
          makin marak digunakan dalam bidang usaha. Masyarakat juga diberitahu
          mengenai kelebihan serta kelemahan dari penggunaan dompet digital.
          Meskipun tema besar sosialisasi ini adalah dompet digital, pembahasan
          tidak hanya terbatas pada dompet digital. Penjelasan mengenai metode
          pembayaran digital lainnya seperti mobile banking, internet banking,
          QRIS, terminal pos, dan kartu ATM turut dijadikan bahan sosialisasi.
          Materi tambahan ini dianggap penting mengingat transaksi secara
          digital tidak hanya dilakukan melalui dompet digital, tetapi juga
          lewat metode lainnya seperti yang telah disebutkan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Cara melakukan transaksi secara praktis menjadi fitur andalan dompet
          digital. Hanya melalui <i>handphone</i> atau gawai, transaksi dapat
          dilakukan. Transaksi menjadi lebih efisien. Masyarakat tidak perlu
          lagi membawa uang tunai dalam jumlah besar. Risiko kehilangan atau
          pencurian uang pun berkurang. Selain itu, dompet digital membantu
          masyarakat mengelola keuangan mereka dengan lebih baik melalui fitur
          catatan transaksi yang tersedia dalam aplikasi. Namun, tiada gading
          yang tak retak. Dompet digital tetap memiliki risiko, seperti
          pembajakan atau saldo yang tiba-tiba hilang. Terhadap risiko tersebut
          masyarakat tetap dituntut untuk tetap waspada dan cermat menggunakan
          dompet digital.
        </Text>
      </>
    ),
  },
  "keamanan-data": {
    image: "/semimpen/data-hero.png",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Keamanan Data dan Perlindungan Data Pribadi",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Berbicara mengenai dompet digital artinya berbicara mengenai data
          pribadi. Untuk memberikan pemahaman yang utuh dan menyeluruh,
          masyarakat tidak hanya perlu tahu mengenai transaksi digital, tetapi
          juga hal yang mendasari transaksi digital tersebut. Hal itu ialah data
          pribadi. Tiap transaksi yang dilakukan dengan dompet digital
          melibatkan data pribadi kita. Banyaknya keunggulan yang dimiliki
          dompet digital tidak menghilangkan risiko di dalamnya. Sayangnya,
          risiko terhadap dompet digital juga merupakan risiko terhadap data
          pribadi. Berdasarkan hal tersebut, kami, tim KKN-PPM UGM Dusun
          Semimpen, berinisiatif mengadakan sosialisasi mengenai keamanan data
          pribadi. Sosialisasi ini bertujuan untuk memberikan pemahaman kepada
          masyarakat tentang hak setiap orang atas data pribadi, pentingnya
          melindungi data pribadi dari berbagai ancaman dan kejahatan digital,
          risiko atas data pribadi, dan pencegahan serta mitigasi dari ancaman
          terhadap data pribadi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Sosialisasi ini turut melibatkan partisipasi masyarakat. Masyarakat
          diajak untuk melihat proses pencurian data pribadi dan cara untuk
          mencegah data-data pribadi itu dicuri. Sosialisasi ini dibuka dengan
          materi-materi yang berupa teori, seperti pengertian dan hak atas data
          pribadi. Masyarakat perlu terlebih dahulu mengetahui apa itu data
          pribadi supaya mengerti pentingnya menjaga data pribadi. Untuk
          memudahkan pemahaman masyarakat, digunakan analogi yang menyamakan
          data pribadi dengan aset atau harta. Analogi itu diharapkan dapat
          meningkatkan kesadaran masyarakat untuk benar-benar menjaga data
          pribadinya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Setelah selesai dengan paparan teoritis, sosialisasi dilanjutkan
          dengan praktik. Masyarakat diberikan simulasi mengenai berbagai
          ancaman keamanan data yang mungkin mereka hadapi dalam kehidupan
          sehari-hari. Salah satu modus operandi pencurian data yang ditekankan
          dalam simulasi ini adalah phising, yaitu upaya untuk memperoleh
          informasi pribadi dengan menyamar sebagai entitas yang terpercaya.
          Simulasi dilakukan dengan mendemonstrasikan bagaimana pemilik web
          dapat melihat data-data pribadi yang telah dimasukkan dalam webnya.
          Selain web, kami juga mendemonstrasikan bagaimana email yang
          mengatasnamakan suatu institusi terpercaya meminta data pribadi.
          Adapun terkait cara mengamankan data pribadi pada perangkat digital
          diberikan beberapa tips, seperti mengaktifkan fitur enkripsi, memasang
          perangkat lunak keamanan, dan secara rutin memperbarui sistem operasi
          serta aplikasi yang digunakan.
        </Text>
      </>
    ),
  },
  "belajar-calistung": {
    image: "/semimpen/calistung-hero.png",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Belajar Calistung (Baca, Tulis, Hitung) untuk Anak-Anak",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Program Belajar Calistung (Baca Tulis Hitung) serta Bahasa Inggris di
          Dusun Semimpen merupakan inisiatif yang bertujuan untuk meningkatkan
          minat belajar anak-anak dan membantu mereka dalam proses belajar.
          Program ini menargetkan semua anak mulai dari yang belum bersekolah
          hingga kelas 6 sekolah dasar, sehingga mencakup berbagai tingkat
          kemampuan dan kebutuhan pendidikan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi yang diajarkan dalam sesi Calistung meliputi kemampuan dasar
          membaca, menulis, dan berhitung. Ini merupakan keterampilan dasar yang
          sangat penting untuk fondasi pendidikan anak-anak. Dalam sesi Bahasa
          Inggris, anak-anak diajarkan salam dan nama-nama benda dalam bahasa
          Inggris, memberikan mereka dasar yang baik dalam bahasa asing yang
          akan sangat berguna di masa depan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Metode pengajaran yang diterapkan dalam program ini sangat bervariasi
          dan disesuaikan dengan kebutuhan anak-anak. Untuk belajar menulis,
          anak-anak menggunakan garis bantu, yang membantu mereka mengembangkan
          kemampuan menulis dengan lebih terstruktur. Pembelajaran membaca
          dilakukan dengan menggunakan buku cerita yang menarik, sehingga
          anak-anak dapat menikmati proses belajar sambil meningkatkan kemampuan
          membaca mereka. Untuk belajar berhitung, anak-anak diberikan soal-soal
          latihan yang dirancang untuk mengasah kemampuan mereka dalam
          matematika secara bertahap dan menyenangkan. Belajar Bahasa Inggris
          dilakukan melalui metode diskusi dan tanya jawab, yang mendorong
          partisipasi aktif dan pemahaman yang lebih baik terhadap materi yang
          diajarkan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Sebanyak 30 anak ikut serta dalam program ini, yang dilaksanakan dari
          tanggal 16 Juli 2024 hingga 1 Agustus 2024 di rumah Pak Wardi. Lokasi
          ini dipilih karena aksesibilitasnya yang mudah bagi anak-anak dan
          orang tua di dusun tersebut.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Para pengajar yang terlibat dalam program ini adalah Saadah
          Mardatillah, Dita Vitria Dewi, Afifah Eka Teriani, dan Sofiana Hanifa.
          Mereka berkomitmen untuk memberikan pendidikan yang terbaik bagi
          anak-anak Dusun Semimpen. Respon dari anak-anak sangat antusias,
          terlihat dari semangat mereka dalam mengikuti setiap sesi. Dukungan
          orang tua juga sangat positif, dibuktikan dengan banyaknya orang tua
          yang mengantarkan anak-anak mereka ke lokasi pelaksanaan program.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Metode khusus diterapkan untuk membuat kegiatan belajar mengajar lebih
          menarik. Misalnya, pelajaran membaca dilakukan dengan membaca
          buku-buku dongeng, pelajaran menulis dengan mewarnai, pelajaran
          matematika dengan menggunakan cara perhitungan yang disederhanakan,
          dan pelajaran Bahasa Inggris dengan materi yang berkaitan dengan
          kehidupan sehari-hari.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Diharapkan program ini dapat meningkatkan semangat dan motivasi
          anak-anak dalam belajar, sehingga mereka memiliki dasar pendidikan
          yang lebih kuat untuk masa depan mereka. Dengan program ini, anak-anak
          Dusun Semimpen diharapkan dapat memiliki akses pendidikan yang lebih
          baik dan lebih siap menghadapi tantangan pendidikan di masa depan.
        </Text>
      </>
    ),
  },
  "keuangan-rumah-tangga": {
    image: "/semimpen/keuangan-rumah-tangga-hero.png",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title:
      "Sosialisasi Perencanaan Keuangan Rumah Tangga untuk Dana Pendidikan Anak",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Salah satu program kerja yang telah dilaksanakan adalah
          &ldquo;Sosialisasi &lsquo;Masa Depan Cerah, Dimulai dari Perencanaan
          Keuangan untuk Pendidikan Anak!&rsquo;&rdquo;. Kegiatan yang
          disampaikan oleh Sofiana Hanifa ini bertujuan untuk memberikan
          pemahaman kepada ibu-ibu dan remaja putri tentang bagaimana mengelola
          keuangan sebagai perencanaan dana pendidikan di masa depan. Lokasi
          kegiatan ini berada di salah satu rumah warga di dusun Semimpen.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Target peserta dari program ini adalah ibu-ibu dan remaja putri dusun
          Semimpen. Kegiatan utama yang dilakukan adalah pemaparan materi dan
          sesi tanya jawab. Pelaksanaan sosialisasi ini dimulai dengan sambutan
          kepada tokoh penting dalam perkumpulan ibu-ibu, lalu dilanjutkan
          dengan pemaparan materi yang disertai <i>handout</i> materi agar dapat
          disimak dan dibawa pulang oleh peserta.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi yang disampaikan meliputi pengertian mengelola keuangan,
          cara-cara mengelola keuangan, cara menganggarkan atau merencanakan
          pemasukan dan pengeluaran, disertakan pula informasi mengenai media
          atau tempat untuk mengelola keuangan, cara memilih lembaga atau
          partner untuk berinvestasi serta menabung, dan rencana lain untuk dana
          pendidikan anak seperti beasiswa dan asuransi pendidikan. Durasi
          pemaparan materi adalah 60 menit, diikuti dengan sesi tanya jawab
          selama 30 menit.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Respons dari ibu-ibu dan remaja putri sangat antusias, dibuktikan
          dengan banyaknya pertanyaan yang diajukan pada sesi tanya jawab.
          Mereka bertanya sesuai topik dan menanyakan informasi lebih lanjut
          terkait materi yang diberikan. Tantangan terbesar dalam program ini
          adalah menganalisis cara terbaik untuk menyusun materi terkait
          mengelola keuangan untuk masyarakat yang mayoritas petani dengan
          penghasilan dan pengeluaran yang sulit diprediksi atau dianggarkan
          setiap bulannya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Manfaat yang diharapkan bagi peserta adalah agar sosialisasi ini dapat
          menambah pemahaman terkait pengelolaan keuangan dan harapannya dapat
          menjawab masalah keuangan masyarakat yang selalu tidak terencana,
          serta mengatasi tingkat putus sekolah anak yang disebabkan oleh alasan
          finansial. Keberhasilan program ini diukur dari respon peserta saat
          bertanya. Saat pelaksanaan sosialisasi, mereka banyak bertanya lebih
          lanjut dan berniat memperdalam pemahaman terkait pengelolaan keuangan
          untuk dana pendidikan, jadi dapat disimpulkan bahwa tujuan
          meningkatkan pemahaman masyarakat telah tercapai.
        </Text>
      </>
    ),
  },
  "etika-sosial-media": {
    image: "/semimpen/etika-medsos.jpeg",
    location: "SDN Ketundan 1, Kelurahan Ketundan",
    title: "Etika Media Sosial & UU ITE",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Facebook, twitter, instagram, dan tiktok menjadi aplikasi yang
          seringkali ditemui dalam kehidupan sehari-hari. Mulai dari anak-anak
          hingga orang tua semuanya hampir memiliki akun sosial media. Tanyakan
          pada anak manapun di Dusun Semimpen tentang lagu “sekop-sekop”,
          niscaya mereka akan mulai bernyanyi sambil berjoget mengikuti gerakan
          yang viral di tiktok atau media sosial lainnya. Masifnya penetrasi
          sosial media dalam kehidupan masyarakat telah mengaburkan yang nyata
          dan yang maya. Media sosial menjadi dunia sendiri. Perbedaan antara
          yang nyata dan maya ini pun turut menciptakan cara kehidupan sendiri
          di tiap dunia. Dunia maya menawarkan anonimitas sehingga seringkali
          masyarakat bertindak sesuka hati tanpa mengindahkan etika yang ada.
          Kami, dari tim KKN-PPM UGM, kemudian memutuskan untuk mengadakan
          sosialisasi terkait etika sosial media dan aspek hukum dalam bermedia
          sosial, khususnya Undang-Undang Informasi dan Transaksi Elektronik (UU
          ITE).
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi dalam sosialisasi berisikan pentingnya etika dalam bermedia
          sosial, dampak positif dan negatif dari sosial media, etika media
          sosial yang perlu diajarkan pada anak, dan hukum yang mengatur
          aktivitas bermedia sosial. Dua materi terakhir menjadi fokus dalam
          sosialisasi ini. Orang tua/wali murid dijelaskan bahwa anak perlu
          diajarkan untuk kritis terhadap informasi, sadar akan pentingnya
          privasi, bijak memposting, dan hati-hati dalam melakukan interaksi.
          Terkait materi UU ITE, dijelaskan mengenai dasar hukum yang mengatur
          tindakan bermedia sosial, tindakan yang dilarang dalam UU ITE, serta
          pengecualian dari tindakan yang dilarang dalam UU ITE.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi dalam sosialisasi berisikan pentingnya etika dalam bermedia
          sosial, dampak positif dan negatif dari sosial media, etika media
          sosial yang perlu diajarkan pada anak, dan hukum yang mengatur
          aktivitas bermedia sosial. Dua materi terakhir menjadi fokus dalam
          sosialisasi ini. Orang tua/wali murid dijelaskan bahwa anak perlu
          diajarkan untuk kritis terhadap informasi, sadar akan pentingnya
          privasi, bijak memposting, dan hati-hati dalam melakukan interaksi.
          Terkait materi UU ITE, dijelaskan mengenai dasar hukum yang mengatur
          tindakan bermedia sosial, tindakan yang dilarang dalam UU ITE, serta
          pengecualian dari tindakan yang dilarang dalam UU ITE.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelaksanaan sosialisasi ini bertujuan untuk mengingatkan masyarakat
          bahwa media sosial bukan suatu ruang kosong yang di dalamnya tidak
          berlaku etika dan hukum sebagaimana di dunia nyata. Sosialisasi ini
          mendorong penerapan etika dalam dunia nyata ke media sosial. Meskipun
          media sosial menawarkan anonimitas, diharapkan masyarakat Dusun
          Semimpen tetap menjaga perilakunya dalam media sosial. Dengan begitu,
          masyarakat Dusun Semimpen telah turut menciptakan ruang yang aman
          dalam bermedia sosial dan terlebih penting menghindari masalah hukum
          di lain hari.
        </Text>
      </>
    ),
  },
  "simulasi-anbk": {
    image: "/semimpen/anbk.jpeg",
    location: "SDN Ketundan 1, Kelurahan Ketundan",
    title: "Pelatihan Simulasi Ujian ANBK",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Seiring dengan kemajuan teknologi, dunia pendidikan juga mengalami
          transformasi signifikan. Salah satu langkah besar yang diambil dalam
          meningkatkan kualitas pendidikan di Indonesia adalah pelaksanaan
          Asesmen Nasional Berbasis Komputer (ANBK). Dalam rangka mempersiapkan
          siswa menghadapi ANBK, SD Negeri Ketundan 1 mengadakan pelatihan
          khusus mengenai penggunaan Chromebook. Chromebook ini nantinya menjadi
          perangkat utama bagi siswa ketika mengerjakan ANBK.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan penggunaan Chromebook bertujuan untuk memastikan bahwa siswa
          mampu mengoperasikan Chromebook beserta perangkat lunak di dalamnya
          saat mengikuti ANBK. Chromebook, yang merupakan laptop berbasis sistem
          operasi Chrome OS, memiliki antarmuka yang sederhana dan intuitif,
          sehingga cocok digunakan oleh siswa SD. Pelatihan ini dirancang untuk
          mengenalkan siswa pada Chromebook, pengoperasian Chromebook, serta
          berbagai aplikasi yang mungkin diperlukan selama ANBK.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan ini dimulai dengan pengenalan dasar mengenai Chromebook,
          termasuk cara menyalakan perangkat, masuk ke akun Google, serta
          navigasi dasar seperti membuka dan menutup aplikasi. Siswa juga
          diajarkan tentang cara menuliskan dan membuka suatu situs atau
          website. Hal ini penting mengingat untuk mengerjakan ANBK, siswa perlu
          membuka situs yang berisikan soal-soal ANBK. Selain itu, mereka juga
          diberi tips dan trik untuk mengatasi masalah teknis yang mungkin
          terjadi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan ini dilakukan dengan melakukan simulasi ANBK. Dalam simulasi
          ini, siswa diuji dalam kondisi yang mirip dengan asesmen sesungguhnya,
          mulai dari menyalakan chromebook, menuliskan website yang dituju,
          menjawab soal, mengumpulkan jawaban, dan mematikan Chromebook.
          Pengerjaan soal dilakukan melalui suatu google form. Siswa diminta
          untuk menuliskan link google form tersebut pada search bar dan mengisi
          data diri pada halaman pertama google form. Setelah itu, siswa
          mengerjakan soal yang telah dirancang mirip dengan soal-soal ANBK.
          Apabila telah selesai mengerjakan soal, para siswa mengumpulkan
          jawaban pada google form dan mematikan Chromebook. Hal ini bertujuan
          untuk memberikan gambaran ANBK kepada para siswa serta
          mengidentifikasi area yang perlu diperbaiki sebelum asesmen yang
          sebenarnya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan penggunaan Chromebook di SDN 1 Ketundan merupakan langkah
          penting dalam mempersiapkan siswa menghadapi ANBK dengan percaya diri
          dan keterampilan yang memadai. Dengan adanya pelatihan ini, diharapkan
          siswa tidak hanya mampu mengerjakan soal-soal ANBK dengan baik, tetapi
          juga mampu menggunakan Chromebook ketika akan mengerjakan ANBK dan
          bahkan untuk pembelajaran di masa mendatang.
        </Text>
      </>
    ),
  },
  "mineral-blok": {
    image: "/semimpen/mineral-blok.jpeg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Pelatihan Pembuatan Mineral Blok untuk Peternak di Dusun Semimpen",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Program Pelatihan Pembuatan Mineral Blok diselenggarakan dengan tujuan
          utama untuk memberikan pengetahuan dan kemampuan kepada peternak Dusun
          Semimpen dalam pembuatan mineral blok. Mineral blok adalah pakan
          suplemen atau tambahan yang telah dipadatkan, mengandung banyak
          vitamin dan mineral. Mineral blok ini bertujuan untuk memastikan
          kebutuhan mineral hewan ternak tercukupi dan bobot dari ternak
          meningkat sehingga ternak menjadi lebih sehat dan produktif. Meskipun
          mayoritas penduduk Dusun Semimpen bekerja sebagai petani, beberapa di
          antaranya memiliki ternak, seperti ternak ayam, sapi, dan kambing.
          Program ini diikuti oleh lima orang warga. Pelatihan yang berlangsung
          pada Kamis, 08 Agustus 2024, ini dimulai dari jam 18.00 hingga 21.00
          dan dilaksanakan di rumah Bapak Wardi Gondrong.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi yang dibahas mencakup pengertian mineral blok, pentingnya
          mineral blok, manfaat mineral blok bagi ternak, serta cara pembuatan
          mineral blok itu sendiri. Penyampaian materi dilakukan terlebih dulu
          dengan cara presentasi. Materi yang diberikan mencakup manfaat
          pemberian mineral blok, hal-hal yang harus diperhatikan saat
          memberikan mineral blok ke ternak, dan cara pembuatannya. Setelah itu,
          dilanjutkan dengan praktik langsung, sehingga warga dapat langsung
          mempraktekkan cara membuat mineral blok dengan benar.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Antusiasme warga cukup tinggi dalam kegiatan ini. Selama sesi
          pemaparan materi, masyarakat secara aktif mengajukan
          pertanyaan-pertanyaan berkaitan dengan praktik ternak yang selama ini
          dijalankan. Antusiasme ini tidak hanya dalam hal mengajukan
          pertanyaan. Pemateri terkadang mengajukan pertanyaan kepada peserta
          kegiatan di tengah pemaparan materi dan peserta menjawab tiap
          pertanyaan dengan semangat. Dalam sesi demonstrasi pun demikian.
          Masyarakat bertanya terkait tiap-tiap bahan atau tahapan yang
          dilakukan dalam pembuatan mineral blok. Diskusi yang terjadi antara
          pemateri dengan peserta atau masyarakat mempertajam pemahaman dari
          kedua belah pihak terkait mineral blok.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Program ini tidak dipungut biaya. Pelatihan dilakukan secara terbuka
          sehingga semua anggota kelompok tani dan warga pemilik ternak dapat
          berpartisipasi tanpa harus merogoh kocek sepeser pun. Pelatihan ini
          pun tidak menyediakan sertifikasi atau penghargaan khusus bagi
          peserta. Meskipun demikian, diskusi, pengetahuan dan keterampilan yang
          diperoleh selama pelatihan menjadi nilai tambah yang tidak kalah
          bermanfaat bagi peserta.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Manfaat yang diharapkan dari pelatihan ini adalah agar peserta dapat
          membuat mineral blok secara mandiri dan mengaplikasikan pemberian
          mineral blok secara tepat kepada ternak mereka. Dengan demikian,
          kesehatan dan produktivitas ternak dapat meningkat. Pada akhirnya,
          program pelatihan ini diharapkan dapat memberikan dampak positif
          secara keseluruhan bagi komunitas peternak setempat, seperti
          peningkatan pengetahuan dalam manajemen kesehatan ternak dan
          peningkatan pengembangan usaha ternak yang lebih produktif dan
          berkelanjutan.
        </Text>
      </>
    ),
  },
  "edukasi-gizi-seimbang": {
    image: "/semimpen/edukasi-gizi-hero.png",
    location: "SDN Ketundan 1, Kelurahan Ketundan",
    title: "Edukasi Gizi Seimbang untuk Masa Depan Cerah",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Pada tanggal 24 Juli 2024, tim KKN Dusun Semimpen melaksanakan program
          &ldquo;Edukasi Gizi Seimbang untuk Masa Depan Cerah&rdquo; di SD N
          Ketundan 1. Kegiatan ini bertujuan untuk menyadarkan anak-anak akan
          pentingnya mengonsumsi makanan bergizi, seperti sayur, buah, dan
          protein, demi mendukung pertumbuhan dan kesehatan mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kesadaran akan pentingnya gizi seimbang adalah salah satu fondasi
          utama dalam membangun generasi yang sehat dan cerdas. Oleh karena itu,
          program ini dirancang khusus untuk anak-anak, mengingat pentingnya
          pembentukan kebiasaan makan yang baik sejak dini. Anak-anak yang
          berpartisipasi dalam kegiatan ini berjumlah 60 siswa. Mereka tampak
          sangat antusias sejak awal acara dimulai.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi yang disampaikan dalam kegiatan ini mencakup konsep &ldquo;Isi
          Piringku,&rdquo; yang membantu anak-anak mengenal jenis-jenis makanan
          pokok, lauk-pauk, sayur, dan buah yang seimbang. Melalui konsep ini,
          anak-anak diajarkan bagaimana mengatur porsi makan mereka agar
          seimbang dan bergizi. Kami juga mengenalkan mereka pada berbagai jenis
          makanan sehat yang harus ada dalam setiap kali makan. Tidak hanya
          berupa teori, kami juga menyediakan poster &ldquo;Isi Piringku&rdquo;
          yang menjadi alat bantu visual dalam menjelaskan materi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Metode penyampaian materi dilakukan dengan cara diskusi interaktif dan
          permainan edukatif. Salah satu permainan yang sangat diminati adalah
          permainan menempel gambar makanan ke dalam poster &ldquo;Isi
          Piringku&rdquo; sesuai dengan kategori yang benar. Permainan ini
          selain menyenangkan, juga memberikan pemahaman praktis kepada
          anak-anak tentang cara menyusun makanan mereka sehari-hari. Kegiatan
          ini disambut dengan antusiasme tinggi, di mana anak-anak bersemangat
          dalam menempelkan gambar dan berusaha untuk menjawab dengan benar
          setiap pertanyaan yang diajukan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Selain itu, kami juga membagikan pisang dan susu kepada anak-anak
          sebagai contoh nyata pentingnya konsumsi makanan bergizi. Langkah ini
          dilakukan untuk memberikan pemahaman langsung tentang manfaat
          mengonsumsi makanan sehat. Anak-anak tampak senang menerima pisang dan
          susu tersebut dan dengan cepat mengonsumsinya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Respons dari anak-anak sangat positif; mereka menunjukkan antusiasme
          dan interaksi yang tinggi sepanjang kegiatan. Hal ini terlihat dari
          banyaknya pertanyaan yang diajukan oleh anak-anak mengenai gizi
          seimbang dan manfaat dari berbagai jenis makanan. Tanggapan ini
          menunjukkan bahwa anak-anak mulai memahami pentingnya mengonsumsi
          makanan bergizi untuk mendukung kesehatan mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kolaborasi dengan pihak sekolah berjalan dengan sangat baik. Pihak
          sekolah menyambut kami dengan tangan terbuka dan mendukung penuh
          pelaksanaan program ini. Dukungan ini sangat penting untuk
          keberhasilan kegiatan dan penerimaan informasi oleh siswa. Para guru
          juga terlibat aktif dalam membantu pelaksanaan kegiatan dan memastikan
          anak-anak dapat mengikuti seluruh rangkaian acara dengan baik.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Hasil dari kegiatan ini sangat memuaskan. Anak-anak menjadi lebih
          sadar akan pentingnya menerapkan konsep &ldquo;Isi Piringku&rdquo;
          dalam kehidupan sehari-hari mereka. Mereka juga terlihat lebih
          bersemangat untuk mengonsumsi sayur, yang sebelumnya mungkin kurang
          diminati. Kegiatan ini diharapkan dapat membentuk kebiasaan makan
          sehat yang berkelanjutan bagi anak-anak, membawa mereka menuju masa
          depan yang lebih cerah dan sehat.
        </Text>
      </>
    ),
  },
  "pemilahan-sampah": {
    image: "/semimpen/pemilahan-sampah.jpg",
    location: "SDN Ketundan 1, Kelurahan Ketundan",
    title:
      "Sosialisasi dan Pembuatan Poster Pemilahan Sampah Kepada Anak – Anak",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Program Sosialisasi dan Pembuatan Poster Pemilahan Sampah yang
          dilaksanakan di SD Negeri Ketundan 1 bertujuan untuk meningkatkan
          kesadaran lingkungan dan membentuk generasi peduli sampah. Melalui
          kegiatan ini, diharapkan anak-anak dapat memahami pentingnya pemilahan
          sampah serta berkontribusi dalam menjaga kebersihan lingkungan di
          sekitar mereka. Kegiatan ini diawali dengan sesi presentasi yang
          menyajikan materi utama tentang jenis-jenis sampah, cara pemilahan
          sampah, dan bagaimana mengolah sampah dengan benar. Pemahaman ini
          sangat penting agar anak-anak dapat mengenali perbedaan antara sampah
          organik dan anorganik, serta bagaimana sampah tersebut dapat diolah
          atau didaur ulang untuk mengurangi dampak negatif terhadap lingkungan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Setelah sesi presentasi, anak-anak diajak untuk melakukan praktek
          langsung pemilahan sampah. Dalam sesi ini, mereka diberi berbagai
          contoh sampah dan diminta untuk mengelompokkannya ke dalam kategori
          yang tepat. Praktek ini bertujuan agar mereka tidak hanya memahami
          konsep secara teori, tetapi juga bisa menerapkannya dalam kehidupan
          sehari-hari. Aktivitas ini juga dirancang untuk meningkatkan interaksi
          dan partisipasi aktif anak-anak, yang ternyata mendapat respons yang
          sangat positif. Bagian dari program ini juga melibatkan pembuatan
          poster tentang pemilahan sampah. Poster ini dibuat oleh pemateri
          sebagai panduan visual yang akan dipasang di sekitar sekolah. Dengan
          adanya poster ini, diharapkan pesan tentang pentingnya pemilahan
          sampah akan lebih mudah diingat dan dipahami oleh anak-anak, bahkan
          setelah kegiatan sosialisasi selesai.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dampak yang diharapkan dari program ini cukup luas. Dalam jangka
          pendek, diharapkan anak-anak menjadi lebih peduli terhadap lingkungan
          dan mulai menerapkan kebiasaan memisahkan sampah di rumah dan di
          sekolah. Dalam jangka panjang, program ini bertujuan untuk menciptakan
          lingkungan yang lebih bersih dan mendidik generasi muda yang memiliki
          kesadaran tinggi terhadap pentingnya menjaga kebersihan lingkungan.
          Melihat respons positif dari anak-anak selama kegiatan berlangsung,
          program ini memiliki potensi besar untuk dilanjutkan dan dikembangkan
          lebih lanjut. Rencana untuk melanjutkan program ini di masa depan
          sangat penting karena menjaga kebersihan lingkungan adalah tanggung
          jawab yang harus terus dijaga. Dengan adanya program berkelanjutan,
          diharapkan kesadaran lingkungan ini akan semakin mengakar di kalangan
          anak-anak dan mampu membawa perubahan positif bagi komunitas sekitar.
        </Text>
      </>
    ),
  },
  "konversi-limbah": {
    image: "/semimpen/konversi-limbah.jpeg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Peningkatan Kreativitas Anak dengan Konversi Limbah menjadi Mainan",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Ketika kami sedang berkeliling di Dusun Semimpen, kami disapa dan
          didatangi oleh anak-anak setempat. Dengan agak malu-malu, anak-anak
          menghampiri kami untuk berkenalan dan mengobrol. “Halo” sapa kami
          bertujuh kepada anak-anak. Tidak disangka-sangka satu kata sapaan kami
          dapat memecah rasa canggung dan malu di antara anak-anak. Mereka pun
          mendatangi kami dengan wajah cerah dan senyum di wajah. Dusun Semimpen
          memang sering menjadi tempat KKN. Anak-anak pun sudah terbiasa dengan
          mas-mas dan mbak-mbak KKN yang tinggal di Semimpen untuk sementara
          waktu sehingga hanya perlu sedikit waktu untuk merasa dekat. Setelah
          merasa nyaman, anak-anak menunjukkan kepada kami mainan-mainan yang
          mereka buat sendiri atau beli. Mainan-mainan itu mayoritas berupa
          kendaraan truk. Selagi kami melihat mainan mereka, kami teringat
          tentang sampah yang ada di sini. Sampah memang menjadi salah satu
          permasalahan sentral di dusun ini. Selain gunung, pepohonan, dan
          sawah, kami juga mendapati pemandangan berupa sampah kubis, sawi,
          galon dan botol bekas di pinggiran jalan. Kami pun mencari cara
          bagaimana semangat anak-anak dalam mainan ini dapat mengurangi sampah
          yang berserakan. Jawaban itu pun kami temukan dalam program konversi
          limbah menjadi mainan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Program ini melibatkan anak-anak secara aktif. Anak-anak mengumpulkan
          bahan-bahan dari sampah, seperti botol bekas, galon bekas, dan sisa
          kertas. Kemudian, pada tanggal yang telah ditentukan, yaitu pada 19
          Juli 2024, anak-anak datang dan berkumpul untuk belajar cara membuat
          mainan dari limbah. Kami mendemonstrasikan cara membuat mainan dan
          anak-anak mengikuti. Tiap-tiap anak membuat mainannya masing-masing
          dari bahan yang telah mereka bawa sendiri. Dalam demonstrasi ini, anak
          tidak dituntut untuk secara mutlak mengikuti instruksi atau cara
          pembuatan yang ditunjukkan oleh Bintang Beni Elohim sebagai PIC utama
          program ini. Anak-anak tetap memiliki ruang kreativitas dalam
          mengkreasikan mainan. Misalnya dalam bentuk potongan botol atau galon
          atau kertas, anak-anak diberikan kebebasan untuk mengekspresikan
          preferensinya terhadap suatu bentuk tertentu. Begitu juga dengan
          pewarnaan. Merah, biru atau warna apapun bebas untuk dipilih asalkan
          anak-anak senang dan memang mainannya tetap dapat dibuat. Apabila ada
          anak yang kesulitan, maka kami, khususnya mas Bintang Beni Elohim akan
          segera membantu dan memberikan saran terkait bentuk, cara, atau warna
          yang dipilih untuk membuat mainan. Dengan cara ini, selain sadar akan
          pentingnya pengolahan sampah, anak-anak juga diajarkan untuk menjadi
          pribadi yang kreatif.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Antusiasme anak-anak sangat tinggi terhadap program ini. Sebelum
          pelaksanaan, anak-anak seringkali menghampiri kami untuk “menagih
          janji” bahwa kami akan mengajarkan mereka cara membuat mainan dari
          barang-barang bekas atau limbah. Anak-anak pun turut membawa
          teman-temannya pada hari pelaksanaan untuk bersama-sama membuat
          mainan. Selama pelaksanaan pun anak-anak terlihat dan terdengar sangat
          bahagia. Anak-anak mengamati cara pembuatan mainan dengan tekun dan
          cermat. Anak-anak pun bertanya atau meminta bantuan apabila tidak
          mengerti atau hasilnya tidak sesuai dengan contoh. Terlebih, ketika
          mainan telah berhasil diciptakan anak-anak dengan segera memainkannya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Program konversi limbah menjadi mainan memiliki banyak manfaat,
          khususnya bagi anak-anak. Pertama, anak-anak menjadi lebih sadar akan
          pentingnya menjaga lingkungan dari sampah. Kedua, anak-anak belajar
          berpikir kreatif karena dalam proses membuat mainan itu, diberi
          kebebasan untuk membuat mainan sesuai imajinasi masing-masing.
          Kemudian yang terakhir, program ini dapat menimbulkan jiwa
          kewirausahaan anak-anak karena telah mendapatkan keterampilan membuat
          mainan dari limbah atau barang bekas.
        </Text>
      </>
    ),
  },
  "penanaman-jahe-dan-sereh": {
    image: "/semimpen/toga.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Pelatihan Penanaman Jahe dan Sereh sebagai Tanaman Obat Keluarga",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Program Pelatihan Penanaman Jahe dan Sereh di Dusun Semimpen
          dilaksanakan dengan tujuan utama untuk meningkatkan pemahaman dan
          pengetahuan masyarakat mengenai jenis-jenis dan manfaat tanaman obat
          keluarga (TOGA). Pelatihan ini difokuskan pada dua tanaman utama,
          yaitu jahe dan sereh, yang dikenal memiliki manfaat kesehatan yang
          luas serta mudah dibudidayakan di lingkungan rumah. Pemilihan jahe dan
          sereh sebagai tanaman yang diperkenalkan dalam program ini didasari
          oleh beberapa alasan penting. Kedua tanaman ini tidak hanya mudah
          dibudidayakan, tetapi juga memiliki banyak manfaat kesehatan yang
          sudah dikenal luas oleh masyarakat. Jahe, misalnya, dapat digunakan
          sebagai obat alami untuk berbagai masalah pencernaan dan peradangan,
          sementara sereh dikenal efektif dalam mengatasi masalah pencernaan dan
          meningkatkan sistem kekebalan tubuh. Dengan potensi manfaat yang besar
          dan cara penanaman yang sederhana, jahe dan sereh menjadi pilihan
          ideal untuk diperkenalkan kepada warga sebagai tanaman obat keluarga.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan ini melibatkan ibu-ibu rumah tangga sebagai peserta utama,
          karena mereka dianggap memiliki peran penting dalam pengelolaan
          kebutuhan kesehatan keluarga sehari-hari. Selama pelatihan, para
          peserta diberikan materi yang mencakup teknik penanaman, perawatan
          tanaman, serta pemanfaatan jahe dan sereh sebagai obat herbal. Dengan
          demikian, ibu-ibu rumah tangga dapat memahami bagaimana cara menanam
          dan merawat tanaman tersebut di pekarangan rumah mereka, serta
          memanfaatkannya untuk keperluan kesehatan keluarga. Metode pelatihan
          yang digunakan adalah kombinasi antara penjelasan teori dan praktik
          langsung. Selain mendapatkan pengetahuan teoritis, setiap peserta juga
          diberikan bibit jahe dan sereh untuk ditanam di rumah masing-masing.
          Pelatihan ini dilaksanakan di halaman rumah warga, menciptakan suasana
          yang nyaman dan akrab sehingga peserta dapat belajar dengan lebih
          santai dan fokus. Antusiasme dan partisipasi warga selama pelatihan
          sangat positif. Para peserta aktif bertanya dan menunjukkan minat yang
          besar terhadap materi yang disampaikan. Hal ini menunjukkan bahwa
          masyarakat Dusun Semimpen sangat responsif terhadap upaya peningkatan
          pengetahuan dan keterampilan yang berhubungan dengan kesehatan dan
          kemandirian keluarga.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Hasil yang diharapkan dari pelatihan ini adalah tersedianya tanaman
          obat di setiap rumah di Dusun Semimpen sehingga warga dapat lebih
          mandiri dalam memenuhi kebutuhan obat-obatan alami. Selain itu, dalam
          jangka panjang, diharapkan program ini dapat berkontribusi pada
          peningkatan ekonomi warga, terutama jika mereka mampu mengembangkan
          budidaya tanaman ini dalam skala yang lebih besar. Dengan demikian,
          Dusun Semimpen dapat menjadi contoh bagi desa-desa lain dalam
          mengoptimalkan potensi tanaman obat keluarga untuk kesejahteraan
          masyarakat.
        </Text>
      </>
    ),
  },
  "layanan-posyandu-dan-mpasi": {
    image: "/semimpen/mpasi.jpg",
    location: "Dusun Bangsari, Kelurahan Ketundan",
    title:
      "Penguatan Layanan Posyandu dan Sosialisasi MPASI: Meningkatkan Kesehatan Anak di Dusun Semimpen",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Pada tanggal 20 Juli 2024, tim KKN Dusun Semimpen melaksanakan program
          kerja &ldquo;Penguatan Layanan Posyandu dan Sosialisasi MPASI&rdquo;
          di Paud Bangsal, Ketundan. Kegiatan ini bertujuan untuk meningkatkan
          kualitas pelayanan Posyandu di Dusun Semimpen serta memberikan edukasi
          yang mendalam mengenai pemberian MPASI (Makanan Pendamping ASI) yang
          tepat. Program ini dirancang untuk membantu kader Posyandu dalam
          melaksanakan tugas mereka dengan lebih efektif dan untuk mengedukasi
          para ibu tentang pentingnya memberikan makanan yang sesuai untuk
          anak-anak mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Salah satu fokus utama dari kegiatan ini adalah membantu kader
          Posyandu dalam menjalankan tugasnya. Kami terjun langsung dalam proses
          pengukuran tinggi badan, berat badan, lingkar lengan, dan kepala anak,
          serta pencatatan data yang diperlukan. Selain itu, kami juga
          memberikan edukasi kepada ibu-ibu mengenai MPASI, yaitu jenis makanan
          yang tepat untuk anak berdasarkan usia mereka, cara pengolahan, resep
          MPASI, dan teknik pemberian yang benar.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Edukasi dilakukan melalui sosialisasi dan diskusi yang melibatkan sesi
          tanya jawab. Kami menggunakan leaflet sebagai alat bantu visual yang
          memudahkan ibu-ibu untuk memahami dan mengingat informasi tentang
          MPASI. Dalam sesi ini, kami mengajarkan bagaimana memilih jenis
          makanan yang sesuai umur, cara mempersiapkan makanan, dan waktu
          pemberian yang tepat untuk memastikan anak mendapatkan manfaat
          maksimal dari makanan yang diberikan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Salah satu tantangan utama yang kami hadapi adalah kebiasaan orang tua
          yang sering memberikan makanan rumah tangga yang mungkin belum sesuai
          dengan kebutuhan anak pada tahap MPASI. Untuk mengatasi hal ini, kami
          berusaha untuk memberikan penjelasan yang jelas dan praktis serta
          menunjukkan manfaat dari mengikuti panduan MPASI yang tepat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Respons dari ibu-ibu dan kader Posyandu sangat positif. Mereka
          menunjukkan antusiasme yang tinggi terhadap sesi edukasi dan terbuka
          untuk menerima informasi baru. Kader posyandu juga merasa sangat
          terbantu dalam sesi pengukuran, penimbangan, maupun pencatatan. Kami
          berharap bahwa dengan adanya program ini, para ibu akan semakin
          memahami cara pemberian MPASI yang benar dari semua aspek, termasuk
          jenis makanan, waktu pemberian, dan teknik pemberian yang tepat.
        </Text>
      </>
    ),
  },
};
