import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/about.css';
import '../styles/amenities.css';
import '../styles/cta.css';
import '../styles/checkout-modal.css';

import { cardData } from './cardData';
import { getCards } from './getCards';
import { handlePayClick } from './handlePayClick';

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


// CARD BUTTON EVENT LISTENDER

document.addEventListener('click', function (e) {
  if (e.target.dataset.pay) {
    handlePayClick(e.target.dataset.pay);
  }
});

// RENDER
function render() {
  document.getElementById('cta-container').innerHTML = getCards();
}

render();
