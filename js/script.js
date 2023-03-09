const openMenuButton = document.querySelector('.open-menu-button');
const openMenuButton2 = document.querySelector('.open-menu-button-2');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');

openMenuButton.addEventListener('click', function() {
  mobileNav.classList.add('block');
  mobileNav.classList.remove('hidden');
});

openMenuButton2.addEventListener('click', function() {
  mobileNav.classList.add('block');
  mobileNav.classList.add('py-3');
  mobileNav.classList.remove('hidden');
  mobileNav.classList.remove('py-6');
});

closeMenuButton.addEventListener('click', function() {
  mobileNav.classList.remove('block');
  mobileNav.classList.remove('py-3');
  mobileNav.classList.add('hidden');
  mobileNav.classList.add('py-6');
});


mobileNavLink.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('block');
    mobileNav.classList.add('hidden');
  });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});


