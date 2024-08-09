import { Text } from "@/components";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleSoshum = {
  [key: string]: Article;
};

export const dataArticleSoshum: DataArticleSoshum = {
  "dompet-digital": {
    image: "/soshum/dompet-digital.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Memahami dan Menggunakan Dompet Digital",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Di era digital saat ini, dompet digital atau e-wallet telah menjadi
          salah satu metode pembayaran yang paling populer. Dompet digital
          adalah aplikasi yang memungkinkan pengguna menyimpan uang secara
          elektronik di smartphone mereka. Dengan dompet digital, transaksi
          keuangan dapat dilakukan dengan lebih mudah, cepat, dan aman.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dompet digital adalah layanan keuangan digital yang memungkinkan
          pengguna menyimpan uang secara elektronik. Aplikasi ini menggantikan
          fungsi dompet fisik dan memungkinkan transaksi tanpa uang tunai,
          seperti pembayaran belanja online, transfer uang, dan pembayaran
          tagihan. Beberapa contoh dompet digital yang populer di Indonesia
          adalah GoPay, OVO, dan Dana.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Menggunakan dompet digital sangat mudah. Berikut adalah
          langkah-langkah umum untuk memulai: 1. Unduh Aplikasi: Pertama, unduh
          aplikasi dompet digital pilihan Anda dari Google Play Store atau App
          Store. 2. Daftar dan Verifikasi: Setelah mengunduh aplikasi, daftar
          dengan mengisi informasi pribadi seperti nama, nomor telepon, dan
          alamat email. Beberapa aplikasi mungkin memerlukan verifikasi
          identitas sebagai langkah keamanan tambahan. 3. Isi Saldo: Tambahkan
          saldo ke akun dompet digital Anda melalui transfer bank, kartu kredit,
          atau top-up di gerai atau minimarket yang bermitra. 4. Lakukan
          Transaksi: Dengan saldo yang ada, Anda dapat melakukan berbagai
          transaksi seperti pembayaran di toko fisik dengan scan kode QR,
          pembelian online, pembayaran tagihan, dan transfer uang.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dompet digital menawarkan berbagai manfaat, baik bagi pengguna maupun
          pemilik bisnis: 1. Kemudahan dan Kecepatan: Transaksi dapat dilakukan
          dengan cepat tanpa perlu membawa uang tunai. Ini sangat praktis untuk
          pembayaran sehari-hari. 2. Keamanan: Dompet digital dilengkapi dengan
          fitur keamanan seperti PIN atau verifikasi dua langkah sehingga lebih
          aman dibandingkan membawa uang tunai. 3. Pencatatan Otomatis: Semua
          transaksi tercatat secara otomatis dalam aplikasi, memudahkan pengguna
          untuk melacak pengeluaran dan mengelola keuangan. 4. Promosi dan
          Diskon: Banyak aplikasi dompet digital menawarkan promosi dan diskon
          menarik yang dapat menghemat pengeluaran pengguna.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dompet digital adalah solusi keuangan modern yang praktis dan aman.
          Dengan memahami cara kerja dan manfaatnya, pengguna dapat memanfaatkan
          teknologi ini untuk mempermudah transaksi sehari-hari dan mengelola
          keuangan dengan lebih baik. Jadi, mari mulai menggunakan dompet
          digital
        </Text>
      </>
    ),
  },
  "pelatihan-akuntansi": {
    image: "/soshum/pelatihan-akuntansi.jpg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Sosialisasi dan Pelatihan Akuntansi Sederhana",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Pelatihan ini dimulai dengan pengenalan konsep dasar akuntansi kepada
          para peserta, yang terdiri dari anggota PKK dan ibu-ibu di Dusun
          Semampiran. Pada tahap awal, peserta diajak untuk memahami definisi
          akuntansi dan pentingnya penerapan akuntansi dalam mengelola keuangan.
          Selain itu, mereka juga diperkenalkan pada kelompok-kelompok akun
          utama dalam akuntansi, yaitu aktiva (aset) dan pasiva (kewajiban dan
          ekuitas). Setiap kelompok akun dijelaskan secara rinci, termasuk
          jenis-jenis akun seperti kas, piutang, utang, dan modal sehingga
          peserta mendapatkan pemahaman yang mendalam tentang dasar-dasar
          akuntansi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Setelah peserta memahami konsep dasar akuntansi dan kelompok akun,
          pelatihan dilanjutkan dengan pemberian ilustrasi transaksi keuangan.
          Dalam sesi ini, peserta diajari cara mencatat transaksi keuangan
          sehari-hari ke dalam sistem akuntansi. Contoh-contoh transaksi yang
          disajikan diambil dari kegiatan yang umum terjadi dalam keuangan PKK,
          seperti penerimaan dana dari penjualan atau pengeluaran untuk dana
          bantuan. Ilustrasi ini membantu peserta untuk lebih mudah memahami
          bagaimana transaksi keuangan dicatat dengan benar.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Tahap terakhir dalam pelatihan ini adalah penyusunan laporan laba rugi
          berdasarkan transaksi yang telah dicatat. Peserta diajarkan cara
          mengumpulkan dan mengklasifikasikan pendapatan serta biaya yang
          terjadi selama periode tertentu. Langkah-langkah penyusunan laporan
          laba rugi dijelaskan secara terperinci, mulai dari pengumpulan data,
          penjumlahan pendapatan dan biaya, hingga perhitungan laba atau rugi
          bersih. Dengan latihan ini, peserta diharapkan mampu menyusun laporan
          laba rugi yang akurat dan informatif. Laporan ini dapat digunakan
          untuk mengevaluasi kinerja keuangan desa dan membuat keputusan yang
          lebih baik di masa mendatang.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan ini menjadi langkah penting dalam meningkatkan kapasitas
          anggota PKK dalam mengelola keuangan dengan baik, yang pada akhirnya
          akan berdampak positif pada kesejahteraan masyarakat desa secara
          keseluruhan.
        </Text>
      </>
    ),
  },
  "aset-dusun": {
    image: "/soshum/aset-dusun.jpg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title:
      "Pengamatan Aset Dusun dan Pengajaran Pencatatan Aset ke Aplikasi Inventarisasi",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Dalam upaya meningkatkan transparansi dan efisiensi pengelolaan aset
          di tingkat dusun, pengamatan aset dan pengajaran pencatatan aset
          menjadi langkah yang sangat penting. Di era digital ini, memanfaatkan
          aplikasi inventarisasi aset dapat mempermudah pengelolaan serta
          memastikan semua aset tercatat dengan baik dan akurat. Artikel ini
          akan membahas pentingnya pengamatan aset dusun, langkah-langkah
          pengajaran pencatatan aset, serta manfaat yang diperoleh dari
          penggunaan aplikasi inventarisasi. Melalui inisiatif ini, diharapkan
          dapat tercipta sistem pengelolaan aset yang lebih baik dan terpercaya,
          yang pada akhirnya akan mendukung pembangunan dusun yang berkelanjutan
          dan transparan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Tahap awal dalam program kerja ini adalah melakukan pengamatan
          langsung terhadap aset- aset dusun. Tim KKN bekerja sama dengan
          perangkat desa untuk mengidentifikasi dan mendata aset-aset yang ada,
          seperti bangunan, lahan, peralatan, dan fasilitas umum lainnya.
          Pengamatan ini bertujuan untuk mendapatkan data akurat dan lengkap
          mengenai kondisi dan nilai aset yang dimiliki dusun. Tim KKN
          menggunakan metode survei dan wawancara untuk mengumpulkan informasi
          dari berbagai sumber, termasuk kepala dusun dan warga setempat. Setiap
          aset didokumentasikan dengan foto dan deskripsi rinci yang akan
          diintegrasikan ke dalam aplikasi inventarisasi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Setelah data aset terkumpul, langkah selanjutnya adalah mengajarkan
          penggunaan aplikasi inventarisasi kepada kepala dusun dan perangkat
          desa lainnya. Pelatihan ini dilakukan secara interaktif dengan metode
          hands-on, di mana peserta langsung praktek menggunakan aplikasi di
          perangkat mereka. Tim KKN menjelaskan fitur-fitur utama aplikasi,
          seperti input data aset, pencarian aset, pembaruan informasi, dan
          pembuatan laporan. Kepala dusun dan perangkat desa diajak untuk
          memasukkan data aset yang telah dikumpulkan ke dalam aplikasi,
          memastikan mereka memahami setiap langkah proses tersebut. Selain itu,
          tim KKN juga memberikan panduan tertulis dan video tutorial sebagai
          bahan rujukan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Setelah pelatihan selesai dan kepala dusun serta perangkat desa merasa
          nyaman menggunakan aplikasi, tahap berikutnya adalah penyerahan file
          aplikasi inventarisasi secara resmi kepada kepala dusun. Penyerahan
          ini dilakukan dalam sebuah acara sederhana yang dihadiri oleh tim KKN,
          perangkat desa, dan beberapa perwakilan warga. Kepala dusun menerima
          file aplikasi beserta seluruh data aset yang telah dimasukkan. Tim KKN
          juga menyediakan dukungan teknis pasca-penyerahan untuk memastikan
          aplikasi berjalan lancar dan dapat digunakan secara efektif oleh
          perangkat desa.Dengan program ini, diharapkan desa dapat memiliki
          sistem pencatatan aset yang lebih teratur dan efisien, yang pada
          akhirnya akan membantu dalam pengelolaan dan pemanfaatan aset dusun
          secara optimal.
        </Text>
      </>
    ),
  },
  "analisa-wisata": {
    image: "/soshum/analisa-wisata.jpg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Analisis Destinasi Wisata di Desa Pogalan",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Desa Pogalan adalah permata tersembunyi yang menawarkan banyak tempat
          wisata menarik. Dari air terjun yang menenangkan hingga kerajinan
          batik yang unik, desa ini punya banyak potensi wisata yang bisa
          dijelajahi. Keindahan alam dan kekayaan budaya di Desa Pogalan
          membuatnya menjadi tempat yang sempurna untuk wisatawan yang mencari
          pengalaman berbeda. Namun, untuk memudahkan wisatawan menemukan dan
          menikmati semua tempat menarik ini, dibutuhkan peta wisata yang jelas
          dan informatif. Artikel ini akan membahas berbagai destinasi wisata di
          Desa Pogalan dan betapa pentingnya peta wisata bagi para pengunjung.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Peta wisata yang dibuat dengan cermat dan informatif menawarkan banyak
          manfaat. Pertama, peta memudahkan wisatawan dalam menemukan dan
          menjangkau destinasi utama di Desa Pogalan, seperti objek wisata alam,
          situs bersejarah, dan fasilitas pendukung lainnya. Kedua, dengan
          adanya peta ini, pengunjung dapat merencanakan perjalanan mereka
          dengan lebih baik sehingga waktu yang mereka habiskan untuk menikmati
          berbagai atraksi dapat dimaksimalkan. Ketiga, peta wisata yang disusun
          dengan detail juga berperan dalam mempromosikan destinasi lokal,
          dengan menampilkan keunikan dan potensi wisata yang ada di desa
          tersebut.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Peta wisata ini dirancang untuk memberikan panduan yang jelas dan
          detail bagi wisatawan yang ingin menjelajahi Desa Pogalan. Peta ini
          bertujuan untuk menyoroti berbagai atraksi dan fasilitas penting
          seperti pegunungan, hutan, penginapan, dan tempat makan. Selain itu,
          peta ini juga diharapkan menjadi alat yang efektif dalam merencanakan
          rute perjalanan yang efisien sehingga para pengunjung dapat menikmati
          pengalaman wisata yang optimal.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam pembuatan peta wisata ini, ada beberapa langkah utama yang
          dilakukan. Pertama, pengumpulan titik koordinat dari berbagai
          destinasi wisata di Desa Pogalan dilakukan dengan menggunakan Google
          Maps. Data koordinat ini kemudian diproses menggunakan Excel untuk
          memastikan keakuratan dan konsistensi informasi. Selanjutnya,
          simbol-simbol yang relevan dipilih untuk dimasukkan ke dalam peta,
          seperti simbol untuk gunung, hutan, penginapan, tempat makan, dan
          destinasi wisata lainnya. Pemilihan simbol yang tepat bertujuan untuk
          memastikan informasi yang disajikan dalam peta mudah dipahami oleh
          pengguna.Dengan adanya peta wisata ini, diharapkan Desa Pogalan dapat
          lebih dikenal dan menarik lebih banyak wisatawan, yang pada akhirnya
          akan mendukung pertumbuhan ekonomi lokal melalui sektor pariwisata.
        </Text>
      </>
    ),
  },
};
