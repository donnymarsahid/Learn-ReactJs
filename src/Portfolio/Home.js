import React from 'react';
import './style.css';
import shutterstock from './img/shutterstock.png';
import webBoola from './img/webBoola.png';

const Home = () => {
  return (
    <div>
      <div class="container">
        <div class="row introduce">
          <div class="col">
            <h4>Halo, Selamat Datang!</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-muted">
              Perkenalkan nama saya Donny Marsahid, ini adalah website personal untuk memperkenalkan biodata diri saya untuk lengkapnya klik <a href="/About">about me</a> , saya memposting beberapa
              <a href="/Portfolio"> Portfolio</a> serta project yang saya buat, dan sangat dipersilahkan jika kalian ingin berbagi pengalaman mengenai lingkup design dan web programming ataupun project dengan menghubungi saya dalam
              <a href="/Contact"> Contact</a> yang tersedia.
            </p>
            <p class="text-muted">Selamat Membaca :)</p>
          </div>
        </div>
      </div>
      <section id="portfolio">
        <div class="container portfolioz border-top">
          <h3 class="font-weight-bold mt-4">Portfolio</h3>
          <div class="row portfolio">
            <div class="col-md-6">
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883">
                {' '}
                <img src={shutterstock} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6">
              <h3 class="shutterstock">
                <span>ShutterStock</span> Collection
              </h3>
              <p>Koleksi foto saya dalam Portfolio shutterstock.</p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid{' '}
                </a>
              </p>
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883" class="btn btn-primary">
                {' '}
                Click Here!
              </a>
            </div>
          </div>
          <div class="row portfolio2">
            <div class="col-md-6">
              <a href="portfolio.html">
                {' '}
                <img src={webBoola} alt="shutterstock" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6">
              <h3 class="boola">
                <span>Web</span> Design & Develop
              </h3>
              <p>Project pembuatan web design sekaligus mendevelop.</p>
              <p className="text-muted">
                Posted 11, May, 2021 <br />
                <i class="fas fa-user-circle"></i> by{' '}
                <a href="http://instagram.com/donnymrshd" style={{ textDecoration: 'none' }} className="text-muted">
                  Donny Marsahid
                </a>
              </p>
              <a href="portfolio.html" class="btn btn-primary">
                {' '}
                Click Here!
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="container mt-5">
        <div class="row">
          <div class="col text-center">
            <h5>
              <a href="/Portfolio" style={{ textDecoration: 'none' }}>
                Read More..
              </a>
            </h5>
          </div>
        </div>
      </div>
      <div class="container border-top">
        <div class="row sosmed">
          <div class="col">
            <h4>Social Media Saya</h4>
          </div>
        </div>
        <div class="row">
          <div class="col icon">
            <a href="http://instagram.com/donnymrshd" class="tombol">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="http://facebook.com/donymarsahid" class="tombol">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="http://www.linkedin.com/donny-marsahid" class="tombol">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/donnymarsahid" class="tombol">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
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

export default Home;
