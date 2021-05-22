import React from 'react';
import './Contact/contact.css';
import './style.css';

const Contact = () => {
  return (
    <div>
      <div class="d-flex flex-column align-items-center" style={{ marginTop: '200px' }}>
        <p class="content1">any question ?</p>
        <h4 class="font-weight-bold">Contact Me Donny Marsahid</h4>
        <p>
          hubungi saya melalui email berikut
          <br />
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"> donnymrshd.94@gmail.com</a>
        </p>
      </div>
      <div class="container text-center">
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

export default Contact;
