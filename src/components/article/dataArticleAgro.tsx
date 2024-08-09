import { Text } from "@/components";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleAgro = {
  [key: string]: Article;
};

export const dataArticleAgro: DataArticleAgro = {
  "mengenal-ikan": {
    image: "/agro/ikan.jpg",
    location: "SDN Pogalan 1, Kelurahan Pogalan",
    title: "Mengenal Ikan",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Program &ldquo;Mengenal Ikan&rdquo; yang dilaksanakan di SD Pogalan 1
          merupakan inisiatif edukatif yang bertujuan untuk mengenalkan berbagai
          jenis ikan kepada anak-anak sekolah dasar. Tujuan utama dari program
          ini adalah memberikan edukasi kepada anak-anak mengenai keanekaragaman
          jenis ikan, baik ikan hias maupun ikan konsumsi, serta pentingnya
          menjaga kelestarian lingkungan yang menjadi habitat ikan. Program ini
          dirancang untuk memperluas wawasan anak-anak tentang ikan. Hal ini
          dikarenakan anak – anak jarang menjumpai ikan di lingkungan sekitar.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Kegiatan ini dimulai dengan sesi presentasi yang menarik dan
          interaktif. Anak-anak diperkenalkan dengan berbagai jenis ikan melalui
          gambar, video, dan penjelasan singkat. Dalam presentasi ini, anak-anak
          mendapatkan informasi tentang jenis-jenis ikan yang umum ditemui, baik
          di perairan tawar maupun laut. Fokus utama adalah pada ikan hias
          seperti ikan koi, cupang, dan guppy, serta ikan konsumsi seperti lele,
          nila, dan bandeng. Selain itu, mereka juga diajarkan tentang habitat
          ikan, termasuk bagaimana ikan-ikan ini hidup dan berkembang biak di
          lingkungan alamiahnya. Materi yang disampaikan juga mencakup cara
          merawat ikan dengan benar, baik untuk ikan hias maupun ikan konsumsi.
          Anak-anak diajarkan tentang pentingnya menjaga kebersihan akuarium
          atau kolam, memberi makan ikan dengan pakan yang sesuai, serta menjaga
          kualitas air. Semua ini disampaikan dengan bahasa yang sederhana dan
          mudah dipahami oleh anak-anak, sehingga mereka bisa mempraktekkannya
          di rumah.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Peserta program ini adalah seluruh siswa SD Pogalan 1 yang terlibat
          aktif dan responsif selama kegiatan berlangsung. Mereka antusias
          bertanya dan berbagi pengetahuan baru yang mereka peroleh. Respons
          positif dari anak-anak menunjukkan bahwa program ini berhasil menarik
          minat mereka dan memberikan pengetahuan baru yang berharga. Hasil yang
          diharapkan dari program ini, baik dalam jangka pendek maupun jangka
          panjang, adalah agar anak-anak dapat lebih mengenal dan menghargai
          keanekaragaman jenis ikan, meskipun mereka mungkin jarang melihat
          ikan-ikan tersebut di lingkungan sekitar. Selain itu, program ini juga
          diharapkan dapat menumbuhkan rasa ingin tahu dan kepedulian terhadap
          kelestarian lingkungan, terutama habitat-habitat alami tempat ikan
          hidup.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Melihat antusiasme dan respons positif dari peserta, program
          &ldquo;Mengenal Ikan&rdquo; ini memiliki potensi untuk dikembangkan
          lebih lanjut di masa depan. Rencana pengembangan meliputi peningkatan
          materi edukasi, penambahan sesi praktikum, serta melibatkan lebih
          banyak sekolah di wilayah sekitar. Dengan demikian, program ini tidak
          hanya memberikan manfaat jangka pendek berupa pengetahuan, tetapi juga
          berkontribusi pada pembentukan generasi yang lebih peduli terhadap
          lingkungan dan keanekaragaman hayati.
        </Text>
      </>
    ),
  },
  "pemanfaatan-limbah-sayur": {
    image: "/agro/poc.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title:
      "Sosialisasi Pemanfaatan Limbah Sayur dengan Pembuatan Pupuk Organik Cair",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Pemanfaatan limbah sayur untuk pembuatan pupuk organik cair merupakan
          salah satu upaya yang efektif dalam mengurangi limbah dan mendukung
          pertanian berkelanjutan. Di Kecamatan Pakis, Magelang, inisiatif ini
          telah mulai diperkenalkan oleh tim KKN-PPM UGM Pakis 2024 kepada para
          petani sayur Kecamatan Pakis. Biasanya para petani sayur menghasilkan
          limbah sayur dalam jumlah besar dari sisa cacahan hasil panen. Limbah
          ini, jika dikelola dengan benar, dapat diubah menjadi pupuk organik
          cair yang kaya akan nutrisi dan bermanfaat bagi pertumbuhan tanaman.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Proses pembuatan pupuk organik cair ini menggunakan metode galon
          tumpuk dan ember sederhana. Metode ini tidak memerlukan peralatan
          mahal atau rumit, sehingga cocok untuk diaplikasikan oleh petani
          lokal. Dalam proses ini, limbah sayur dicampur dengan bahan tambahan
          berupa molase dan EM4 (Effective Microorganisms 4). Molase berfungsi
          sebagai sumber energi bagi mikroorganisme dalam proses fermentasi,
          sementara EM4 mengandung berbagai jenis mikroorganisme yang
          mempercepat proses penguraian bahan organik.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Tahapan pembuatan pupuk organik cair ini dimulai dengan menyiapkan
          limbah sayur yang telah dicacah. Limbah sayur kemudian dimasukkan ke
          dalam ember atau galon yang sudah dipersiapkan. Setelah itu, tambahkan
          molase dan EM4 sesuai dengan takaran yang dianjurkan. Campuran ini
          kemudian diaduk rata dan ditutup rapat untuk memulai proses
          fermentasi. Fermentasi berlangsung selama sekitar 2 minggu. Selama
          periode ini, mikroorganisme dalam EM4 akan mengurai bahan organik
          dalam limbah sayur, menghasilkan cairan yang kaya nutrisi. Setelah
          proses fermentasi selesai, pupuk organik cair yang dihasilkan harus
          dijemur selama sekitar 1 minggu untuk menurunkan kadar air dan
          meningkatkan konsentrasi nutrisi. Penjemuran juga berfungsi untuk
          menstabilkan pupuk sehingga dapat disimpan lebih lama tanpa mengalami
          penurunan kualitas. Pupuk organik cair yang dihasilkan dapat langsung
          digunakan pada tanaman, baik dengan cara disemprotkan pada daun atau
          disiramkan ke tanah.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Sosialisasi pembuatan pupuk organik cair ini perlu dilakukan secara
          intensif agar para petani di Kecamatan Pakis dapat memahami dan
          menerapkan teknologi ini. Pemerintah daerah, melalui dinas pertanian,
          dapat menyelenggarakan pelatihan dan workshop yang melibatkan para
          petani dan kelompok tani. Dengan demikian, mereka tidak hanya akan
          mampu mengelola limbah sayur secara lebih efektif, tetapi juga dapat
          menghasilkan pupuk berkualitas yang mendukung produktivitas pertanian
          mereka. Penggunaan pupuk organik cair dari limbah sayur ini tidak
          hanya mengurangi ketergantungan petani pada pupuk kimia, tetapi juga
          berkontribusi pada pengurangan limbah organik yang dapat mencemari
          lingkungan. Selain itu, inisiatif ini juga sejalan dengan upaya untuk
          menciptakan sistem pertanian yang lebih ramah lingkungan dan
          berkelanjutan. Dengan sosialisasi yang tepat, diharapkan semakin
          banyak petani di Kecamatan Pakis dan daerah lainnya yang akan
          mengadopsi metode ini untuk mendukung pertanian yang lebih sehat dan
          efisien.
        </Text>
      </>
    ),
  },
  "penanaman-tanaman-refugia": {
    image: "/agro/refugia.jpg",
    location: "Dusun Semimpen, Kelurahan Ketundan",
    title:
      "Sosialisasi Penanaman Tanaman Refugia untuk Pengendalian Organisme Pengganggu Tanaman",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Penanaman tanaman refugia merupakan salah satu strategi pengendalian
          organisme pengganggu tanaman (OPT) yang semakin populer di kalangan
          petani. Refugia adalah tanaman yang berfungsi sebagai habitat bagi
          musuh alami OPT, seperti predator dan parasit. Dengan menanam refugia
          di sekitar tanaman budidaya, petani dapat mengurangi penggunaan
          pestisida kimia dan menciptakan ekosistem pertanian yang lebih
          seimbang. Beberapa jenis tanaman refugia yang efektif dalam
          mengendalikan hama antara lain bunga kenikir (Tagetes erecta), bunga
          kertas (Zinnia elegans), bunga pacar air (Impatiens balsamina), dan
          bunga menur (Cosmos caudatus). Tanaman-tanaman ini memiliki daya tarik
          yang kuat bagi serangga pengendali hama, seperti predator dan
          parasitoid, sehingga membantu mengurangi populasi OPT seperti kutu
          kebul (Bemisia tabaci), ulat grayak (Spodoptera litura), thrips
          (Thripidae), dan lalat buah (Bactrocera spp.).
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Metode penanaman tanaman refugia sangat sederhana dan dapat dilakukan
          dengan menanamnya di sekeliling tanaman budidaya dengan jarak antar
          tanaman sekitar 80 cm. Jarak ini dipilih untuk memastikan bahwa
          tanaman refugia dapat berfungsi secara optimal sebagai habitat bagi
          musuh alami hama tanpa mengganggu pertumbuhan tanaman budidaya.
          Penanaman tanaman refugia di sekeliling tanaman budidaya juga
          menciptakan barikade alami yang mengurangi akses hama ke tanaman
          utama. Selain itu, penanaman tanaman refugia ini juga dapat menarik
          musuh alami untuk berdiam di sekitar area budidaya.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Sosialisasi penanaman refugia kepada petani sangat penting untuk
          meningkatkan kesadaran akan manfaat dari metode pengendalian hama yang
          ramah lingkungan ini. Pemerintah, melalui penyuluh pertanian dan dinas
          terkait, dapat mengadakan pelatihan dan demonstrasi lapangan yang
          menjelaskan cara menanam refugia dengan benar, serta memberikan
          informasi mengenai jenis-jenis tanaman yang cocok untuk digunakan
          sebagai refugia. Dengan demikian, petani dapat mengadopsi teknik ini
          secara lebih luas. Selain itu, sosialisasi juga harus mencakup
          informasi mengenai manfaat jangka panjang dari penggunaan tanaman
          refugia, seperti pengurangan biaya pestisida, peningkatan kesehatan
          tanaman, dan pelestarian keanekaragaman hayati di lahan pertanian.
          Dengan menggunakan refugia, petani tidak hanya mengendalikan hama
          secara lebih efektif, tetapi juga berkontribusi pada pelestarian
          lingkungan dan peningkatan kualitas hasil panen. Secara keseluruhan,
          penanaman tanaman refugia sebagai pengendali OPT merupakan solusi yang
          praktis, efektif, dan ramah lingkungan. Melalui sosialisasi yang
          tepat, diharapkan semakin banyak petani yang akan mengadopsi metode
          ini, sehingga dapat menciptakan pertanian yang lebih berkelanjutan dan
          mengurangi ketergantungan pada pestisida kimia.
        </Text>
      </>
    ),
  },
  "gerakan-minum-susu": {
    image: "/agro/minum-susu.jpeg",
    location: "SDN Pogalan 3, Kelurahan Pogalan",
    title: "Gerakan Minum Susu di SD Negeri Pogalan 3",
    text: (
      <>
        <Text size="lg" color="secondary" className="indent-10">
          Pada Jumat, 2 Agustus 2024, SD Negeri Pogalan 3 menjadi tuan rumah
          kegiatan Gerakan Minum Susu untuk anak-anak, yang diinisiasi sebagai
          upaya untuk meningkatkan konsumsi susu di kalangan siswa. Program ini
          bertujuan agar anak-anak menjadi lebih gemar minum susu sehingga dapat
          membangun kebiasaan sehat sejak dini dan mendorong mereka untuk
          memilih susu sebagai minuman sehari-hari dibandingkan dengan minuman
          manis lainnya. Kegiatan ini dimulai dengan sesi pemaparan yang
          menjelaskan kandungan gizi dalam susu serta manfaatnya bagi kesehatan
          tubuh. Anak-anak diberi pengetahuan tentang bagaimana susu dapat
          membantu pertumbuhan tulang, mendukung fungsi otak, dan meningkatkan
          sistem kekebalan tubuh. Sesi ini diikuti oleh tanya jawab yang
          interaktif, di mana anak-anak kelas 1 sangat antusias bertanya dan
          berbagi pengalaman mereka tentang minum susu. Partisipasi aktif ini
          menunjukkan minat mereka yang tinggi terhadap topik yang dibahas.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Setelah sesi tanya jawab, susu UHT (Ultra High Temperature) dibagikan
          kepada semua siswa. Susu UHT dipilih karena sudah melalui proses
          sterilisasi dengan suhu tinggi sehingga aman dikonsumsi dan memiliki
          masa simpan yang lebih lama tanpa perlu pendinginan. Setelah pembagian
          susu, kegiatan dokumentasi dilakukan dengan mengambil foto bersama
          seluruh peserta, sebagai kenang-kenangan dari kegiatan ini. Sebagai
          penutup, sebuah poster bertuliskan &ldquo;Ayo Minum Susu&rdquo;
          ditempel di depan ruang kelas 1, dengan harapan dapat mengingatkan dan
          memotivasi anak-anak untuk rutin minum susu setiap hari. Kegiatan ini
          hanya diikuti oleh siswa kelas 1 karena kelas lain terlibat dalam
          program kerja tim KKN lainnya. Meskipun demikian, dampak dari program
          ini diharapkan akan terasa luas di lingkungan sekolah.
        </Text>
        <br />
        <Text size="lg" color="secondary" className="indent-10">
          Manfaat utama yang diharapkan dari program ini adalah meningkatnya
          minat anak-anak untuk minum susu sehingga mereka lebih memilih susu
          dibandingkan minuman manis lainnya yang seringkali kurang sehat.
          Namun, salah satu tantangan yang dihadapi selama kegiatan adalah
          sulitnya mengontrol dan mengondisikan anak-anak yang sangat aktif
          bermain di kelas. Waktu yang dibutuhkan untuk menenangkan mereka cukup
          lama, namun hal ini dapat diatasi dengan kesabaran dan pendekatan yang
          menyenangkan. Ke depan, program ini memiliki potensi untuk
          dikembangkan lebih lanjut. Rencananya, akan ada sosialisasi produk
          olahan susu seperti yoghurt dan keju sehingga konsumsi produk
          peternakan, khususnya susu dan produk turunannya, dapat meningkat.
          Dengan demikian, anak-anak tidak hanya terbiasa minum susu, tetapi
          juga mengenal dan menyukai berbagai produk olahan yang bermanfaat bagi
          kesehatan mereka. Program ini diharapkan dapat menjadi langkah awal
          dalam membangun kebiasaan hidup sehat di kalangan generasi muda.
        </Text>
      </>
    ),
  },
};
