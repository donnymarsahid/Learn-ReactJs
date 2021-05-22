// Dark Mode
const toggle = document.querySelector('.iconDarkMode');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('darkMode');
  $('.iconDarkMode').toggleClass('fa-sun');
  $('.iconDarkMode').toggleClass('flip');
  localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
  document.body.classList.remove('darkMode');
  $('.iconDarkMode').toggleClass('fa-sun');
  $('.iconDarkMode').toggleClass('flip');
  localStorage.setItem('darkMode', 'null');
};
// end

if (darkMode == 'enabled') {
  enableDarkMode();
}
toggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Hamburger Menu
$(document).ready(function () {
  $('.iconMenu').on('click', function () {
    $('.iconMenu').toggleClass('flip');
    $('.iconMenu').toggleClass('fa-times');
    $('.iconMenu').toggleClass('fa-bars');
  });
});

// Image
const containerz = document.querySelector('.containerz');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
