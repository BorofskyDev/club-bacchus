import { cardData } from './cardData';

const modal = document.querySelector('.modal');
const aurBtn = document.getElementById('aur-btn');
const varanBtn = document.getElementById('varan-btn');
const vipBtn = document.getElementById('vip-btn');
const payModal = document.querySelector('.pay__modal');
const declineBtn = document.getElementById('decline-btn');
const payBtn = document.getElementById('pay-btn');

let totalPrice = 0;

export function handlePayClick(cardId) {
  const targetCardObj = cardData.filter(function (card) {
    return card.uuid === cardId;
  })[0];

  modal.style.left = '0';

  let subTotal = 0;
  if (targetCardObj.level === 'Basic') {
    subTotal = targetCardObj.price;
  } else if (targetCardObj.level === 'Gold') {
    subTotal = targetCardObj.price;
  } else if (targetCardObj.level === 'Platinum') {
    subTotal = targetCardObj.price;
  }
  totalPrice = subTotal;
  secondOffer();
}

declineBtn.addEventListener('click', () => {
  paymentModal();
  modal.style.left = '-200%';
  payModal.style.right = '0';
});

function secondOffer() {
  let addOn = 0;
  aurBtn.addEventListener('click', () => {
    addOn += 1000;
    totalPrice += addOn;
    paymentModal();
    modal.style.left = '-200%';
    payModal.style.right = '0';
  });
  varanBtn.addEventListener('click', () => {
    addOn += 1000;
    totalPrice += addOn;
    paymentModal();
    modal.style.left = '-200%';
    payModal.style.right = '0';
  });
  vipBtn.addEventListener('click', () => {
    addOn += 1500;
    totalPrice += addOn;
    paymentModal();
    modal.style.left = '-200%';
    payModal.style.right = '0';
  });
}

function paymentModal() {
  document.getElementById('payment').innerHTML = `
    <p class="pay__total">Total Due: &euro;${totalPrice}</p>
  `;
}

payBtn.addEventListener('click', () => {
  document.getElementById('payment-recieved').innerHTML = ` 
                  <h2 class="thanks">Your payment has been recieved</h2>
                  <p class="thank-you">I hope you enjoyed the experience. Please do visit my 
                  actual website at <a href="https://joelborofsky.com" target="_blank">BorofskyDev</a>!</p>
  `;
  setTimeout(function () {
    payModal.style.right = '-200%';
  }, 5000);
});
