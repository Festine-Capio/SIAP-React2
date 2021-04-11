import React from "react";
import LogoOjk from "assets/images/ojk.png";
import Afpi from "assets/images/afpi.png";
import MNC from "assets/images/mnc.png";
const Disclaimer = () => {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col mt-5">
            <div className="row d-flex justify-content-center">
              <h4>Terdaftar dan diawasi</h4>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
              <img src={LogoOjk} alt="ojk" className="logo1-disclaimer" />
            </div>
          </div>
          <div className="col mt-5">
            <div className="row d-flex justify-content-center">
              <h4>Anggota dari</h4>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
              <img src={Afpi} alt="ojk" className="logo2-disclaimer" />
            </div>
          </div>
          <div className="col mt-5">
            <div className="row d-flex justify-content-center">
              <h4>Bagian dari</h4>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
              <img src={MNC} alt="ojk" className="logo3-disclaimer" />
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <h5>Perhatian</h5>
        </div>
        <div className="row mt-5">
          <ol id="disclaimer">
            <li>
              Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
              kesepakatan perdata antara Pemberi Pinjaman dengan Penerima
              Pinjaman, sehingga segala risiko yang timbul dari kesepakatan
              tersebut ditanggung sepenuhnya oleh masing-masing pihak.
            </li>
            <li>
              Penyelenggara dengan persetujuan dari masing-masing Pengguna
              (Pemberi Pinjaman dan/atau Penerima Pinjaman) mengakses,
              memperoleh, menyimpan, mengelola dan/atau menggunakan data pribadi
              Pengguna ("Pemanfaatan Data") pada atau di dalam benda, perangkat
              elektronik (termasuk smartphone atau telepon seluler), perangkat
              keras (hardware) maupun lunak (software), dokumen elektronik,
              aplikasi atau sistem elektronik milik Pengguna atau yang dikuasai
              Pengguna, dengan memberitahukan tujuan, batasan dan mekanisme
              Pemanfaatan Data tersebut kepada Pengguna yang bersangkutan
              sebelum memperoleh persetujuan yang dimaksud.
            </li>
            <li>
              Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh Pemberi
              Pinjaman. Tidak ada lembaga atau otoritas negara yang bertanggung
              jawab atas risiko gagal bayar ini.
            </li>
            <li>
              Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman
              pinjam meminjam, disarankan untuk tidak menggunakan layanan ini.
            </li>
            <li>
              Penerima Pinjaman harus mempertimbangkan tingkat bunga pinjaman
              dan biaya lainnya sesuai dengan kemampuan dalam melunasi pinjaman.
            </li>
            <li>
              Setiap kecurangan tercatat secara digital di dunia maya dan dapat
              diketahui masyarakat luas di media sosial.
            </li>
            <li>
              Pengguna harus membaca dan memahami informasi ini sebelum membuat
              keputusan menjadi Pemberi Pinjaman atau Penerima Pinjaman.
            </li>
            <li>
              Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak
              bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan oleh
              Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman (baik
              karena kesengajaan atau kelalaian Pengguna) terhadap ketentuan
              peraturan perundang-undangan maupun kesepakatan atau perikatan
              antara Penyelenggara dengan Pemberi Pinjaman dan/atau Penerima
              Pinjaman.
            </li>
            <li>
              Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan
              kesepakatan mengenai pinjam meminjam antara atau yang melibatkan
              Penyelenggara, Pemberi Pinjaman dan/atau Penerima Pinjaman wajib
              dilakukan melalui escrow account dan virtual account sebagaimana
              yang diwajibkan berdasarkan Peraturan Otoritas Jasa Keuangan Nomor
              77/POJK.01/2016 tentang Layanan Pinjam Meminjam Uang Berbasis
              Teknologi Informasi dan pelanggaran atau ketidakpatuhan terhadap
              ketentuan tersebut merupakan bukti telah terjadinya pelanggaran
              hukum oleh Penyelenggara sehingga Penyelenggara wajib menanggung
              ganti rugi yang diderita oleh masing-masing Pengguna sebagai
              akibat langsung dari pelanggaran hukum tersebut di atas tanpa
              mengurangi hak Pengguna yang menderita kerugian menurut Kitab
              Undang-Undang Hukum Perdata.
            </li>
          </ol>
        </div>
      </div>
    );
};
export default Disclaimer;