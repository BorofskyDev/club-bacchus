import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/about.css';

const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');


// NAVBAR
toggleMenu.addEventListener('click', () => {
  navMenu.classList.add('show');
});

toggleMenu.addEventListener('keydown', () => {
  navMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

closeMenu.addEventListener('keydown', () => {
    navMenu.classList.remove('show');
});


