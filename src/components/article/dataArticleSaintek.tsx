import { Text } from "@/components";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleSaintek = {
  [key: string]: Article;
};

export const dataArticleSaintek: DataArticleSaintek = {
  "pembuatan-peta": {
    image: "/saintek/pembuatan-peta.jpeg",
    location: "Dusun Gerdu, Kelurahan Pogalan",
    title: "Pembuatan Peta Persebaran Hewan Ternak Warga",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Program Kerja Pembuatan Peta Persebaran Hewan Ternak Warga di Dusun Gerdu bertujuan untuk mendokumentasikan dan memetakan lokasi serta jenis hewan ternak milik warga. Kegiatan ini memberikan gambaran yang jelas mengenai persebaran hewan ternak, yang dapat digunakan sebagai dasar dalam perencanaan dan pengembangan sektor peternakan di dusun ini. Dalam program ini, berbagai tahapan kegiatan akan dilakukan untuk mencapai tujuan tersebut.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Tahapan pertama adalah pendataan awal. Tim akan mengumpulkan data melalui wawancara dengan warga dan observasi langsung di lapangan. Informasi yang dikumpulkan mencakup jenis hewan ternak, jumlah, dan lokasi kandang. Data yang terkumpul akan diolah untuk menghasilkan informasi yang akurat. Dalam proses ini, teknologi GPS (Global Positioning System) akan digunakan untuk menentukan koordinat lokasi kandang secara tepat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah data diolah, tahap selanjutnya adalah pembuatan peta. Peta ini akan memuat informasi mengenai lokasi dan jenis hewan ternak di Dusun Gerdu. Untuk memastikan data yang dihasilkan akurat, akan dilakukan validasi dengan melibatkan warga setempat. Validasi ini penting agar informasi yang terdapat dalam peta sesuai dengan kondisi nyata di lapangan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Setelah peta selesai dibuat dan divalidasi, hasilnya akan disosialisasikan kepada warga dan pihak terkait. Sosialisasi ini bertujuan agar warga dapat memahami dan memanfaatkan peta tersebut. Selain itu, pemerintah desa juga dapat menggunakan peta ini sebagai alat bantu dalam perencanaan pembangunan sektor peternakan. Dengan adanya peta persebaran yang akurat, diharapkan warga dan pemerintah desa dapat mengambil keputusan yang lebih baik untuk kesejahteraan bersama.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Manfaat dari kegiatan ini sangat beragam. Warga dapat mengetahui lokasi dan jenis hewan ternak di dusun mereka, sehingga ternak lebih terorganisir dan terdata dengan baik. Pemerintah desa dapat menggunakan peta ini untuk mengidentifikasi potensi dan permasalahan dalam sektor peternakan, serta merencanakan langkah-langkah pengembangan yang tepat. Selain itu, mahasiswa KKN yang terlibat dalam program ini dapat menerapkan ilmu yang dipelajari di bangku kuliah dan mendapatkan pengalaman langsung di lapangan, yang sangat berharga untuk pengembangan kompetensi mereka.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Secara keseluruhan, Program Kerja Pembuatan Peta Persebaran Hewan Ternak Warga di Dusun Gerdu diharapkan dapat memberikan kontribusi yang signifikan dalam pengelolaan dan pengembangan sektor peternakan di dusun ini. Dengan informasi yang akurat dan terorganisir, warga dan pemerintah desa dapat bekerja sama dalam meningkatkan kesejahteraan dan keberlanjutan sektor peternakan, yang pada akhirnya akan berdampak positif bagi seluruh komunitas di Dusun Gerdu.
        </Text>
      </>
    ),
  },
  "prototipe-instalasi": {
    image: "/saintek/prototipe-instalasi.jpeg",
    location: "Dusun Semampiran, Kelurahan Ketundan",
    title: "Pengenalan Prototipe Instalasi Pengolahan Air Limbah Domestik",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Program ini berisi kegiatan pengenalan rancangan awal (prototipe) kepada stakeholder dusun terkait untuk mengedukasi pengolahan limbah domestik dengan instalasi pengolahan limbah agar tidak mencemari lingkungan. Dusun ini mayoritas penduduknya adalah petani. Sebagai petani, kualitas tanah menjadi aset utama yang harus dijaga dan dipertahankan. Namun, salah satu masalah yang dihadapi adalah sistem sanitasi yang masih menggunakan septictank yang tidak sesuai dengan kriteria desain yang disyaratkan. Berdasarkan studi terbaru, efisiensi septictank dalam mengolah limbah domestik hanya sekitar 40%. Limbah domestik dengan kandungan BOD (Biochemical Oxygen Demand) yang tinggi berpotensi mencemari tanah jika tidak diolah dengan baik.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Topografi dusun ini juga sangat cocok untuk dibangun instalasi pengolahan air limbah domestik karena tidak memerlukan bantuan pompa untuk mengalirkan limbah. Dengan membangun instalasi pengolahan air limbah, limbah domestik dapat diolah dengan lebih efektif, dan hasil olahan air limbah bisa dimanfaatkan kembali untuk keperluan lain seperti irigasi atau keperluan rumah tangga non-konsumsi. Program ini dimulai dengan pengenalan prototipe instalasi pengolahan air limbah domestik kepada masyarakat dusun, dilanjutkan dengan sesi edukasi dan pelatihan mengenai pentingnya pengolahan limbah domestik yang baik dan benar. Selain itu, akan dilakukan simulasi dan demonstrasi cara kerja instalasi pengolahan air limbah menggunakan prototipe. Setelah sesi edukasi dan demonstrasi, akan diadakan diskusi untuk mendengar tanggapan dan masukan dari masyarakat. Jika masyarakat menunjukkan ketertarikan dan dukungan, program ini akan dilanjutkan dengan rencana implementasi instalasi pengolahan air limbah di dusun, melibatkan perencanaan detail, termasuk lokasi instalasi, desain akhir, serta sumber daya yang diperlukan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dengan adanya instalasi pengolahan air limbah domestik, limbah yang dibuang tidak akan mencemari lingkungan sekitar. Kualitas tanah dapat dipertahankan, yang sangat penting bagi profesi petani di dusun ini. Air hasil olahan dapat dimanfaatkan kembali untuk berbagai keperluan sehingga mengurangi penggunaan air bersih yang berlebihan. Dengan sanitasi yang lebih baik, risiko penyakit yang disebabkan oleh limbah domestik yang tidak diolah dengan baik akan berkurang. Program kerja ini diharapkan dapat memberikan solusi yang berkelanjutan untuk pengelolaan limbah domestik di dusun ini, menjaga kualitas tanah, dan meningkatkan kualitas hidup masyarakat.
        </Text>
      </>
    ),
  },
  "desain-retaining": {
    image: "/saintek/desain-retaining.jpeg",
    location: "Dusun Pucung, Kelurahan Pogalan",
    title: "Perencanaan Design Retaining Wall",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Sekitar lima bulan yang lalu, di Dusun Pucung, Desa Pogalan, Kecamatan Pakis, Kabupaten Magelang, Jawa Tengah terjadi musibah tanah longsor. Longsor tersebut mengakibatkan hampir setengah jalan kehilangan lapisan tanah penahan di bawahnya. Serta, daerah longsoran yang terjadi sepanjang 22 dengan kedalaman sekitar 20 meter serta lebar 15 meter. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Kejadian longsor ini kami duga disebabkan oleh beberapa hal. Pertama, kondisi saluran drainase yang kotor dan tersumbat. Hal ini dapat menyebabkan air yang masuk ke dalam drainase keluar meluap dari saluran drainase dan dapat masuk ke dalam tanah. Kedua, adanya hama tikus yang menyebabkan ada banyak lubang di dalam tanah yang dapat menyebabkan air  akan mudah masuk ke dalan tanah penahan. Air yang masuk ke dalam tanah penahan di bawah jalan akan menyebabkan kekuatan tanah berkurang. Hal ini disebabkan karena tanah yang jenuh air akan menjadi lunak dan mudah berdeformasi. Hal ini jelas akan mengurangi kekuatan tahanan tanah. Ketiga, adanya hujan deras yang menyebabkan tanah yang sudah lemah itu menjadi semakin jenuh air dan mengakibatkan tanah longsor. 
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Maka dari itu, kami tim KKN PPM UGM berencana membuat desain retaining wall untuk memperbaiki tanah longsor tersebut. Jenis retaining wall yang kami pilih adalah jenis kantilever. Kami memilih jenis kantilever karena kedalaman longsor yang cukup dalam sehingga kami mendesain dengan tinggi 6 meter. Dengan desain tersebut, kami sudah mendapat desain yang dinilai aman untuk dibangun meskipun sebenarnya kami masih belum 100% yakin bahwa desain tersebut adalah desain yang efektif (masih boros).
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Untuk Rencana Anggaran Biaya (RAB) retaining wall diperhitungkan mencapai Rp 707.286.615. Perhitungan dimulai dari mencari volume kebutuhan bahan retaining wall, harga bahan untuk retaining wall, dan perhitungan biaya pekerjaan. Volume kebutuhan bahan terdiri dari volume beton, volume timbunan, dan volume tulangan. Kebutuhan volume beton terdiri dari semen, pasir, dan kerikil. Biaya yang diperlukan untuk volume  beton adalah Rp 145.688.564. Kebutuhan volume timbunan yaitu volume tanah urugan yang diperlukan untuk menimbun dan biaya yang diperlukan untuk membeli tanah urugan adalah Rp 288.094.873. Kebutuhan volume tulangan terdiri dari baja tulangan ulir dan diperlukan biaya sebesar Rp 116.722.300.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Perhitungan biaya pekerjaan terdiri dari biaya galian dan timbunan tanah, biaya pemadatan tanah, biaya pekerjaan tulangan, biaya pengecoran, dan biaya sewa truk. Biaya yang diperlukan untuk perkerjaan adalah Rp 178.421.873.
        </Text>
      </>
    ),
  },
  "pelatihan-anbk": {
    image: "/saintek/pelatihan-anbk.jpeg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title: "Pelaksanaan Pelatihan Penggunaan Chromebook untuk ANBK",
    text: (
      <>
        <Text size="lg" className="indent-10">
        Asesmen Nasional Berbasis Komputer (ANBK) merupakan salah satu wujud perubahan signifikan dalam dunia pendidikan. Penggunaan komputer dalam melakukan asesmen mengharuskan siswa beradaptasi dengan kemajuan teknologi yang ada. ANBK ini sendiri merupakan sarana evaluasi pendidikan. Hasil dari ANBK digunakan untuk meningkatkan kualitas pendidikan Indonesia. Tidak semua siswa mampu menggunakan komputer atau laptop, terutama siswa di SD Negeri Ketundan 1. Mengetahui kenyataan itu, SD Negeri Ketundan 1 beserta Tim KKN-PPM UGM sub unit Ketundan II bekerjasama untuk mengadakan pelatihan untuk menggunakan Chromebook dalam rangka menghadapi ANBK.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Tujuan dari pelatihan ini adalah agar siswa siap menghadapi ANBK, termasuk siap untuk menggunakan Chromebook dan software di dalamnya. Dalam pelatihan ini, Chromebook dipilih Chromebook sebagai perangkat keras utama dalam mengerjakan ANBK karena antarmukanya yang mudah dipahami dan intuitif. Materi yang ada dalam pelatihan ini berupa pengenalan Chromebook sebagai perangkat keras beserta cara pengoperasiannya dan aplikas-aplikasi yang diperlukan dalam mengerjakan ANBK.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Pertama-tama, pelatihan ini mengenalkan dasar-dasar tentang Chromebook. Termasuk di dalamnya adalah cara menyalakan perangkat, cara login ke akun Google, serta cara untuk membuka dan menutup aplikasi. Hal yang tidak kalah penting untuk diajarkan adalah tentang cara masuk atau menuliskan suatu alamat situs atau website. Membuka atau menuliskan website akan sangat berguna ketika mengerjakan ANBK nantinya. Selain itu, anak-anak juga diberikan semacam arahan apabila terdapat kendala teknis ketika mengoperasikan Chromebook.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Untuk memberikan pengalaman yang signifikan, pelatihan dilakukan dalam bentuk simulasi ANBK. Soal-soal simulasi yang setipe dengan soal-soal ANBK diberikan pada suatu google form untuk dibuka dan dikerjakan oleh siswa. Dalam simulasi ini, siswa benar-benar dihadapkan pada keadaan apabila ANBK dilaksanakan. Siswa melaksanakan simulasi dengan mulai dari hal-hal dasar, seperti mulai dari menyalakan Chromebook, menyambungkan Chromebook dengan wifi, masuk ke akun google, menuliskan link google form pada search bar, menjawab soal hingga mematikan perangkat. Selain hal tersebut, siswa juga belajar untuk mengetik pada keyboard pada Chromebook. Ketika mengerjakan google form, siswa harus mengisikan data diri terlebih dahulu. Apabila soal sudah selesai dikerjakan, siswa harus mematikan Chromebook.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
        Dalam pelatihan yang berbentuk simulasi ini, siswa diharapkan dapat beradaptasi dengan kemajuan teknologi. Pelatihan hal-hal dasar, seperti menyalakan Chromebook, login ke akun google, mengerjakan google form, dan mematikan Chromebook dapat membantu siswa untuk terbiasa dengan teknologi. Selain itu, pelatihan ini juga membantu siswa untuk lebih optimal ketika  mengerjakan ANBK nantinya. Pelatihan ini pun mampu menjadi pelecut bagi siswa untuk dapat menggunakan teknologi dalam kegiatan akademik, di luar ANBK.
        </Text>
      </>
    ),
  },
};
