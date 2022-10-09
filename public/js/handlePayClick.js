import { cardData } from "./cardData";

const modal = document.querySelector('.modal');


export function handlePayClick(cardId) {
  const targetCardObj = cardData.filter(function (card) {
    return card.uuid === cardId;
  })[0];

  modal.style.display = 'inline'

  if (targetCardObj.price === 500) {
    console.log('Basic ');
  } else if (targetCardObj.price === 1000) {
    console.log('Gold');
  } else if (targetCardObj.price === 2000) {
    console.log('Platinum');
  }

  // Add the price to the total for the modal
  // put the inner HTML in this function, but render in the render function
  // This function should basically just open the modal after
  //

  // function of openModal() goes here, need to create the function
}