import { Text } from "@/components";
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
  "pesona-semampiran": {
    image: "/hero.png",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pesona Semampiran",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Dusun Semampiran merupakan salah satu Dusun yang terletak di Desa
          Ketundan, Kecamatan Pakis, Kabupaten Magelang. Dusun Semampiran
          terletak di ketinggian sekitar 1300 MDPL. Dengan ketinggian tersebut,
          Dusun Semampiran memiliki udara yang dingin saat menjelang malam. Di
          sisi lain, Dusun Semampiran memiliki pemandangan indah dari bentangan
          Gunung Sindoro dan Gunung Sumbing. Bentangan Gunung Sindoro dan Gunung
          Sumbing akan terlihat indah ketika pagi atau sore cerah dengan
          semburat warna jingga dari matahari.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dusun Semampiran merupakan salah satu dusun besar yang dipimpin oleh
          Kepala Dusun yang disebut dengan Pak Bayan. Dusun ini dibagi menjadi
          sepuluh RT dengan 170 jumlah KK di dalamnya. Mayoritas masyarakat
          Dusun Semampiran adalah Islam. Oleh karena itu, berbagai macam
          kegiatan keagamaan bernuansa Islam ada di sini, seperti berjanjen,
          yasinan, khatam Qur’an, dan sholawat. Kegiatan tersebut rutin
          dilaksanakan setiap minggu, baik oleh perkumpulan ibu-ibu maupun
          bapak-bapak.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Masyarakat Dusun Semampiran memiliki lingkungan sosial yang hangat.
          Hal tersebut tercipta dari kegiatan gotong royong ketika panen besar,
          obrolan ringan dan hangat ketika masyarakat bekerja di ladang, acara
          besar dan lomba rutin setiap tahun, dan perkumpulan pemuda ketika
          bermain voli.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Ketika membicarakan tentang Dusun Semampiran, tidak akan terlepas
          dengan kata “Pertanian”. Mayoritas, masyarakat di dusun ini adalah
          petani. Pertanian menjadi penggerak ekonomi utama di dusun ini.
          Komoditas pertanian dusun Semampiran adalah kubis, sawi, pakcoy,
          brokoli, stroberi, bit, cabai, dan bakau. Ketika musim panen tiba dan
          harga jual komoditas tinggi, banyak petani mendapatkan keuntungan yang
          besar.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Di sisi lain, masyarakat Dusun Semampiran memiliki satu keminatan yang
          sama. Hal tersebut adalah voli. Bisa dikatakan, voli menjadi hobi
          masyarakat Dusun Semampiran, terutama bagi anak-anak, pemuda, dan
          bapak-bapak. Dusun Semampiran selalu menjadi juara bertahan dalam
          setiap perlombaan voli setiap tahun di des
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kegemaran masyarakat di sini terimplementasikan dalam bentuk kegiatan
          rutin yang harus dilakukan setiap sore. Satu kegiatan yang selalu
          dilaksanakan setiap sore adalah bermain voli di lapangan tengah. Dalam
          kegiatan tersebut, keharmonisan, kebersamaan, dan sportivitas penduduk
          Dusun Semampiran tercipta dan berakar kuat dalam interaksi sosial
          masyarakat Dusun Semampiran.
        </Text>
      </>
    ),
  },
  "kompos": {
    image: "/semampiran/kompos.png",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pembuatan Kompos Dari Kotoran Ternak Sebagai Pupuk Perkebunan ",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Dusun Semampiran adalah sebuah daerah yang mayoritas penduduknya berprofesi sebagai petani. Dengan tanah subur dan iklim yang mendukung, masyarakat setempat mengandalkan pertanian sebagai sumber penghasilan utama. Selain bertani, beberapa warga juga memiliki hewan ternak seperti sapi, kambing, dan ayam, yang menghasilkan kotoran sebagai limbah. Namun, limbah ini sering kali tidak dimanfaatkan secara optimal.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Untuk meningkatkan produktivitas pertanian dan mengurangi pencemaran lingkungan, Dimas Aji, mahasiswa Fakultas Pertanian, menginisiasi program pembuatan kompos dari kotoran ternak. Program ini memiliki target peserta petani dan peternak di Dusun Semampiran. Antusiasme warga sangat tinggi terhadap program ini sebab dianggap sebagai solusi untuk mengolah limbah menjadi pupuk organik berkualitas.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program diawali dengan praktik langsung dalam pembuatan kompos. PIC, Dimas Aji, memandu peserta melalui setiap langkah proses, mulai dari pengumpulan kotoran ternak hingga pengomposan. Peserta diajarkan cara mencampurkan kotoran dengan bahan lain seperti dedak padi dan serbuk gergaji untuk mempercepat proses dekomposisi. Keberadaan bahan-bahan ini juga diperoleh dari lingkungan sekitar sehingga biaya produksi dapat ditekan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Selama sesi praktik, peserta aktif bertanya dan berdiskusi mengenai teknik dan manfaat kompos. Mahasiswa menjelaskan bahwa kompos yang dihasilkan tidak hanya bermanfaat untuk meningkatkan kesuburan tanah, tetapi juga membantu menjaga kelembapan serta mengurangi kebutuhan pupuk kimia. Hal ini disambut baik oleh para petani, yang menyadari pentingnya penggunaan pupuk organik dalam pertanian berkelanjutan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program ini tidak hanya memberikan pengetahuan praktis, tetapi juga membangun kesadaran akan pentingnya pengelolaan limbah ternak. Dengan memanfaatkan kotoran ternak sebagai pupuk, petani di Dusun Semampiran dapat meningkatkan hasil pertanian mereka secara signifikan. Selain itu, penggunaan pupuk organik berpotensi mengurangi dampak negatif terhadap lingkungan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Keberhasilan program ini diharapkan menjadi model bagi dusun-dusun lain yang memiliki potensi serupa. Mahasiswa KKN PPM UGM Subunit Ketundan I, melalui inisiatif ini, membantu masyarakat Dusun Semampiran menjadi lebih mandiri dalam mengelola sumber daya lokal dan berkontribusi pada keberlanjutan lingkungan serta peningkatan ekonomi lokal.
        </Text>
      </>
    ),
  },
  "perangkap-tikus": {
    image: "/semampiran/perangkap-tikus.png",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pembuatan Perangkap Tikus dan Sosialisasi Penyakit Yang Disebabkan Rodensia",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Dusun Semampiran menjadi dusun dengan mayoritas masyarakat adalah petani. Di Dusun ini, berhektar-hektar petak perkebunan terbentang. Hal tersebut membuat Dusun Semampiran memiliki hasil bumi melimpah ruah. Namun, terdapat satu kekhawatiran para petani mengenai kondisi lapangan, yaitu tentang hama. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Salah satu hama yang sering merusak perkebunan warga Dusun Semampiran adalah tikus. Selain merusak perkebunan warga, tikus membawa penyakit yang dapat menginfeksi manusia. Setelah melakukan sesi observasi dan wawancara dengan warga Dusun Semampiran, tim KKN PPM UGM Sub Unit Ketundan I mengusulkan satu program dengan judul “Pembuatan Perangkap Tikus dan Sosialisasi Penyakit yang Disebabkan Rodensia.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program tersebut diketuai oleh Agung Jati Prasetya, mahasiswa jurusan Teknik Infrastruktur Lingkungan. Program tersebut dirancang sebagai upaya untuk mengurangi populasi tikus serta meningkatkan kesadaran masyarakat tentang bahaya penyakit yang ditularkan oleh rodensia. Program tersebut dibagi menjadi dua bagian, yaitu presentasi perangkap tikus dan sosialisasi penyakit yang disebabkan rodensia. Program pembuatan perangkap tikus ditujukan kepada para petani Dusun Semampiran yang diwakilkan dua orang per RT. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Salah satu komponen utama dari program ini adalah pembuatan perangkap tikus yang ramah lingkungan. Perangkap tikus terbuat dari jaring-jaring kawat yang mudah didapatkan masyarakat. Selain bahan yang mudah digunakan, perangkap ini dapat digunakan kembali sehingga lebih efisien dalam jangka panjang. Perangkap tikus ini dirancang agar mudah digunakan oleh masyarakat Dusun Semampiran terutama di perkebunan. Dalam program ini, PIC, Agung Jati Prasetya, mempresentasikan perangkap tikus yang berhasil dibuat dan menjelaskan cara menyusun dan menggunakan perangkap tikus tersebut.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Bagian selanjutnya dalam program ini adalah sosialisasi penyakit yang disebabkan rodensia. Pemaparan materi mengenai jenis-jenis penyakit karena rodensia dan penyebabnya. Sosialisasi dilakukan menggunakan media power point sehingga audience dapat memahami terkait materi yang disosialisasikan. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program ini sudah selesai dilaksanakan di rumah Pak Bayan Dusun Semampiran. Audience sangat antusias dalam pelaksanaan program ini karena audience aktif bertanya mengenai perangkap tikus yang berhasil dibuat. Program “Pembuatan Perangkap Tikus dan Sosialisasi Penyakit yang disebabkan Rodensia” diharapkan dapat memberi manfaat untuk petani Dusun Semampiran. Dengan program tersebut, tim pelaksana mengharapkan perangkap tikus tersebut dapat dikembangkan kembali oleh para petani sehingga dapat menurunkan hama tikus di perkebunan sehingga hasil perkebunan meningkat dan meningkatkan perekonomian Dusun Semampiran.
        </Text>
      </>
    ),
  },
  "revitalisasi-pos": {
    image: "/semampiran/revitalisasi-pos.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Revitalisasi Prasarana Pos Kampling Sebagai Penunjang Keamanan dan Lapangan Sebagai Ruang Publik Dusun Semampiran",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Revitalisasi prasarana bangunan di lingkungan masyarakat menjadi langkah strategis untuk meningkatkan keamanan dan kenyamanan. Program revitalisasi tidak hanya sekadar memperbaiki fisik bangunan, tetapi juga menciptakan ruang publik yang dapat dimanfaatkan oleh warga. Dengan adanya ruang publik yang baik, interaksi sosial antarwarga dapat terjalin lebih harmonis, serta meningkatkan rasa kepemilikan dan tanggung jawab terhadap lingkungan. Dalam konteks ini, Pos Kampling di Dusun Semampiran menjadi fokus program yang diinisiasi oleh Gunawan Prakoso,  mahasiswa Fakultas Geografi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pelaksanaan program revitalisasi melibatkan seluruh lapisan masyarakat Dusun Semampiran. Masyarakat tidak hanya menjadi penerima manfaat, tetapi juga berperan aktif dalam proses revitalisasi. Para bapak-bapak dan pemuda setempat berkolaborasi dengan semangat gotong royong untuk mewujudkan perubahan ini. Keterlibatan masyarakat dalam kegiatan ini penting untuk memperkuat ikatan sosial dan meningkatkan rasa kepedulian terhadap lingkungan sekitar.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Salah satu langkah utama dalam program revitalisasi adalah pengecatan Pos Kampling. Pengecatan ini bertujuan untuk memperindah tampilan fisik Pos Kampling yang selama ini kurang terawat. Dengan warna-warna cerah dan menarik, diharapkan Pos Kampling dapat menjadi titik perhatian dan simbol kebersamaan masyarakat. Selain itu, penampilan yang menarik akan meningkatkan kesadaran warga akan pentingnya menjaga fasilitas umum.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pengecatan dilakukan secara kolaboratif oleh warga, menciptakan suasana kerja sama yang positif. Setiap individu, baik tua maupun muda, turut berkontribusi dalam setiap tahap proses pengecatan. Hal ini tidak hanya membuat pekerjaan selesai lebih cepat, tetapi juga membangun rasa memiliki yang kuat terhadap Pos Kampling sebagai bagian dari identitas Dusun Semampiran.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Proses pemasangan plang juga melibatkan partisipasi aktif masyarakat. Melalui kegiatan ini, warga belajar tentang pentingnya signage dalam meningkatkan fungsi ruang publik. Selain itu, pemasangan plang menjadi simbol bahwa Pos Kampling bukan hanya sekadar bangunan, tetapi juga sebagai pusat keamanan dan informasi bagi masyarakat. Hal ini semakin menguatkan posisi Pos Kampling sebagai tempat yang aman dan nyaman untuk berkumpul. Revitalisasi Pos Kampling memberikan berbagai manfaat bagi masyarakat Dusun Semampiran. Pertama, dengan peningkatan penampilan fisik pos, warga merasa lebih nyaman dan aman untuk menggunakan fasilitas tersebut. Hal ini berpotensi meningkatkan frekuensi aktivitas masyarakat di area tersebut, seperti pertemuan komunitas atau kegiatan sosial lainnya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kedua, keterlibatan warga dalam pelaksanaan program memberikan dampak positif terhadap hubungan sosial di antara mereka. Semangat gotong royong yang ditunjukkan selama proses revitalisasi menumbuhkan rasa solidaritas dan kebersamaan. Dengan demikian, tidak hanya fisik bangunan yang diperbaiki, tetapi juga kualitas interaksi sosial di dalam masyarakat Dusun Semampiran. Program ini merupakan contoh nyata bagaimana revitalisasi prasarana dapat membawa perubahan positif bagi kehidupan masyarakat.
        </Text>
      </>
    ),
  },
  "tambah-darah": {
    image: "/semampiran/tambah-darah.jpg",
    location: "SMPN3 Pakis",
    title: "Sosialisasi Tablet Tambah Darah Sebagai Intervensi Anemia Pada Remaja Putri",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Angka stunting di Indonesia masih menjadi perhatian serius, dengan salah satu penyebabnya adalah anemia, terutama di kalangan remaja putri. Anemia dapat menghambat pertumbuhan fisik dan perkembangan kognitif, yang berdampak negatif pada kualitas hidup dan produktivitas mereka di masa depan. Untuk mengatasi masalah ini, diperlukan intervensi yang tepat sasaran dan berkelanjutan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program sosialisasi tablet tambah darah diinisiasi oleh Arlita Tanzila Amiril, mahasiswa Fakultas Kedokteran, Keperawatan, dan Kesehatan Masyarakat. Pelaksanaan program ini berlangsung di SMPN 3 Pakis, dengan target utama remaja putri kelas 7. Melalui kegiatan ini, mahasiswa berharap dapat meningkatkan kesadaran tentang pentingnya asupan zat besi untuk mencegah anemia.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Sosialisasi ini mencakup penjelasan mengenai kandungan tablet tambah darah, dampaknya terhadap kesehatan, serta manfaat tablet tambah darah. Materi disampaikan secara interaktif agar peserta lebih mudah memahami informasi yang diberikan. Antusiasme dari para remaja putri sangat tinggi, menunjukkan bahwa mereka menyadari pentingnya menjaga kesehatan tubuh dan peduli terhadap kesehatan masing-masing individu. Di akhir acara, terdapat sesi tanya jawab. Sesi tersebut dilakukan untuk mengetahui pemahaman siswa mengenai materi yang telah disampaikan sebelumnya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Tablet tambah darah merupakan suplemen yang kaya akan zat besi, yang sangat diperlukan untuk memproduksi sel darah merah. Dalam sosialisasi ini, dijelaskan bagaimana cara konsumsi yang benar dan waktu yang tepat untuk mengonsumsinya. Dengan pemahaman yang baik, diharapkan remaja putri dapat mengimplementasikan kebiasaan sehat ini dalam kehidupan sehari-hari.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Selain itu, program ini juga menekankan peran keluarga dan lingkungan dalam mendukung penerapan pola makan sehat. Kesadaran kolektif tentang nutrisi dan kesehatan diharapkan dapat menurunkan angka anemia di kalangan remaja putri sehingga mendukung upaya penurunan angka stunting di Indonesia.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Melalui program sosialisasi ini, diharapkan remaja putri tidak hanya mendapatkan pengetahuan, tetapi juga motivasi untuk menjaga kesehatan diri. Intervensi seperti ini sangat penting dalam membangun generasi muda yang sehat dan produktif. Keberhasilan program ini bisa menjadi langkah awal untuk kampanye kesehatan yang lebih luas di sekolah-sekolah lainnya.
        </Text>
      </>
    ),
  },
  "penyakit-ternak": {
    image: "/semampiran/penyakit-ternak.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Sosialisasi Penyakit Ternak Hewan Ruminansia untuk Meningkatkan Pengetahuan Peternak Mikro",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Dusun Semampiran dikenal sebagai salah satu daerah pertanian yang subur, dengan banyak warga yang mengandalkan hewan ternak, khususnya hewan ruminansia seperti sapi, kambing, dan domba. Namun, meskipun potensi ternak sangat besar, pengetahuan peternak mengenai kesehatan hewan masih terbatas. Banyak peternak yang belum sepenuhnya memahami jenis-jenis penyakit yang dapat menyerang ternak mereka dan ciri-ciri penyakit tersebut. Hal ini berdampak pada produktivitas ternak dan kesejahteraan ekonomi peternak. Menanggapi kebutuhan tersebut, Dimas Aji, mahasiswa Fakultas Peternakan, menginisiasi program sosialisasi penyakit ternak untuk meningkatkan pemahaman peternak di Dusun Semampiran. Program ini dilaksanakan pada tanggal 28 Juli 2024, bertempat di rumah Pak Bayan. Dengan adanya kegiatan ini, diharapkan para peternak dapat lebih waspada terhadap kesehatan hewan ternak mereka dan mampu mengambil langkah-langkah pencegahan yang tepat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program sosialisasi ini terdiri dari penyampaian materi mengenai berbagai jenis penyakit yang umum menyerang hewan ruminansia serta ciri-ciri yang harus diperhatikan oleh peternak. Sosialisasi ini dilaksanakan melalui presentasi berbentuk PowerPoint. Informasi yang disampaikan mencakup gejala awal, dampak penyakit terhadap kesehatan hewan, serta cara pencegahan yang bisa dilakukan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Peserta sosialisasi, yang merupakan warga Dusun Semampiran yang memiliki hewan ternak, menunjukkan antusiasme yang tinggi terhadap materi yang disampaikan. Mereka aktif mendengarkan dan menanyakan mengenai penjelasan materi yang telah disampaikan. Pengetahuan yang diberikan diharapkan mampu memberikan pemahaman mendalam tentang pentingnya menjaga kesehatan ternak agar tetap produktif dan bebas dari penyakit.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah penyampaian materi, program dilanjutkan dengan sesi tanya jawab dan diskusi. Para peternak diberikan kesempatan untuk mengajukan pertanyaan terkait masalah yang mereka hadapi dalam beternak. Banyak dari mereka yang berbagi pengalaman pribadi, seperti kejadian penyakit yang pernah menimpa ternak mereka dan bagaimana mereka mengatasinya. Sesi ini menjadi momen berharga untuk saling bertukar informasi dan solusi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Diskusi berlangsung hangat, dengan peserta saling memberikan masukan dan saran berdasarkan pengalaman masing-masing. Interaksi yang dinamis ini menciptakan suasana kekeluargaan dan memperkuat rasa kebersamaan antar mahasiswa KKN PPM UGM Sub Unit Ketundan I dengan peternak di Dusun Semampiran.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dengan adanya program sosialisasi ini, diharapkan peternak di Dusun Semampiran dapat lebih proaktif dalam menjaga kesehatan ternak mereka. Pengetahuan yang didapat dari kegiatan ini akan menjadi modal penting bagi mereka untuk mengidentifikasi dan menangani masalah kesehatan hewan secara lebih efektif. Selain itu, kesadaran akan pentingnya kesehatan ternak diharapkan dapat mendorong peternak untuk saling berbagi informasi dan pengalaman sehingga kualitas ternak di dusun ini semakin meningkat.
        </Text>
      </>
    ),
  },
  "pmt-balita": {
    image: "/semampiran/pmt-balita.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pembuatan PMT untuk Balita Sebagai Langkah Intervensi Stunting Pada Balita Berbahan Dasar Pangan Lokal ",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Stunting merupakan masalah gizi serius yang masih menjadi tantangan besar di Indonesia, termasuk di Dusun Semampiran. Berdasarkan data dari Kementerian Kesehatan, prevalensi stunting di Indonesia mencapai angka yang mengkhawatirkan, terutama pada balita. Kondisi ini berpotensi menghambat pertumbuhan fisik dan perkembangan kognitif anak, yang berdampak pada kualitas sumber daya manusia di masa depan. Oleh karena itu, perlu adanya langkah intervensi yang efektif, salah satunya melalui pemberian Pemberian Makanan Tambahan (PMT) berbahan dasar pangan lokal.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program pembuatan PMT ini diinisiasi oleh Arlita Tanzila Amiril, seorang mahasiswa dari Fakultas Kedokteran, Keperawatan, dan Kesehatan Masyarakat. Pada tanggal 20 Juli 2024, program ini dilaksanakan di rumah induk semang, Pak Daryono. Target utama dari program ini adalah kader posyandu dan ibu-ibu PKK yang berperan penting dalam penyuluhan gizi kepada masyarakat. Dengan pendekatan ini, diharapkan pengetahuan tentang pentingnya PMT dapat tersebar lebih luas dan mendukung upaya pengurangan angka stunting di Dusun Semampiran.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pelaksanaan program terdiri dari sosialisasi tentang pentingnya PMT dan demonstrasi memasak menu PMT yang sederhana namun bergizi, yaitu sate tahu pentul. Melalui sesi sosialisasi, peserta diberikan materi edukasi yang disajikan dalam bentuk PowerPoint, booklet PMT, dan kartu resep PMT. Materi ini dirancang agar mudah dipahami dan diaplikasikan oleh para kader dan ibu-ibu PKK. Tujuan dari sosialisasi ini adalah untuk meningkatkan kesadaran akan pentingnya gizi seimbang bagi tumbuh kembang balita.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah sosialisasi, kegiatan dilanjutkan dengan demonstrasi memasak sate tahu pentul. Menu ini dipilih karena bahan-bahannya mudah didapat di sekitar Dusun Semampiran dan kaya akan nutrisi. Dalam demonstrasi ini, peserta diajarkan cara memilih bahan makanan lokal yang berkualitas serta teknik memasak yang sehat. Aktivitas ini tidak hanya memberikan keterampilan praktis tetapi juga menumbuhkan kreativitas dalam menyajikan makanan bergizi untuk anak-anak.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Audience sangat antusias dengan program ini, terlihat dari banyaknya pertanyaan yang diajukan selama sesi. Keterlibatan aktif mereka menunjukkan bahwa ada keinginan untuk menerapkan ilmu yang didapat dalam kehidupan sehari-hari. Dengan dukungan dari semua pihak, diharapkan program ini dapat berkelanjutan dan memberikan dampak positif terhadap status gizi balita di Dusun Semampiran. Keberhasilan program ini menjadi harapan baru dalam upaya mengurangi angka stunting, menjadikan generasi yang lebih sehat dan cerdas di masa depan.
        </Text>
      </>
    ),
  },
  "materi": {
    image: "/semampiran/materi.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pemberian Materi Pembelajaran Bahasa Inggris dalam Bentuk Kelas Gratis sebagai Bentuk Pengembangan Wawasan dalam Bidang Bahasa",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Dalam upaya meningkatkan akses pendidikan berkualitas di Dusun Semampiran, mahasiswa KKN menginisiasi program kelas gratis untuk anak-anak. Program ini bertujuan tidak hanya untuk mengajarkan bahasa Inggris, tetapi juga untuk membangun kepercayaan diri dan antusiasme anak-anak dalam mempelajari bahasa asing. Dengan pendekatan yang menyenangkan, kelas ini diharapkan dapat memberikan pengalaman belajar yang berharga bagi peserta.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kelas bahasa Inggris dilaksanakan setiap minggu dengan jadwal yang fleksibel, menyesuaikan kegiatan sehari-hari anak-anak. Materi yang diajarkan meliputi kosakata dasar, tata bahasa, percakapan sehari-hari, serta latihan berbicara (speaking). Metode pengajaran yang digunakan sangat bervariasi, mulai dari permainan edukatif, cipta karya, hingga role play dan outdoor class. Pendekatan ini dirancang agar pembelajaran menjadi lebih menarik dan menyenangkan bagi anak-anak.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Fokus utama dari kelas ini bukan hanya pada penyampaian materi, tetapi juga pada pembangunan kepercayaan diri anak-anak. Melalui latihan berbicara dan interaksi yang aktif, anak-anak didorong untuk mempraktikkan bahasa Inggris dalam situasi nyata. Dengan cara ini, mereka diharapkan dapat lebih percaya diri dalam menggunakan bahasa Inggris, baik di sekolah maupun dalam kehidupan sehari-hari. Antusiasme yang muncul selama kelas menjadi indikator positif bahwa metode ini berhasil menarik minat anak-anak.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program ini tidak hanya memberikan manfaat bagi anak-anak, tetapi juga bagi mahasiswa yang terlibat. Mereka mendapatkan pengalaman berharga dalam mengajar dan berinteraksi dengan anak-anak, sekaligus belajar bagaimana menyusun materi dan metode pengajaran yang efektif. Keterlibatan dalam proyek ini membantu mahasiswa mengembangkan keterampilan interpersonal dan pedagogis yang sangat berguna untuk karier masa depan mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dengan adanya kelas gratis ini, diharapkan anak-anak Dusun Semampiran dapat tumbuh dengan pengetahuan bahasa Inggris yang lebih baik, sementara mahasiswa KKN memperoleh pengalaman yang tak ternilai. Program ini sejalan dengan poin SDGs tentang pendidikan berkualitas, menciptakan dampak positif yang berkelanjutan bagi masyarakat.
        </Text>
      </>
    ),
  },
  "sosialisasi-google": {
    image: "/semampiran/sosialisasi-google.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Sosialisasi Pemanfaatan Google Maps oleh Masyarakat Dusun Semampiran untuk Plot Lokasi Usaha",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Diberkahi dengan sumber daya dan kondisi alam yang kaya, masyarakat Dusun Semampiran tidak serta-merta hanya berfokus pada pekerjaan yang melibatkan mereka untuk terjun langsung ke ladang dan sawah. Di samping pekerjaan tersebut, masyarakat turut mencari sumber pendapatan lain salah satunya dengan membuka usaha. Dalam rangka meningkatkan pengetahuan dan keterampilan masyarakat, mahasiswa KKN mengadakan program sosialisasi dan pembuatan plot lokasi usaha di Dusun Semampiran, Desa Ketundan, Kecamatan Pakis, Kabupaten Magelang. Kegiatan ini bertujuan untuk membantu masyarakat memahami pentingnya branding serta pemasaran usaha lokal. Dengan memanfaatkan teknologi aplikasi Google Maps, diharapkan usaha masyarakat setempat dapat lebih dikenal dan mudah diakses oleh konsumen.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kegiatan sosialisasi dimulai dengan pemaparan materi mengenai branding dan pemasaran usaha lokal. Mahasiswa menjelaskan bagaimana branding yang baik dapat menarik perhatian konsumen dan meningkatkan penjualan. Peserta diberikan penjelasan secara lisan mengenai strategi yang dapat diterapkan dalam usaha mereka sehingga mereka dapat merasakan langsung manfaat dari peningkatan pengetahuan ini.
        Setelah sosialisasi, peserta diajarkan cara membuat plot lokasi usaha menggunakan Google Maps. Mahasiswa mendemonstrasikan langkah-langkah praktis yang dapat dilakukan oleh masyarakat untuk menandai lokasi usaha mereka secara digital. Dengan adanya plot lokasi ini, diharapkan calon pelanggan dapat lebih mudah menemukan dan mengunjungi usaha yang ada di Dusun Semampiran
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Sebagai tambahan, setiap peserta mendapatkan materi fisik berupa flyer yang berisi ringkasan poin-poin penting dari sosialisasi dan langkah-langkah pembuatan plot lokasi usaha. Flyer ini berfungsi sebagai panduan bagi masyarakat agar mereka dapat menerapkan ilmu yang telah didapatkan dalam kegiatan sehari-hari. Dengan adanya materi ini, diharapkan pemahaman masyarakat terhadap pentingnya pemasaran dan branding usaha akan semakin meningkat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Program KKN ini diharapkan dapat memberikan dampak positif bagi masyarakat Dusun Semampiran. Melalui sosialisasi dan pelatihan yang dilakukan, masyarakat diharapkan dapat meningkatkan daya saing usaha mereka dan memperluas jaringan pasar. Dengan demikian, usaha lokal dapat berkembang dan memberikan kontribusi yang lebih besar bagi perekonomian daerah.
        </Text>
      </>
    ),
  },
  "video-profil": {
    image: "/semampiran/video-profil.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Mengulik Kehidupan dari Segi Ekonomi, Sosial, hingga Lingkungan dan Kesehatan",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Dusun Semampiran, yang terletak di Desa Ketundan, Kecamatan Pakis, Kabupaten Magelang, kini menjadi sorotan melalui program kerja Kuliah Kerja Nyata (KKN) mahasiswa. Dalam rangka memperkenalkan potensi dan tantangan yang dihadapi masyarakat setempat, mahasiswa akan membuat video profil yang mencakup berbagai aspek kehidupan dusun. Video ini tidak hanya bertujuan untuk promosi, tetapi juga sebagai alat evaluasi bagi perangkat desa dalam upaya pembangunan berkelanjutan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dalam segi ekonomi, video ini akan mengeksplorasi komoditas utama yang menjadi andalan masyarakat Dusun Semampiran. Mahasiswa akan melakukan wawancara dengan masyarakat untuk memahami jenis-jenis produk yang dihasilkan serta pekerjaan mayoritas penduduk. Hasil dari pembahasan ini diharapkan dapat memberikan gambaran jelas mengenai potensi ekonomi yang ada, sekaligus tantangan yang mereka hadapi dalam meningkatkan kesejahteraan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dari sudut pandang sosial, video profil ini akan menyoroti interaksi dan hubungan antarwarga di Dusun Semampiran. Masyarakat saling membantu dalam berbagai aspek kehidupan sehari-hari, menciptakan ikatan yang kuat antara individu. Prinsip gotong royong menjadi landasan utama dalam membangun solidaritas dan kepercayaan di antara mereka. Dengan demikian, penonton dapat merasakan kehangatan serta kekompakan komunitas ini.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Aspek lingkungan dan kesehatan juga akan menjadi fokus penting dalam pembuatan video. Melalui pengamatan dan wawancara, mahasiswa akan mengulik isu-isu lingkungan yang mungkin pernah atau sedang dialami, serta usaha masyarakat dalam menangani isu-isu tersebut. Informasi yang disampaikan diharapkan dapat menjadi masukan berharga bagi perangkat desa untuk merumuskan langkah-langkah perbaikan dan peningkatan kualitas hidup masyarakat. Melalui inisiatif ini, diharapkan video profil Dusun Semampiran tidak hanya menjadi alat promosi, tetapi juga menjadi media evaluasi yang bermanfaat bagi perangkat desa. Dengan demikian, Dusun Semampiran dapat terus berkembang dan meningkatkan kesejahteraan masyarakatnya. Program KKN ini juga diharapkan dapat menciptakan kerja sama yang baik antara mahasiswa dan masyarakat, sehingga hasilnya dapat dirasakan langsung oleh mereka.
        </Text>
      </>
    ),
  },
};
