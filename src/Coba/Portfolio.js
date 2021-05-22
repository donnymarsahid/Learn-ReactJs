import React from 'react';
import shutterstock from './img/shutterstock.png';
import webBoola from './img/webBoola.png';
import Boola from './img/boola.png';
import Vector from './img/vector.png';
import Logo from './img/logo.png';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  return (
    <>
      <div style={{ marginTop: '80px' }} />
      <section id="portfolio">
        <div class="container portfolioz">
          <h3 class="font-weight-bold text-center">Portfolio</h3>
          <div class="row portfolio border-top">
            <div class="col-md-6 mt-4">
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883">
                {' '}
                <img src={shutterstock} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-4">
              <h3 class="shutterstock">
                <span>ShutterStock</span> Collection
              </h3>
              <p class="text-muted">Saya mendokumentasikan foto-foto yang saya ambil, pada shutterstock contributor, berikut link portflio shutterstock saya.</p>
              <p>
                Posted 11, May, 2021 <br />
                <FontAwesomeIcon icon={faUserCircle} /> by <a href="http://instagram.com/donnymrshd">Donny Marsahid </a>
              </p>
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883" class="btn btn-primary">
                {' '}
                Click Here!
              </a>
            </div>
          </div>
          <div class="row portfolio2 mb-5 border-top">
            <div class="col-md-6 mt-5">
              <a href="portfolio.html">
                {' '}
                <img src={webBoola} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-5">
              <h3 class="boola">
                <span>Web</span> Design & Developer
              </h3>
              <p class="text-muted">Project pembuatan web design sekaligus mendevelop.</p>
              <p>
                Pembuatan web design ini menggunakan <a href="http://figma.com">Figma </a>, dan thumbnail nya dibuat menggunakan Adobe Ilustrator, lalu didevelop menggunakan Framework Bootstrap dengan tambahan manual style CSS serta
                Javascript. <a href="https://www.figma.com/proto/uBVhdndE40jir7kJoDrv28/Boola?node-id=1170%3A43&scaling=min-zoom&page-id=1117%3A0"> Click Here!</a> untuk melihat hasil Prototype Design Web Figma
              </p>
              <p>
                Posted 11, May, 2021 <br />
                <FontAwesomeIcon icon={faUserCircle} /> by <a href="http://instagram.com/donnymrshd">Donny Marsahid</a>
              </p>
            </div>
          </div>
          <div class="row portfolio2 border-top">
            <div class="col-md-6 mt-4">
              <a href="portfolio.html">
                {' '}
                <img src={Boola} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-4">
              <h3 class="boola">
                <span>Mobile</span> Application
              </h3>
              <p class="text-muted">Project aplikasi Mobile booking lapangan olahraga.</p>
              <p>Project ini dibangun oleh tim yang bernama Boola Tim</p>
              <p>
                Visi Misi yang ingin tim Boola berikan bertujuan untuk membuat kemudahan dalam proses Booking Lapangan Olahraga pada zaman sekarang mungkin teknologi dapat digunakan untuk hal yang lebih bermanfaat, salah satunya dalam
                mencari lapangan olahraga dibeberapa lokasi, dan kami juga ingin memberikan layanan untuk para Mitra pemilik lapangan yang ingin mempromosikan lapangannya diAplikasi kami kedepannya.
              </p>
              <p>
                Posted 11, May, 2021 <br />
                <FontAwesomeIcon icon={faUserCircle} /> by <a href="http://instagram.com/donnymrshd">Donny Marsahid</a>
              </p>
            </div>
          </div>
          <div class="row mt-5 vector1 border-top">
            <div class="col-md-6 mt-4">
              <a href="#vector1">
                {' '}
                <img src={Vector} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-4">
              <h3 class="boola mt-2">
                <span>Design</span> Vector
              </h3>
              <p class="text-muted">
                <span class="font-weight-bold">DonART</span> Koleksi Design Vector yang saya buat.
              </p>
              <p>Tujuan saya membuat Design hanya agar menambah wawasan saya mengenai vector dan mengisi waktu kosong</p>
              <p>
                <i class="fas fa-chevron-right"></i> Half-Body Vector (Top-Left)
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Close Up Vector (Top-Right)
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Half-Body Vector (Bottom-Left)
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Art-Splash Vector (Bottom-Right)
              </p>
              <p>
                Posted 11, May, 2021 <br />
                <FontAwesomeIcon icon={faUserCircle} /> by <a href="http://instagram.com/donnymrshd">Donny Marsahid</a>
              </p>
            </div>
          </div>
          <div class="row mt-5 logo1 border-top">
            <div class="col-md-6 mt-4">
              <a href="#logo1">
                {' '}
                <img src={Logo} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-4">
              <h3 class="boola mt-2">
                <span>Design</span> Logo
              </h3>
              <p class="text-muted">Koleksi Design Logo yang saya buat.</p>
              <p>Project Design Logo yang saya buat hanya untuk menambah wawasan mengenai design logo</p>
              <p>
                <i class="fas fa-chevron-right"></i> 3DK - Toko Komputer
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Journey Sushi - Food Merchant
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Boola - Mobile App
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Donny Marsahid - Name Logo
              </p>
              <p>
                Posted 11, May, 2021 <br />
                <FontAwesomeIcon icon={faUserCircle} /> by <a href="http://instagram.com/donnymrshd">Donny Marsahid</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
