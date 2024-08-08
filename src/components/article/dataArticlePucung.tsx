import { Text, H2} from "@/components";

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
  "manajemen-keuangan": {
    image: "/pucung/manajemen-keuangan.jpg",
    location: "SDN 3 Pogalan, Kelurahan Pogalan",
    title: "Manajemen Keuangan",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Program Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat (KKN PPM) Universitas Gadjah Mada (UGM) tahun 2024 mengadakan sosialisasi manajemen keuangan sejak dini di SD Pogalan 3. Tujuan dari program ini adalah untuk membekali siswa dengan pengetahuan dasar tentang pengelolaan keuangan yang bijaksana sehingga mereka dapat mengembangkan kebiasaan finansial yang sehat sejak usia muda. 
        </Text>
        <br />
        <H2>Proses Pengajaran Materi Manajemen Keuangan </H2>
        <br />
        <Text size="lg" className="indent-10">
        Pengajaran materi manajemen keuangan dilakukan dengan pendekatan interaktif dan menyenangkan untuk menarik minat siswa. Tim KKN PPM UGM menggunakan metode pembelajaran yang meliputi presentasi visual, permainan edukatif, dan diskusi kelompok. Materi yang disampaikan mencakup konsep dasar seperti menabung, membelanjakan uang dengan bijak, dan membuat anggaran. Melalui ilustrasi sederhana dan contoh-contoh praktis, siswa diajak memahami cara mengelola uang mereka dengan baik. 
        </Text>
        <br />
        <H2>Implementasi di SD Pogalan 3  </H2>
        <br />
        <Text size="lg" className="indent-10">
        Di SD Pogalan 3, kegiatan sosialisasi dimulai dengan pengenalan materi dasar oleh anggota tim KKN. Siswa diajak untuk berpartisipasi aktif melalui sesi tanya jawab dan berbagi pengalaman mengenai penggunaan uang. Salah satu aktivitas yang menarik adalah simulasi membuat anggaran mingguan. Dalam kegiatan ini, siswa diberikan uang mainan berupa kertas dan diminta untuk merencanakan pengeluaran mereka untuk berbagai kebutuhan seperti sekolah, jajan, dan tabungan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Gambar yang diambil selama sesi pengajaran menunjukkan antusiasme siswa dalam mengikuti kegiatan ini. Tim KKN memberikan panduan langkah demi langkah, membantu siswa memahami bagaimana memprioritaskan pengeluaran dan pentingnya menyisihkan sebagian uang untuk ditabung. Siswa terlihat sangat bersemangat dan terlibat aktif dalam setiap kegiatan, mencerminkan minat mereka untuk belajar lebih banyak tentang manajemen keuangan. 
        </Text>
        <br />
        <H2>Harapan dan Dampak </H2>
        <br />
        <Text size="lg" className="indent-10">
        Melalui sosialisasi ini, diharapkan siswa SD Pogalan 3 dapat memiliki kesadaran dan keterampilan dasar dalam mengelola keuangan mereka. Pengetahuan ini penting untuk membentuk kebiasaan finansial yang sehat sejak dini, yang akan berguna hingga mereka dewasa nanti. Selain itu, program ini juga bertujuan untuk menanamkan nilai-nilai tanggung jawab dan kemandirian pada siswa dalam hal keuangan. Dengan bekal manajemen keuangan yang baik, diharapkan generasi muda dapat lebih siap menghadapi tantangan ekonomi di masa depan. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program ini tidak hanya berkontribusi dalam pendidikan keuangan, tetapi juga membangun hubungan positif antara universitas dan masyarakat lokal, khususnya dalam upaya meningkatkan kualitas pendidikan dasar.
        </Text>
      </>
    ),
  },
  "sosialisasi-poc": {
    image: "/pucung/sosialisasi-poc.jpeg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Sosialisasi Pembuatan Pupuk Organik Cair: Menuju Pertanian Ramah Lingkungan",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Pada tanggal 3 Agustus 2024, tim KKN PPM Universitas Gadjah Mada melaksanakan kegiatan sosialisasi pembuatan pupuk organik cair dari limbah tanaman sayur. Kegiatan dilaksanakan di Dusun Pucung, Desa Pogalan, Kecamatan Pakis, Kabupaten Magelang. Kegiatan ini bertujuan untuk meningkatkan pengetahuan dan keterampilan kelompok tani Mekarsari dalam membuat pupuk organik cair yang berkualitas. Kegiatan ini juga bertujuan untuk mengurangi ketergantungan penggunaan pupuk kimia oleh anggota kelompok tani Mekarsari. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Acara dimulai pada pukul 20.00 WIB dengan sambutan dari ketua kelompok tani Mekarsari dan ketua tim KKN Sub Unit Pogalan 1. Dalam sambutannya, ketua kelompok tani menjelaskan pentingnya pupuk organik cair dalam meningkatkan kesuburan tanah dan hasil pertanian. Pupuk organik cair memiliki manfaat tambahan seperti meningkatkan kapasitas menahan air pada tanah dan mengurangi ketergantungan pada pupuk kimia.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pelatihan dilanjutkan dengan sesi teori yang disampaikan oleh tim KKN UGM. Materi yang disampaikan meliputi pengertian pupuk organik cair, kelebihan dan kekurangan, komponen bahan-bahan yang dibutuhkan, proses pembuatan, serta cara aplikasi pupuk organik cair pada tanaman. Para peserta mendapatkan pengetahuan mengenai bahan-bahan seperti limbah organik, molasses, EM4 dan air yang merupakan bahan dasar pembuatan pupuk organik cair. Selain itu, mereka juga mempelajari teknik fermentasi yang tepat untuk menghasilkan pupuk yang efektif.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah sesi teori, kegiatan dilanjutkan dengan praktik pembuatan pupuk organik cair. Peserta dijelaskan cara mengolah bahan-bahan menjadi pupuk. Setiap anggota kelompok melihat praktek secara langsung yang disampaikan oleh tim KKN-PPM UGM. Proses ini bertujuan agar peserta dapat memahami langkah-langkah dengan lebih jelas dan terampil.
        </Text>
      </>
    ),
  },
  "proker-inventarisasi": {
    image: "/pucung/proker-inventarisasi.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Pembuatan Aplikasi Inventarisasi Aset Dusun",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Program Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat (KKN PPM) Universitas Gadjah Mada (UGM) tahun 2024 mengusung tema pembuatan aplikasi inventarisasi aset dusun. Program ini bertujuan untuk meningkatkan efisiensi dan transparansi dalam pengelolaan aset dusun melalui teknologi informasi. 
        </Text>
        <br />
        <H2>Pengamatan Aset Dusun  </H2>
        <br />
        <Text size="lg" className="indent-10">
        Tahap awal dalam program kerja ini adalah melakukan pengamatan langsung terhadap aset-aset dusun. Tim KKN bekerja sama dengan perangkat desa untuk mengidentifikasi dan mendata aset-aset yang ada, seperti bangunan, lahan, peralatan, dan fasilitas umum lainnya. Pengamatan ini bertujuan untuk mendapatkan data akurat dan lengkap mengenai kondisi dan nilai aset yang dimiliki dusun. Tim KKN menggunakan metode survei dan wawancara untuk mengumpulkan informasi dari berbagai sumber, termasuk kepala dusun dan warga setempat. Setiap aset didokumentasikan dengan foto dan deskripsi rinci yang akan diintegrasikan ke dalam aplikasi inventarisasi. 
        </Text>
        <br />
        <H2>Pengajaran Pencatatan Aset ke Aplikasi Inventarisasi  </H2>
        <br />
        <Text size="lg" className="indent-10">
        Setelah data aset terkumpul, langkah selanjutnya adalah mengajarkan penggunaan aplikasi inventarisasi kepada kepala dusun dan perangkat desa lainnya. Pelatihan ini dilakukan secara interaktif dengan metode hands-on, di mana peserta langsung praktek menggunakan aplikasi di perangkat mereka. Tim KKN menjelaskan fitur-fitur utama aplikasi, seperti input data aset, pencarian aset, pembaruan informasi, dan pembuatan laporan. Kepala dusun dan perangkat desa diajak untuk memasukkan data aset yang telah dikumpulkan ke dalam aplikasi, memastikan mereka memahami setiap langkah proses tersebut. Selain itu, tim KKN juga memberikan panduan tertulis dan video tutorial sebagai bahan rujukan. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program ini diharapkan dapat memberikan manfaat jangka panjang bagi dusun dalam mengelola aset secara lebih efektif dan efisien. Dengan aplikasi inventarisasi aset, dusun dapat memonitor kondisi aset, melakukan pemeliharaan tepat waktu, dan membuat perencanaan yang lebih baik. Selain itu, transparansi dalam pengelolaan aset juga diharapkan dapat meningkatkan kepercayaan warga terhadap pemerintah dusun. Melalui program ini, KKN PPM UGM tidak hanya berperan dalam pengembangan teknologi, tetapi juga dalam pemberdayaan masyarakat untuk pengelolaan sumber daya yang lebih baik.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Di akhir acara, peserta diberikan kesempatan untuk bertanya dan berdiskusi tentang kendala yang mungkin mereka hadapi dalam penerapan pupuk organik cair di lahan pertanian mereka. Kesimpulan dari sosialisasi ini adalah pentingnya penggunaan pupuk organik cair untuk mendukung pertanian berkelanjutan dan menjaga kesehatan tanah. Kegiatan ini diharapkan dapat membantu kelompok tani Mekarsari dalam meningkatkan produktivitas pertanian mereka dengan metode yang ramah lingkungan.
        </Text>
      </>
    ),
  },
  "sosialisasi-microgreen": {
    image: "/pucung/sosialisasi-microgreen.jpeg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Sosialisasi Microgreen",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <H2>Si Kecil Microgreen: Pangan Alternatif Pencegah Stunting</H2>
        <br />
        Sejumlah program Kerja Kuliah Kerja Nyata (KKN) Unit Kecamatan Pakis, Universitas Gadjah Mada, berfokus pada penanganan stunting. Salah satunya, diwujudkan melalui program sosialisasi microgreen sebagai pangan alternatif pencegah stunting. Program ini diikuti oleh peserta posyandu yang dilaksanakan di Dusun Pucung, Desa Pogalan, Kecamatan Pakis, Kabupaten Magelang. Tujuan utama dari sosialisasi ini adalah untuk memperkenalkan kepada orang tua batita dan balita di Dusun Pucung terkait dengan tata cara budidaya microgreen, sehingga para orang tua dapat menjadikan microgreen sebagai sumber makanan bergizi untuk anak.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Microgreen, atau sayur mikro, merupakan tanaman yang dipanen pada tahap awal pertumbuhannya, biasanya ketika daun dan batangnya masih sangat muda, berukuran sekitar 1-3 inci. Meskipun kecil, microgreen menawarkan nilai gizi yang sangat tinggi dan rasa yang intens. Mereka sering digunakan dalam masakan sebagai tambahan dekoratif maupun penambah rasa yang beragam. Budidaya microgreen relatif mudah dan dapat dilakukan di rumah. Cukup dengan menanam benih di media tanam yang lembab dan cukup sinar matahari, Anda bisa menghasilkan sayuran segar sepanjang tahun. Prosesnya cepat, biasanya hanya memerlukan waktu 7-14 hari, tergantung jenisnya. Microgreen juga dikenal karena kandungan vitaminnya yang melimpah. Mereka mengandung vitamin A, C, E, dan K dalam konsentrasi yang lebih tinggi dibandingkan sayuran dewasa. Oleh karena itu, microgreen dapat dijadikan sebagai pangan alternatif bagi anak untuk pencegahan stunting. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program sosialisasi microgreen berfokus pada pengenalan potensi sayur lokal di Dusun Pucung yang dapat dikonsumsi pada fase microgreen untuk mencegah stunting, seperti kubis. Microgreen kubis mengandung vitamin C, kaya akan antioksidan, serta mampu mengontrol berat badan anak. Program sosialisasi microgreen diawali dengan penjelasan materi mengenai pengenalan microgreen, keuntungan mengonsumsi microgreen, cara budidaya microgreen, serta pengenalan micogreen sayur lokal Dusun Pucung. Setelah itu, program dilanjutkan dengan praktik pembuatan microgreen kubis merah pada media rockwool. Program ditutup dengan pembagian microgreen kit kepada peserta posyandu. Setelah program sosialisasi microgreen diberikan, budidaya microgreen dapat berpotensi menjadi aktivitas pertanian yang berkesinambungan. Harapannya, hasil budidaya microgreen dapat dijadikan sebagai bahan pangan alternatif untuk pencegahan stunting sehingga angka stunting di Dusun Pucung dapat ditekan.
        </Text>
      </>
    ),
  },
  "sosialisasi-mpasi": {
    image: "/pucung/sosialisasi-mpasi.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Sosialisasi Resep MPASI dan Herbal Cegah Stunting",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Tim KKN PPM UGM 2024 periode 2 melaksanakan kegiatan bertajuk "Sosialisasi Resep MPASI dan Herbal Cegah Stunting" yang bertempat di posyandu desa. Kegiatan ini ditujukan kepada ibu-ibu yang mengikuti posyandu dan memiliki balita. Pada hari pertama, tim KKN turut serta dalam membantu kegiatan posyandu seperti penimbangan berat badan dan pengukuran tinggi badan balita. Setelah itu, tim memberikan pemaparan materi mengenai stunting, yang merupakan kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis. Materi ini mencakup penjelasan tentang penyebab, dampak, dan cara pencegahan stunting, serta pentingnya asupan gizi yang baik sejak dini. Tim KKN juga memperkenalkan berbagai resep Makanan Pendamping ASI (MPASI) yang kaya akan nutrisi serta berbagai jenis jamu tradisional yang dapat membantu mencegah stunting, seperti temulawak dan kunyit.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pemaparan materi dilakukan dengan bahasa yang mudah dipahami dan dilengkapi dengan contoh-contoh konkret sehingga ibu-ibu bisa lebih mengerti dan siap menerapkannya di rumah. Setelah pemaparan, diadakan sesi tanya jawab dimana ibu-ibu diberikan kesempatan untuk bertanya seputar stunting, gizi, dan penggunaan jamu dalam mendukung kesehatan anak. Sesi ini berlangsung interaktif dengan banyak pertanyaan yang diajukan, menunjukkan tingginya antusiasme dan kepedulian ibu-ibu terhadap kesehatan balita mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pada hari kedua, kegiatan dilanjutkan dengan pembagian jamu serbuk seperti temulawak kepada ibu-ibu peserta posyandu. Tim KKN memberikan penjelasan mengenai cara konsumsi jamu tersebut, termasuk dosis yang tepat dan waktu terbaik untuk mengkonsumsinya agar mendapatkan manfaat optimal. Selain itu, tim kembali membantu pelaksanaan kegiatan posyandu, memastikan bahwa setiap balita mendapatkan pemeriksaan kesehatan yang memadai.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kegiatan ini diharapkan dapat memberikan pengetahuan dan keterampilan praktis kepada ibu-ibu dalam upaya mencegah stunting melalui pemberian MPASI yang bergizi dan penggunaan herbal tradisional. Dengan demikian, ibu-ibu dapat lebih memahami pentingnya gizi dalam tumbuh kembang anak serta mengintegrasikan pengetahuan tersebut dalam pola asuh sehari-hari. Sosialisasi ini juga menekankan pentingnya peran aktif orang tua dalam menjaga kesehatan anak, serta pentingnya kerjasama antara berbagai pihak untuk mencapai tujuan kesehatan yang lebih baik bagi generasi mendatang. Tim KKN PPM UGM 2024 berharap kegiatan ini dapat memberikan dampak positif jangka panjang dan turut membantu menurunkan angka stunting di dunia.
        </Text>
      </>
    ),
  },
  "kebersihan": {
    image: "/pucung/kebersihan.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Sosialisasi dan Pelatihan Menjaga Kebersihan Lingkungan oleh Tim KKN PPM UGM 2024 di Masjid Dusun",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Tim KKN PPM UGM 2024 periode 2 mengadakan kegiatan sosialisasi dan pelatihan bertajuk "Menjaga Kebersihan Lingkungan Sebagai Upaya Menciptakan Lingkungan Bersih Cegah Stunting" yang bertempat di masjid dusun Pucung, Pogalan, Pakis, Magelang. Kegiatan ini diikuti oleh anak-anak TPA dengan tujuan untuk meningkatkan kesadaran akan pentingnya menjaga kebersihan lingkungan sebagai langkah pencegahan stunting.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kegiatan diawali dengan pemaparan materi tentang pentingnya menjaga kebersihan lingkungan. Tim KKN memberikan penjelasan tentang bagaimana kebersihan yang terjaga dapat mencegah berbagai penyakit, termasuk stunting yang disebabkan oleh infeksi berulang akibat lingkungan yang kotor. Materi disampaikan dengan cara yang menarik dan mudah dipahami oleh anak-anak, menggunakan alat peraga dan ilustrasi yang menarik perhatian mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah sesi pemaparan, dilanjutkan dengan kegiatan "Game Memasukkan Sampah ke Tempat yang Sesuai". Dalam permainan ini, anak-anak diajarkan untuk membedakan jenis-jenis sampah dan cara memilahnya dengan benar. Mereka diberikan berbagai jenis sampah tiruan dan diminta untuk memasukkannya ke tempat sampah yang sesuai, seperti sampah organik, anorganik, dan bahan berbahaya. Kegiatan ini tidak hanya mengajarkan pentingnya memilah sampah, tetapi juga melatih mereka untuk bertanggung jawab terhadap lingkungan sejak dini.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Selanjutnya, anak-anak diajak bernyanyi bersama lagu tentang cara mencuci tangan dengan sabun yang benar. Lagu ini dirancang untuk membuat proses belajar mencuci tangan menjadi menyenangkan dan mudah diingat. Dengan iringan musik dan gerakan tangan, anak-anak dengan antusias mengikuti setiap langkah mencuci tangan yang baik dan benar. Lagu ini bertujuan untuk memastikan anak-anak memahami pentingnya mencuci tangan, terutama sebelum makan dan setelah bermain, sebagai langkah sederhana namun efektif dalam mencegah penyebaran penyakit.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Sebagai penutup kegiatan, anak-anak bersama tim KKN melakukan kegiatan bersih-bersih masjid. Mereka membersihkan lantai, menyapu halaman, dan merapikan area sekitar masjid. Aktivitas ini bertujuan untuk mempraktikkan langsung apa yang telah mereka pelajari tentang pentingnya menjaga kebersihan lingkungan. Selain itu, kegiatan ini juga mengajarkan nilai-nilai kebersamaan dan kerja sama dalam menjaga kebersihan tempat ibadah yang juga merupakan tempat belajar dan bermain mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Melalui kegiatan ini, anak-anak TPA di desa mendapatkan pengetahuan dan keterampilan penting tentang menjaga kebersihan lingkungan. Diharapkan, mereka dapat menerapkan kebiasaan baik ini dalam kehidupan sehari-hari dan menyebarkannya kepada keluarga serta teman-teman mereka. Kegiatan ini juga menekankan pentingnya kolaborasi antara berbagai pihak, termasuk masyarakat, sekolah, dan instansi kesehatan, dalam menciptakan lingkungan yang bersih dan sehat untuk mencegah stunting dan penyakit lainnya. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Tim KKN PPM UGM 2024 berharap kegiatan ini bisa memberikan dampak positif jangka panjang bagi anak-anak dan komunitas di dusun tersebut. Dengan edukasi yang berkelanjutan, generasi muda diharapkan tumbuh dengan kesadaran tinggi akan pentingnya kebersihan lingkungan dan kesehatan pribadi.
        </Text>
      </>
    ),
  },
  "retaining-wall": {
    image: "/pucung/retaining-wall.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Desain Retaining Wall untuk Longsor di Dusun Pucung ",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Pada tahun 2024, Tim KKN PPM UGM memiliki salah satu program kerja yang penting, yaitu mendesain retaining wall untuk mencegah longsor di Dusun Pucung. Longsor menjadi masalah yang serius di dusun ini. Masalah longsor ini muncul terutama setiap musim hujan sehingga perlu dibuatnya permasalahan atas longsor untuk melindungi masyarakat dan sarana serta prasarana yang ada.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Pengamatan Kondisi Longsor di Pucung </H2>
        Proses dimulai dengan pengamatan langsung terhadap kondisi longsor di lokasi terdampak. Tim KKN bersama perangkat desa mengunjungi area yang rawan longsor untuk mengidentifikasi tingkat kerusakan dan faktor penyebabnya. Mereka mencatat data penting seperti kemiringan lereng, jenis tanah, dan pola aliran air. Pengamatan ini dilakukan secara teliti untuk mendapatkan gambaran lengkap mengenai situasi yang ada.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Pengambilan Sampel </H2>
        Setelah pengamatan, langkah berikutnya adalah pengambilan sampel tanah dari lokasi longsor. Tim KKN mengumpulkan sampel tanah untuk dianalisis di laboratorium guna menentukan karakteristik fisik dan mekaniknya. Analisis ini mencakup uji kekuatan tanah, porositas, dan kadar air. Data ini sangat penting untuk mendesain retaining wall yang sesuai dengan kondisi tanah di lokasi tersebut. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Penghitungan dan Konsep Retaining Wall </H2>
        Berdasarkan hasil pengamatan dan analisis sampel tanah, tim KKN mulai merancang konsep retaining wall. Mereka melakukan perhitungan teknis untuk menentukan ukuran, bentuk, dan bahan yang akan digunakan. Perhitungan ini melibatkan faktor keamanan, daya tahan, dan efisiensi biaya. Tim KKN mempertimbangkan penggunaan bahan lokal yang mudah didapatkan di sekitar dusun untuk meminimalisir biaya dan mempermudah pelaksanaan. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Retaining wall yang dirancang harus mampu menahan tekanan tanah dan air yang menyebabkan longsor. Selain itu, desainnya harus memungkinkan aliran air yang baik untuk mencegah penumpukan air di belakang dinding penahan. Tim KKN membuat beberapa sketsa dan model desain untuk dipresentasikan kepada perangkat desa dan warga setempat. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Penyerahan Desain dan Sosialisasi </H2>
        Setelah konsep retaining wall selesai, tim KKN menyusun laporan lengkap yang mencakup semua hasil pengamatan, analisis, dan desain yang telah dibuat. Laporan ini diserahkan kepada kepala dusun beserta perangkat desa dalam sebuah acara resmi. Tim KKN juga melakukan sosialisasi kepada warga mengenai pentingnya retaining wall dan cara perawatannya. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Proker ini tidak hanya membantu mencegah longsor, tetapi juga memberdayakan masyarakat dalam menjaga lingkungan mereka. Dengan adanya program ini, Dusun Pucung mendapatkan solusi teknis yang praktis dan dapat segera diterapkan untuk meningkatkan keamanan dan kesejahteraan warganya.
        </Text>
      </>
    ),
  },
  "pembuatan-rab-retaining": {
    image: "/pucung/pembuatan-rab-retaining.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Pembuatan RAB Retaining Wall untuk Longsor",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Pada KKN PPM UGM 2024, salah satu program kerja yang penting adalah pembuatan Rencana Anggaran Biaya (RAB) untuk pembangunan retaining wall di Dusun Pucung. Retaining wall adalah konstruksi bangunan berupa dinding yang digunakan untuk menstabilkan tanah miring agar tanah tidak bergeser atau longsor. Dusun ini mengalami masalah longsor yang sering terjadi setiap musim hujan sehingga diperlukan solusi teknis berupa retaining wall untuk melindungi lahan dan infrastruktur desa. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Proses Perhitungan RAB  </H2>
        Proses pembuatan RAB dimulai dengan pengumpulan data lapangan yang telah dilakukan sebelumnya. Tim KKN bersama perangkat desa dan warga setempat mengidentifikasi area yang membutuhkan retaining wall, serta mengukur dimensi dan kondisi teknis lokasi. Data ini sangat penting untuk menentukan kebutuhan material dan tenaga kerja yang akan digunakan dalam pembangunan retaining wall. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Perhitungan Material dan Biaya </H2>
        Setelah data teknis terkumpul, langkah berikutnya adalah menghitung kebutuhan material. Tim KKN melakukan perhitungan detail mengenai jumlah dan jenis material yang dibutuhkan, seperti batu, semen, pasir, besi, dan bahan lainnya. Mereka juga memperhitungkan biaya transportasi untuk mengangkut material ke lokasi proyek. Selain itu, tim juga mempertimbangkan kebutuhan alat berat dan peralatan pendukung lainnya yang diperlukan selama proses konstruksi. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Perhitungan Tenaga Kerja </H2>
        Selain material, biaya tenaga kerja juga menjadi komponen penting dalam RAB. Tim KKN melakukan estimasi jumlah tenaga kerja yang dibutuhkan serta waktu yang diperlukan untuk menyelesaikan proyek. Mereka menghitung upah harian pekerja berdasarkan standar lokal dan memperhitungkan biaya tambahan untuk supervisi dan manajemen proyek.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Penyusunan RAB (Rencana Anggaran Biaya)</H2>
        Setelah semua komponen biaya dihitung, tim KKN menyusun RAB secara terperinci. RAB ini mencakup semua elemen biaya, mulai dari material, tenaga kerja, transportasi, hingga biaya tidak terduga. Setiap item dalam RAB dijelaskan secara rinci untuk memastikan transparansi dan akurasi anggaran. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Presentasi dan Sosialisasi RAB </H2>
        RAB yang telah disusun kemudian dipresentasikan kepada kepala dusun dan perangkat desa dalam sebuah rapat resmi. Tim KKN menjelaskan setiap komponen biaya dan metode perhitungannya serta menjawab pertanyaan dan masukan dari perangkat desa dan warga. Presentasi ini bertujuan untuk memastikan bahwa semua pihak memahami dan menyetujui anggaran yang telah dibuat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dengan adanya RAB yang terperinci dan transparan, diharapkan pembangunan retaining wall di Dusun Pucung dapat berjalan lancar dan sesuai anggaran. Program ini tidak hanya memberikan solusi teknis untuk masalah longsor, tetapi juga meningkatkan partisipasi dan kesadaran masyarakat dalam pengelolaan proyek pembangunan di desa mereka.
        </Text>
      </>
    ),
  },
  "pendampingan-hafalan": {
    image: "/pucung/pendampingan-hafalan.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Pengontrolan Bacaan dan Hafalan Al-Qur'an",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Program KKN PPM UGM 2024 menghadirkan salah satu program kerja unggulan, yaitu pengontrolan bacaan dan hafalan Al-Qur'an bagi anak-anak di Taman Pendidikan Al-Qur'an (TPA). Program ini bertujuan untuk meningkatkan kualitas bacaan dan hafalan Al-Qur'an serta memotivasi anak-anak agar lebih semangat dalam mempelajari kitab suci mereka. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Proses Pengajaran dan Pembimbingan </H2>
        Kegiatan dimulai dengan pengajaran yang dilakukan secara berkala di TPA. Para mahasiswa KKN bekerja sama dengan pengajar setempat untuk memberikan materi pembelajaran yang terstruktur. Pengajaran dilakukan dengan metode yang interaktif dan menarik, menggunakan alat peraga dan media pembelajaran yang variatif agar anak-anak lebih mudah memahami dan menghafal ayat-ayat Al-Qur'an.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Pengontrolan Bacaan </H2>
        Tahap pertama dalam proses ini adalah pengontrolan bacaan. Mahasiswa KKN memberikan bimbingan intensif untuk memastikan anak-anak membaca Al-Qur'an dengan tajwid yang benar. Setiap anak dibimbing secara individu untuk melafalkan ayat-ayat dengan tepat. Mahasiswa KKN memeriksa dan memperbaiki kesalahan bacaan, memberikan contoh yang benar, dan mengajarkan teknik-teknik membaca yang baik.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Pembimbingan Hafalan</H2>
        Selain bacaan, hafalan Al-Qur'an juga menjadi fokus utama. Mahasiswa KKN mengadakan sesi khusus untuk membimbing anak-anak dalam menghafal ayat-ayat Al-Qur'an. Sesi ini dilakukan dengan metode mengulang-ulang ayat yang dihafal, baik secara individu maupun kelompok. Anak-anak diberi motivasi dan dukungan agar mereka lebih semangat dalam menghafal. Setiap pekan, diadakan evaluasi hafalan untuk mengukur perkembangan dan memberikan penghargaan bagi yang berhasil mencapai target.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Evaluasi dan Monitoring </H2>
        Untuk memastikan efektivitas program, dilakukan evaluasi rutin setiap bulan. Mahasiswa KKN bersama pengajar TPA memonitor perkembangan bacaan dan hafalan setiap anak. Hasil evaluasi ini digunakan untuk memberikan feedback dan perbaikan pada metode pengajaran yang digunakan. Selain itu, orang tua juga diajak berpartisipasi dengan memberikan dukungan di rumah agar anak-anak lebih termotivasi. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        <H2>Hasil dan Manfaat </H2>
        Program pengontrolan bacaan dan hafalan Al-Qur'an ini memberikan dampak positif yang signifikan. Anak-anak di TPA menunjukkan peningkatan yang signifikan dalam kualitas bacaan dan hafalan mereka. Mereka menjadi lebih percaya diri dalam membaca dan menghafal Al-Qur'an. Selain itu, program ini juga menguatkan ikatan antara mahasiswa KKN dengan masyarakat setempat, serta memperkuat nilai-nilai keagamaan dalam kehidupan sehari-hari. Dengan demikian, proker KKN PPM UGM 2024 ini tidak hanya membantu meningkatkan kemampuan anak-anak dalam membaca dan menghafal Al-Qur'an, tetapi juga memberikan kontribusi nyata dalam pembentukan generasi muda yang berakhlak mulia dan berpengetahuan agama yang kuat.
        </Text>
        <br />
      </>
    ),
  },
  "pendampingan-tpa": {
    image: "/pucung/pendampingan-tpa.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Program Kerja TPA Dusun Pucung Pendampingan Hafalan Quran Anak-anak TPA",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        Tim Kuliah Kerja Nyata (KKN) PPM Universitas Gadjah Mada (UGM) 2024 periode 2 melaksanakan program kerja (proker) bertajuk "Pendampingan Hafalan Quran Anak-anak TPA" di Dusun Pucung, Desa Pogalan, Kecamatan Pakis, Kabupaten Magelang. Program ini ditujukan untuk mendukung dan meningkatkan kualitas hafalan Al-Quran anak-anak di Taman Pendidikan Al-Quran (TPA) setempat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kegiatan ini diawali dengan pemetaan dan identifikasi kebutuhan anak-anak TPA dalam hal hafalan Al-Quran. Tim KKN berkoordinasi dengan pengurus TPA untuk menentukan jadwal dan materi hafalan yang sesuai dengan kemampuan anak-anak. Program ini bertujuan untuk membimbing anak-anak dalam menghafal Al-Quran dengan metode yang efektif dan menyenangkan.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pada hari pertama kegiatan, tim KKN mengadakan sesi perkenalan dan orientasi. Anak-anak dikenalkan dengan berbagai metode hafalan yang dirancang untuk mempermudah mereka dalam mengingat ayat-ayat Al-Quran. Tim juga mengadakan sesi motivasi untuk membangkitkan semangat anak-anak dalam proses hafalan. Selama kegiatan, tim KKN mengaplikasikan pendekatan belajar yang interaktif, seperti permainan hafalan dan diskusi kelompok, untuk membuat proses belajar lebih menarik.   
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Selanjutnya, tim melakukan pendampingan secara rutin, dengan mengadakan sesi bimbingan hafalan setiap minggu. Setiap anak diberikan perhatian khusus untuk memastikan mereka memahami dan menghafal dengan baik. Tim juga menyediakan materi hafalan tambahan dan alat bantu belajar yang dibutuhkan, seperti kartu ayat dan rekaman audio. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program ini juga melibatkan orang tua dalam proses hafalan. Tim KKN mengadakan pelatihan dan penyuluhan tentang cara mendukung anak-anak dalam belajar Al-Quran di rumah kepada orang tua. Keterlibatan orang tua dianggap penting untuk memastikan konsistensi dan keberhasilan hafalan. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dengan adanya program pendampingan hafalan Quran ini, diharapkan anak-anak TPA di Dusun Pucung dapat meningkatkan kemampuan hafalan mereka serta menumbuhkan kecintaan dan kedisiplinan dalam mempelajari Al-Quran. Program ini juga bertujuan untuk memperkuat peran TPA sebagai lembaga pendidikan agama di masyarakat serta memotivasi anak-anak untuk terus belajar dan mengamalkan ajaran Al-Quran.
        </Text>
        <br />
      </>
    ),
  },
  "posyandu": {
    image: "/pucung/posyandu.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Membantu Kegiatan Posyandu",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        KKN PPM UGM 2024 mengusung program kerja yang berfokus pada membantu kegiatan posyandu di desa mitra. Program ini bertujuan untuk meningkatkan kualitas layanan kesehatan ibu dan anak, khususnya balita, melalui kegiatan posyandu yang rutin diadakan setiap bulan. 
        </Text>
        <br />
        <H2>Pelaksanaan Posyandu Anak 0-5 Tahun</H2>
        <br />
        <Text size="lg" className="indent-10">
          Pelaksanaan kegiatan dimulai dengan persiapan bersama kader posyandu setempat. Mahasiswa KKN membantu dalam menyiapkan peralatan yang dibutuhkan, seperti timbangan, alat ukur tinggi badan, dan buku pencatatan kesehatan. Kegiatan posyandu diawali dengan pendaftaran balita yang datang bersama orang tua mereka. Mahasiswa KKN membantu mencatat data-data penting seperti nama, usia, berat badan, dan tinggi badan anak.   
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah pendaftaran, anak-anak diarahkan ke area pemeriksaan. Mahasiswa KKN bekerja sama dengan kader posyandu untuk menimbang berat badan dan mengukur tinggi badan balita. Data yang diperoleh kemudian dicatat dalam buku kesehatan masing-masing anak. Mahasiswa juga memberikan penjelasan singkat kepada orang tua mengenai hasil pemeriksaan dan pentingnya pemantauan pertumbuhan anak secara rutin.   
        </Text>
        <br />
        <H2>Pemberian Imunisasi dan Suplemen Gizi</H2>
        <br />
        <Text size="lg" className="indent-10">
        Salah satu kegiatan penting dalam posyandu adalah pemberian imunisasi dan suplemen gizi. Mahasiswa KKN membantu petugas kesehatan dalam mempersiapkan vaksin dan suplemen yang akan diberikan. Anak-anak yang telah terdaftar dalam program imunisasi menerima vaksin sesuai jadwal yang telah ditentukan. Selain itu, diberikan juga suplemen gizi seperti vitamin A untuk mendukung kesehatan dan pertumbuhan anak.  
        </Text>
        <br />
        <H2>Edukasi Kesehatan</H2>
        <br />
        <Text size="lg" className="indent-10">
        Setelah semua anak selesai diperiksa, kegiatan posyandu diakhiri dengan sesi edukasi kesehatan. Mahasiswa KKN memberikan penyuluhan kepada para orang tua mengenai pentingnya gizi seimbang, ASI eksklusif, dan kebersihan lingkungan untuk mencegah penyakit. Edukasi dilakukan dengan metode interaktif, menggunakan media gambar dan alat peraga yang menarik agar mudah dipahami. 
        </Text>
        <br />
        <H2>Hasil dan Manfaat</H2>
        <br />
        <Text size="lg" className="indent-10">
        Program membantu kegiatan posyandu ini memberikan manfaat yang signifikan bagi masyarakat desa. Pelaksanaan posyandu menjadi lebih tertib dan efisien, serta tercapainya tujuan peningkatan kesehatan ibu dan anak. Para orang tua merasa lebih sadar akan pentingnya kesehatan anak dan berkomitmen untuk rutin mengikuti kegiatan posyandu. Selain itu, mahasiswa KKN juga mendapatkan pengalaman berharga dalam berinteraksi dengan masyarakat dan memahami dinamika kesehatan di desa.
        </Text>
        <Text size="lg" className="indent-10">
        Dengan demikian, proker KKN PPM UGM 2024 ini berhasil memperkuat layanan kesehatan dasar dan mendukung program pemerintah dalam meningkatkan kualitas kesehatan masyarakat di desa mitra.
        </Text>
      </>
    ),
  },
  "pencegahan-stunting": {
    image: "/pucung/pencegahan-stunting.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Sosialisasi Cegah Stunting ",
    text: (
      <>
        <Text size="lg" className="indent-10">
        <br />
        KKN PPM UGM 2024 membawa program kerja inovatif, yaitu sosialisasi pencegahan stunting di desa mitra. Program ini berfokus pada peningkatan pengetahuan masyarakat tentang pentingnya gizi seimbang dan pemanfaatan jamu temulawak untuk meningkatkan nafsu makan anak-anak, sebagai salah satu cara mencegah stunting.  
        </Text>
        <br />
        <H2>Pelaksanaan Posyandu </H2>
        <br />
        <Text size="lg" className="indent-10">
        Proses sosialisasi dimulai dengan pelaksanaan posyandu rutin. Mahasiswa KKN berkolaborasi dengan kader posyandu setempat untuk memastikan semua anak balita mendapatkan pelayanan kesehatan yang optimal. Selama posyandu, mahasiswa KKN mengukur berat dan tinggi badan anak-anak untuk memantau pertumbuhan mereka. Selain itu, diberikan juga edukasi kepada ibu-ibu mengenai pentingnya ASI eksklusif dan pemberian makanan pendamping ASI yang bergizi.   
        </Text>
        <br />
        <H2>Sosialisasi Jamu Temulawak </H2>
        <br />
        <Text size="lg" className="indent-10">
        Setelah kegiatan posyandu, mahasiswa KKN mengadakan sosialisasi mengenai manfaat jamu temulawak dalam mencegah stunting. Jamu temulawak dikenal memiliki khasiat meningkatkan nafsu makan dan membantu penyerapan nutrisi dalam tubuh anak-anak. Dalam sesi ini, mahasiswa KKN menunjukkan cara pembuatan jamu temulawak yang sederhana dan aman dikonsumsi oleh anak-anak.  
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Para ibu diberikan resep dan cara mengolah temulawak menjadi jamu yang menarik bagi anak-anak. Selain itu, dijelaskan pula manfaat lain dari temulawak seperti meningkatkan daya tahan tubuh dan membantu pencernaan. Dengan peningkatan nafsu makan, diharapkan anak-anak mendapatkan asupan gizi yang lebih baik sehingga pertumbuhan mereka menjadi optimal.    
        </Text>
        <br />
        <H2>Hasil dan Manfaat </H2>
        <br />
        <Text size="lg" className="indent-10">
        Program sosialisasi cegah stunting ini mendapat respons positif dari masyarakat. Para ibu mulai rutin memberikan jamu temulawak kepada anak-anak mereka. Hasilnya, terlihat peningkatan nafsu makan dan berat badan pada anak-anak yang sebelumnya mengalami kesulitan makan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Melalui program ini, mahasiswa KKN tidak hanya berhasil meningkatkan pengetahuan masyarakat mengenai stunting, tetapi juga memperkenalkan solusi lokal yang efektif. Kerjasama antara mahasiswa, kader posyandu, dan masyarakat desa menjadi kunci keberhasilan program ini. Proker KKN PPM UGM 2024 ini menunjukkan bahwa pendekatan berbasis komunitas dapat memberikan dampak positif yang nyata dalam upaya pencegahan stunting di desa mitra.
        </Text>
      </>
    ),
  },
};
