import React from 'react';
import './Portfolio/portfolio.css';
import './Portfolio/style.css';
import './style.css';
import shutterstock from './img/shutterstock.png';
import webBoola from './img/webBoola.png';
import boola from './img/boola.png';
import satu from './imgLogo/logo/1.jpg';
import dua from './imgLogo/logo/2.jpg';
import tiga from './imgLogo/logo/3.jpg';
import empat from './imgLogo/logo/4.jpg';
import lima from './imgLogo/logo/5.jpg';
import satuVector from './imgLogo/vector/1.jpg';
import duaVector from './imgLogo/vector/2.jpg';
import tigaVector from './imgLogo/vector/3.jpg';
import empatVector from './imgLogo/vector/4.jpg';
import limaVector from './imgLogo/vector/5.jpg';

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <div class="container portfolioz border-top">
          <h3 class="font-weight-bold mt-4 text-center">Portfolio</h3>
          <div class="row portfolio border-top">
            <div class="col-md-6 mt-5">
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883">
                {' '}
                <img src={shutterstock} alt="shutterstock" className="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-5">
              <h3 class="shutterstock">
                <span>ShutterStock</span> Collection
              </h3>
              <p class="text-muted">Koleksi foto saya dalam Portfolio shutterstock.</p>
              <p>Saya mendokumentasikan foto-foto yang saya ambil, pada shutterstock contributor, berikut link portflio shutterstock saya.</p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid
                </a>
              </p>
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883" class="btn btn-primary">
                {' '}
                Click Here!
              </a>
            </div>
          </div>
          <div class="row portfolio2 border-top">
            <div class="col-md-6 mt-5">
              <a href="portfolio.html">
                {' '}
                <img src={webBoola} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-5">
              <h3 class="boola">
                <span>Web</span> Design & Develop
              </h3>
              <p class="text-muted">Project pembuatan web design sekaligus mendevelop.</p>
              <p>
                Pembuatan web design ini menggunakan <a href="http://figma.com">Figma </a>, dan thumbnail nya dibuat menggunakan Adobe Ilustrator, lalu didevelop menggunakan Framework Bootstrap dengan tambahan manual style CSS serta
                Javascript. <a href="https://www.figma.com/proto/uBVhdndE40jir7kJoDrv28/Boola?node-id=1170%3A43&scaling=min-zoom&page-id=1117%3A0"> Click Here!</a> untuk melihat hasil Prototype Design Web Figma
              </p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row portfolio2 border-top mt-5">
            <div class="col-md-6 mt-5">
              <a href="portfolio.html">
                {' '}
                <img src={boola} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6 mt-5">
              <h3 class="boola">
                <span>Mobile</span> Application
              </h3>
              <p class="text-muted">Project aplikasi Mobile booking lapangan olahraga.</p>
              <p>Project ini dibangun oleh tim yang bernama Boola Tim</p>
              <p>
                Visi Misi yang ingin tim Boola berikan bertujuan untuk membuat kemudahan dalam proses Booking Lapangan Olahraga pada zaman sekarang mungkin teknologi dapat digunakan untuk hal yang lebih bermanfaat, salah satunya dalam
                mencari lapangan olahraga dibeberapa lokasi, dan kami juga ingin memberikan layanan untuk para Mitra pemilik lapangan yang ingin mempromosikan lapangannya diAplikasi kami kedepannya.
              </p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid
                </a>
              </p>
            </div>
          </div>
          <div class="row logo1 border-top mt-5">
            <div class="containerz col-md-6 mt-5">
              <img src={satu} alt="logoDonny" className="jumbo img-fluid" />
              <div class="thumbnail">
                <img src={dua} alt="vectorDonny" className="thumb" />
                <img src={tiga} alt="vectorDonny" className="thumb" />
                <img src={empat} alt="vectorDonny" className="thumb" />
                <img src={lima} alt="vectorDonny" className="thumb" />
              </div>
            </div>
            <div class="col-md-6 mt-5">
              <h3 class="boola mt-2">
                <span>Design</span> Logo
              </h3>
              <p class="text-muted">Saya membuat design Logo menggunakan Aplikasi Adobe Ilustrator.</p>
              <p>Design yang saya buat murni dengan kreasi saya dengan tahap awal digambar menggunakan kertas lalu diimplementasikan, saya membuat design logo untuk menambah wawasan dan juga mengisi waktu kosong saja</p>
              <p>
                <i class="fas fa-chevron-right"></i> Donny Marsahid - Name Logo
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Boola - Mobile Apps
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Journey Sushi - Food Merchant
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> 3DK Komputer - Toko Komputer
              </p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid
                </a>
              </p>
            </div>
          </div>
          <div class="row logo1 border-top mt-5">
            <div class="containerz col-md-6 mt-5">
              <img src={satuVector} alt="vectorDonny" className="jumbo img-fluid" />
              <div class="thumbnail">
                <img src={duaVector} alt="vectorDonny" className="thumb" />
                <img src={tigaVector} alt="vectorDonny" className="thumb" />
                <img src={empatVector} alt="vectorDonny" className="thumb" />
                <img src={limaVector} alt="vectorDonny" className="thumb" />
              </div>
            </div>
            <div class="col-md-6 mt-5">
              <h3 class="boola mt-2">
                <span>Design</span> Vector
              </h3>
              <p class="text-muted">
                <span class="font-weight-bold">DonART</span> Koleksi Design Vector yang saya buat.
              </p>
              <p>Tujuan saya membuat Design hanya agar menambah wawasan saya mengenai vector dan mengisi waktu kosong</p>
              <p>
                <i class="fas fa-chevron-right"></i> Half-Body Vector
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Close Up Vector
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Half-Body Vector
              </p>
              <p>
                <i class="fas fa-chevron-right"></i> Art-Splash Vector
              </p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
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

export default Portfolio;
