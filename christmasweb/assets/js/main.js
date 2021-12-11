const nav_toggle = document.getElementById('nav-toggle');
const nav_close = document.getElementById('nav-close');
const nav_menu = document.getElementById('nav-menu');
if (nav_toggle) {
  nav_toggle.addEventListener('click', function () {
    nav_menu.classList.add('show-menu')
  })
}
if (nav_close) {
  nav_close.addEventListener('click', function () {
    nav_menu.classList.remove('show-menu')
  })
}

const links = document.querySelectorAll('.nav-link');
function closeMenu() {
  const nav_menu = document.getElementById('nav-menu');
  nav_menu.classList.remove('show-menu');
}

links.forEach(link => link.addEventListener('click', closeMenu));

// Scroll HEADER
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// Swiper
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: 'true',
  slidesPerView: "auto",
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 80,
    },
  },
});
// Scroll Active Link
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(item => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop - 58;
    const sectionId = item.getAttribute('id');
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);

// Scroll UP
function scrollup() {
  const scrollup = document.getElementById('scrollup');
  if (this.scrollY > 500) {
    scrollup.classList.add('show-scroll');
  } else {
    scrollup.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollup);

// DARK MODE
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme' // class dark theme
const iconTheme = 'bx-sun' // icon name

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  // jika terdapat selected theme dan itu berupa dark maka add dark theme (DOM body berubah)
  // jika bukan dark maka remove darktheme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  // dark theme aktif dan dom berubah
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // dark theme dan icon disimpan dalam localstorage
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
