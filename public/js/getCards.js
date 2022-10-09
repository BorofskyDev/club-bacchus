import { cardData } from "./cardData";

export function getCards() {
  let cardHTML = ``;

  cardData.forEach(function (card) {
    cardHTML += `
    <div class="cta__card">
      <div class="cta__content">
       <h2 class="cta__number">${card.id}</h2>
        <h3 class="cta__title">${card.level}</h3>
        <p class="cta__text">${card.text}</p>
         <h4 class="cta__price">Price: &euro;<span>${card.price}</span></h4>
        <button class="cta__pay" data-pay="${card.id}">Join Now</button>
      </div>
    </div>
            `;
  });
  return cardHTML;
}

