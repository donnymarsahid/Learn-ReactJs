import React from 'react';
import './style.css';
import './About/about.css';
import faceVector from './img/faceVector.png';

const About = () => {
  return (
    <div>
      <div class="about">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <h3 class="font-weight-bold text-center">About Me!</h3>
            </div>
          </div>
          <div class="row image">
            <div class="col-md text-center">
              <img src={faceVector} alt="donny" class="" style={{ width: '200px', height: '200px' }} />
            </div>
          </div>
          <div class="row">
            <div class="col-md text-center">
              <h5 class="font-weight-bold mt-3">Donny Marsahid</h5>
            </div>
          </div>
          <div class="row paragraf mt-3">
            <div class="col-md mb-3">
              <p>Saya Dony Marsahid, Lahir dijakarta tahun 2001, Pada bulan Januari, Anak ke-3 dari 4 bersaudara.</p>
              <br />
              <h5 class="font-weight-bold mb-3">Pendidikan</h5>
              <p>
                <i class="fas fa-chevron-right"></i> SD | 2007 - 2013 | <i class="fas fa-map-marker-alt"></i> SD Negeri Cideng 10, Cilamaya Jak-Pus
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> SMP | 2013 - 2016 | <i class="fas fa-map-marker-alt"></i> SMP Negeri 61, Slipi Jak-Bar
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> SMK | 2016 - 2019 | <i class="fas fa-map-marker-alt"></i>
                SMKI Said Naum, KH. Mas Mansyur Jak-Pus
              </p>
              <br />
              <p>
                Saya lulusan SMK di Jakarta dengan Jurusan <span class="font-weight-bold">Teknik Komputer dan Jaringan (TKJ)</span>
              </p>
            </div>
          </div>
          <div class="row paragraf mt-3 border-top">
            <div class="col-md">
              <h5 class="font-weight-bold mb-4 mt-4">Experience</h5>
              <p class="font-weight-bold">
                <i class="fas fa-laptop"></i> Graphic Design
              </p>
              <ul class="mb-5">
                <li>
                  <i class="fas fa-chevron-right"></i> Banner
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> Flyer
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> Vector
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> Logo
                </li>
              </ul>
              <p class="font-weight-bold">
                <i class="fas fa-laptop-code"></i> Web Design, Web CMS & Web Frame Work
              </p>
              <ul class="mb-5">
                <li>
                  <i class="fas fa-chevron-right"></i> Figma
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> Wordpress
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> Bootstrap
                </li>
              </ul>
              <p>
                <i> Web ini dibuat menggunakan React JS dengan UI Library Jquery, Bootstrap dan Manual Style CSS serta Javascript</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hobi mt-5">
        <div class="container border-top">
          <div class="row mt-4">
            <div class="col-md">
              <h5 class="font-weight-bold mb-3">Hobby</h5>
              <p>Hobby saya bermain musik, Street Fotografi, Graphic Design, bermain game.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tentang mt-5">
        <div class="container border-top">
          <div class="row mt-4">
            <div class="col-md">
              <h5 class="font-weight-bold mb-3">Sedikit Tentang Saya</h5>
              <p>
                Selama masa sekolah saya cenderung ingin melakukan sesuatu yang bermanfaat, pernah mengikuti Pelatihan Mikrotik yang diselenggarakan oleh BNSP diPusdiklatjur Jakarta, serta pernah mengikuti perlombaan Cyber Movie dan Design
                Grafis walau saya tidak pernah menjuarainya tapi saya senang bisa belajar, menambah wawasan dan pengalaman. Setelah lulus Sekolah saya Pernah Bekerja sebagai Sales Merchant, Barista, namun saya re-sign karena kondisi
                tertentu dan saya melanjutkan kerja di Lembaga Kesehatan tempat saya bekerja di Puskesmas Kec. Tambora, setelah habis kontrak 1 tahun, saya tidak melanjutkan/tidak menandatangani perpanjang kontrak, alasannya saya ingin
                lebih fokus belajar diBidang yang saya inginkan dan menyisihkan waktu untuk kuliah, pada tahun 2021 saya mulai menyukai Program mulai dari membuat Aplikasi dengan tim saya yang bernama Boola Tim dengan beranggota 3 orang,
                dan saya sebagai UI Design-nya project ini sedang proses Develop, saya juga mulai menyukai Web Design dan Web Develop. dengan mempraktekkan apa yang tahap saya pelajari di Alur belajar front-end
                <a href="http://roadmap.sh"> roadmap.sh</a> dan juga mencari pembelajaran dimedia Youtube <a href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"> CleverProgrammer</a> dan{' '}
                <a href="https://www.youtube.com/channel/UCkXmLjEr95LVtGuIm3l2dPg"> WebProgrammingUnpas</a>. Pada saat ini saya masih tahap harus banyak belajar untuk mencapai sesuatu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-3 border-top">
        <div class="row mt-3">
          <div class="col-md">
            <h5 class="font-weight-bold mt-2">Equipment</h5>
          </div>
        </div>
        <table border="2" cellpadding="10" cellspacing="0" class="mt-2 table-bordered">
          <tr>
            <th>Laptop</th>
            <td>Acer Aspire 3, A-314-21-98MH, AMD Radeon R5 Graphics, AMD Dual-Core Processor A9-9420e</td>
          </tr>
          <tr>
            <th>Adobe Ilustrator</th>
            <td>Flyer, Banner, Logo, Vector</td>
          </tr>
          <tr>
            <th>Adobe Photoshop</th>
            <td>Flyer, Banner</td>
          </tr>
          <tr>
            <th>Sistem Operasi</th>
            <td>Windows 10</td>
          </tr>
          <tr>
            <th>Code Editor</th>
            <td>Visual Studio Code</td>
          </tr>
          <tr>
            <th>Camera Fotografi</th>
            <td>Canon EOS 700d</td>
          </tr>
        </table>
      </div>
      <footer>
        <div class="container text-center mt-5 p-3">
          <p class="text-muted">
            &copy;2021{' '}
            <a href="http://instagram.com/donnymrshd" className="text-muted" style={{ textDecoration: 'none' }}>
              Donny Marsahid
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
