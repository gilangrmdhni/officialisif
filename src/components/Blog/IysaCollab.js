import React from 'react';
// import Blogrightsidebar from './Blogrightsidebar';
// import ServiceData from '../Service/ServiceData';
const Bloglists = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            <div className="blog_single mb_50">
              <img className="img-fluid" src={require('../../img/blog-grid/2019.jpg')} alt="" />
              <div className="blog_content">
                <div className="post_date">
                  <h2>
                    <span>2019</span>
                  </h2>
                </div>
                <div className="entry_post_info">
                  By: <a href=".#">Admin</a>
                  <a href="https://github.com/redheet">Redheet</a>
                </div>
                <a href=".#">
                  <h5 className="f_p f_size_20 f_500 t_color mb-30">
                    27 Hasil Penelitian Siswa dan Mahasiswa Bali Ikut Ajang Internasional ISIF
                  </h5>
                </a>
                <p className="f_400 mb-30">
                  Acara ini diikuti peserta dari 11 negara untuk menampilkan hasil penelitian atau hasil karya siswa
                  maupun mahasiswa dalam bidang sains, teknologi, maupun penggabungan keduanya. Sebelas negara yang ikut
                  dalam acara ini yakni Indonesia sebagai tuan rumah, Malaysia, Vietnam, Thailand, Philippine, Taiwan,
                  Korea, Turkey, Turkmenistan, Germany, dan Zambia. Sedangkan banyak peserta yakni dari Indonesia
                  sebanyak 101 kelompok, sedangkan dari luar negeri sebanyak 46 peserta. Tak ketinggalan, sebagai tempat
                  terselenggaranya event ini, Bali pun ikut berpartisipasi. Sebanyak 27 kelompok dari 147 kelompok yang
                  ikut merupakan perwakilan dari siswa maupun mahasiswa Bali. Adapun peserta dari bali yakni SMPN 10
                  Denpasar 4 karya, SMPN 3 Denpasar 1 karya, SMAN 1 Kuta 3 karya, SMAN 1 Denpasar 2 karya, SMAN 1
                  Memngwi 1 karya, SMAN 3 Denpasar 7 karya, SMAN 4 Denpasar 3 karya, SMAN 7 Denpasar 3 karya, SMAN 8
                  Denpasar 1 karya, SMA Kristen Harapan Denpasar 1 karya, Universitas Mahasaraswati 1 karya.
                </p>
                <p className="f_400 mb_40">
                  Ketua Indonesian Young Scientist Association (IYSA) Denny Indrayana mengatakan ISIF ini baru
                  dilaksanakan pertama kali. Untuk ikut dalam event ini pihaknya menerima lebih dari 200 karya yang
                  kemudian diseleksi untuk bisa ikut event ini. "Karya ada yang diseleksi pada jenjang nasional dan ada
                  yang daftar langsung kami ikutkan tanpa seleksi karena karyanya memang layak ditampilkan di level
                  internasional," kata Denny. Kepala Dinas Pendidikan Pemuda dan Olahraga Kota Denpasar, I Wayan Gunawan
                  berharap dengan kegiatan ini mempu membuka wawasan siswa di Kota Denpasar maupun di Bali untuk
                  melakukan penelitian. "Karya yang ditampilkan adik-adik peserta sangat luar biasa. Mudah-mudahan
                  dengan interaksi peneliti-peneliti ini, kita yang ada di Kota Denpasar bisa mengembangkan dan membuka
                  wawasan untuk lebih berinovasi demi pemajuan di Denpasar," katanya.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4">
                        <Blogrightsidebar ServiceData={ServiceData}/>
                    </div> */}
        </div>
      </div>
    </section>
  );
};
export default Bloglists;
