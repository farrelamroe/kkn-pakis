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
          <Image
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
          <Image
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
  "keamanan-data": {
    image: "/semimpen/week-2-hero-data.jpg",
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
          <Image
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
};
