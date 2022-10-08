import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/about.css';
import '../styles/amenities.css';
import '../styles/cta.css';

import { cardData } from './cardData';

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

// CARD

document.addEventListener('click', function (e) {
  if(e.target.dataset.pay) {
    handlePayClick(e.target.dataset.pay)
  }
})

function handlePayClick(cards) {
  console.log("okay")
  // function of openModal() goes here, need to create the function
}

function getCards() {
  let cardHTML = ``;

  cardData.forEach(function (card) {
    cardHTML += `
    <div class="cta__card">
      <div class="cta__content">
       <h2 class="cta__number">${card.id}</h2>
        <h3 class="cta__title">${card.level}</h3>
        <p class="cta__text">${card.text}</p>
         <h4 class="cta__price">Price: &euro;<span>${card.price}</span></h4>
        <button class="cta__pay" data-pay="${card.id}">Pay Now</button>
      </div>
    </div>
            `;
           
  });
  return cardHTML;
}

function render() {
  document.getElementById('cta-container').innerHTML = getCards();
}

render();
