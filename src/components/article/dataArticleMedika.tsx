/* eslint-disable react/no-unescaped-entities */
import { Text } from "@/components"

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleMedika = {
  [key: string]: Article;
};

export const dataArticleMedika: DataArticleMedika = {
  "farmasi-cilik": {
    image: "/medika/farmasi-cilik.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Edukasi Kesehatan Anak-Anak dan Pencegahan Penyalahgunaan Obat di SD Negeri Pogalan 3",
    text: (
      <>
         <Text size="lg" className="indent-10">
         KKN PPM UGM periode 2 tahun 2024 mengadakan kegiatan edukasi kesehatan bertajuk &quot;Farmasi Cilik dan Dagusibu&quot; yang diikuti oleh siswa kelas 5 SD Negeri Pogalan 3 selama dua hari. Kegiatan ini bertujuan untuk memberikan pengetahuan dasar tentang penggunaan obat yang benar serta pencegahan penyalahgunaan obat sejak dini. Selain itu, siswa juga diedukasi tentang penyakit yang umum terjadi seperti diabetes dilengkapi cara pencegahannya. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pada hari pertama, kegiatan dimulai dengan pemaparan materi farmasi dan konsep Dagusibu (Dapatkan, Gunakan, Simpan, Buang). Para siswa diajak untuk memahami pentingnya mendapatkan obat dari sumber yang terpercaya, menggunakan obat sesuai petunjuk dokter atau label, menyimpan obat di tempat yang aman dan sesuai dengan instruksi, serta membuang obat yang sudah kedaluwarsa atau rusak dengan cara yang benar. Selain itu, materi tentang jenis-jenis obat dan hal-hal yang perlu diperhatikan terkait obat juga disampaikan dengan bahasa yang mudah dipahami anak-anak, dilengkapi dengan ilustrasi dan contoh-contoh nyata yang relevan dengan kehidupan sehari-hari mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah pemaparan materi, siswa mengikuti sesi permainan interaktif &quot;Game Menggerus Obat&quot;. Dalam permainan ini, siswa belajar cara menggerus obat dengan benar, memahami dosis yang tepat, serta membaca label obat dengan cermat. Aktivitas ini dirancang untuk membuat proses belajar menjadi menyenangkan dan menarik, sehingga siswa lebih mudah mengingat informasi yang diberikan. Pada game ini dipilih kelompok yang paling cepat dan rapi dalam melipat pulveres sebagai juaranya. Selain itu, dilakukan juga kuis untuk menguji pemahaman siswa tentang materi yang telah disampaikan. Siswa yang berhasil menjawab pertanyaan dengan benar mendapatkan hadiah kecil sebagai bentuk apresiasi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pada hari kedua, kegiatan dilanjutkan dengan pemaparan materi tentang diabetes dan cara pencegahannya. Siswa diajarkan tentang apa itu diabetes, faktor risiko yang dapat menyebabkan penyakit ini, serta pentingnya menjalani gaya hidup sehat untuk mencegah diabetes. Materi ini disampaikan dengan cara yang interaktif dan mudah dipahami, sehingga siswa dapat mengerti dan menerapkannya dalam kehidupan sehari-hari mengingat kasus diabetes ini banyak terjadi dan sering tidak disadari.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah pemaparan materi, siswa diajak untuk membuat poster bertema &quot;Ayo Cegah Diabetes dengan GEMBIRA&quot;. GEMBIRA merupakan singkatan cara pencegahan diabetes, yaitu Giat olahraga dan aktivitas fisik; Enyahkan rokok dan alkohol; Makan makanan sehat dengan gizi seimbang; Bahagia, kelola stres, dan istirahat yang cukup; Ingat batasi konsumsi gula, garam, dan lemak berlebih; Rutin periksa gula darah dan kadar HbA1c; dan Atur berat badan tetap ideal. Kebiasaan ini perlu diajarkan sejak dini karena biasanya diabetes disebabkan oleh gaya hidup sejak dini. Mereka dibagi menjadi kelompok-kelompok kecil dan diberikan alat-alat untuk membuat poster kreatif yang berisi pesan-pesan pencegahan diabetes. Aktivitas ini tidak hanya mengasah kreativitas siswa, tetapi juga menanamkan kesadaran akan pentingnya menjaga kesehatan sejak dini. Poster yang dihasilkan kemudian dipajang di majalah dinding sebagai bentuk kampanye kesehatan yang dapat dilihat oleh seluruh siswa dan guru.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Melalui kegiatan ini, siswa kelas 5 SD Negeri Pogalan 3 mendapatkan pengetahuan dan keterampilan berharga tentang penggunaan obat yang benar serta pencegahan diabetes. Diharapkan, mereka dapat menerapkan ilmu yang didapat dalam kehidupan sehari-hari dan menjadi agen perubahan positif di lingkungan sekitar sehingga dapat terbentuk generasi muda yang sehat dan cerdas.
        </Text>
      </>
    ),
  },
  "isi-piringku": {
    image: "/medika/isi-piringku.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Mengenal Isi Piringku untuk Masa Depan Cerah ",
    text: (
      <>
         <Text size="lg" className="indent-10">
         Program kerja KKN kami, &quot;Mengenal Isi Piringku untuk Masa Depan Cerah,&quot; bertujuan untuk meningkatkan kesadaran anak-anak di SD N Ketundan 1 mengenai pentingnya konsumsi makanan bergizi. Dengan fokus pada pemahaman mengenai porsi yang tepat dari sayur, buah, dan protein, kami berharap anak-anak dapat menerapkan pengetahuan ini dalam pola makan sehari-hari mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kegiatan ini terdiri dari beberapa sesi interaktif, dimulai dengan pemaparan materi mengenai gizi seimbang. Kami mengadakan diskusi yang melibatkan anak-anak untuk menjelaskan pentingnya mengonsumsi berbagai jenis makanan sesuai dengan panduan Isi Piringku. Untuk membuat proses belajar menjadi lebih menyenangkan, kami menggunakan metode permainan, seperti menempelkan gambar jenis makanan pada poster Isi Piringku. Melalui permainan ini, anak-anak belajar tentang tempat masing-masing makanan pada piring dan bagaimana menciptakan pola makan yang sehat. Sebagai bagian dari program ini, kami juga membagikan pisang dan susu kepada anak-anak. Ini tidak hanya sebagai contoh dari makanan bergizi, tetapi juga sebagai bentuk apresiasi atas partisipasi mereka dalam kegiatan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Metode yang digunakan dalam program ini adalah diskusi interaktif dan permainan edukatif. Poster Isi Piringku berfungsi sebagai alat bantu visual yang memudahkan anak-anak dalam memahami bagaimana menyusun makanan di piring mereka. Kami percaya bahwa melalui pendekatan yang menyenangkan dan interaktif, anak-anak lebih mudah memahami dan mengingat informasi penting tentang gizi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Selama pelaksanaan kegiatan, anak-anak menunjukkan antusiasme yang luar biasa, terutama saat bermain game. Meskipun terkadang suasana menjadi sedikit ricuh, kami berhasil mengatasi situasi tersebut dengan melakukan ice breaking sehingga kegiatan tetap berjalan lancar dan menyenangkan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Harapan kami setelah program ini adalah anak-anak akan semakin sadar akan pentingnya makan makanan bergizi sesuai dengan panduan Isi Piringku. Kami juga berharap mereka akan lebih rajin mengonsumsi sayur dan buah, yang merupakan bagian penting dari pola makan sehat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Secara keseluruhan, program &quot;Mengenal Isi Piringku untuk Masa Depan Cerah&quot; berhasil menciptakan pengalaman belajar yang menyenangkan dan bermanfaat bagi anak-anak, serta meningkatkan kesadaran mereka mengenai pentingnya gizi dalam kehidupan sehari-hari.
        </Text>
      </>
    ),
  },
  "jamu-temulawak": {
    image: "/medika/jamu-temulawak.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Jamu Temulawak-Kunyit: Minuman Tradisional untuk Cegah Stunting",
    text: (
      <>
         <Text size="lg" className="indent-10">
         Stunting masih menjadi permasalahan serius di Indonesia hingga saat ini. Berdasarkan data Elektronik Pencatatan dan Pelaporan Gizi Berbasis Masyarakat (E-PPGBM) Kabupaten Magelang, prevalensi stunting mengalami kenaikan dari 13,11% pada tahun 2022 menjadi 15,22% pada tahun 2023. Salah satu faktor risiko penyebab stunting adalah kurangnya nafsu makan sehingga anak cenderung mengalami penurunan berat badan.  Berdasarkan hal tersebut, tim KKN-PPM Universitas Gadjah Mada Periode 2 melaksanakan program kerja berupa pembuatan jamu cegah stunting yang berkhasiat meningkatkan nafsu makan. Kegiatan tersebut dilaksanakan di Dusun Gerdu yang dihadiri oleh kader posyandu dan ibu-ibu PKK. Tujuannya adalah meningkatkan pengetahuan dan keterampilan peserta dalam pemanfaatan tanaman obat keluarga (TOGA) untuk dibuat produk jamu cegah stunting. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pelaksanaan kegiatan diawali dengan pengenalan berbagai jenis tanaman obat keluarga (TOGA)  serta bagian tanaman apa saja yang bisa diolah untuk dimanfaatkan sebagai obat/jamu melalui presentasi. Setelah itu, peserta diajak membuat jamu bersama. Bahan-bahan yang diperlukan terdiri dari rimpang dan non rimpang dengan perbandingan 1:1. Bahan rimpang yang dibutuhkan terdiri dari ¼ kg temulawak dan ¼ kg kunyit. Sementara itu, bahan non-rimpang terdiri dari 20 gram kayu manis, 50 gram secang, 13 batang serai, 2 buah kapulaga, 2 batang cengkeh, 250 mL air, dan 250 gram gula pasir. Cara pembuatan jamu ini cukup sederhana, yaitu dengan merebus bahan non rimpang yang dicampur dengan perasan bahan rimpang yang sebelumnya sudah diparut. Setelah itu, campuran keduanya dipanaskan hingga terbentuk kristal/serbuk jamu. Anak-anak dan ibu dapat mengkonsumsi jamu ini dengan takaran 1 sendok makan serbuk jamu yang ditambah 75-100 mL air panas. Sementara itu, masa penyimpanan jamu ini adalah satu tahun. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dengan konsumsi jamu ini, diharapkan nafsu makan anak-anak di desa tersebut akan meningkat. Dengan demikian, asupan gizi dan nutrisi yang mereka butuhkan untuk tumbuh kembang yang optimal dapat terpenuhi, sehingga terhindar dari masalah stunting. Acara dilanjutkan dengan sesi tanya jawab untuk mempersilahkan para ibu bertanya jika ada pemaparan yang kurang jelas. Rangkaian terakhir acara ini ditutup dengan pembagian jamu cegah stunting dan foto bersama. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Melalui program ini, diharapkan masyarakat Dusun Gerdu  terutama para ibu  dapat memperoleh pengetahuan dan keterampilan dalam mengolah bahan-bahan alami untuk meningkatkan gizi dan kesehatan anak-anak mereka. Hal ini sejalan dengan upaya pemerintah untuk menurunkan angka stunting di Indonesia yang masih cukup tinggi.
        </Text>
      </>
    ),
  },
  "pembuatan-pmt": {
    image: "/medika/pembuatan-pmt.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pembuatan PMT Sebagai Langkah Intervensi Stunting Pada Balita Berbahan Dasar Pangan Lokal ",
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
};
