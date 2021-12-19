import data from '../../data.json';
import { Card, ICardParams } from './cards';

let favoritesNumbers: number[];
const headerFavorites = document.querySelector('.header-controls-favourites span');

if (localStorage.getItem('favoritesNumbers') !== null) {
  favoritesNumbers = JSON.parse(localStorage.getItem('favoritesNumbers'));
} else {
  favoritesNumbers = [];
}

export function handleFavorites(card: HTMLElement) {
  card.addEventListener('click', () => {
    if (favoritesNumbers.length === 20) {
      // TODO: function with modal
      console.log('more than 20');
    } else {
      const cardNum = card.getAttribute('data-num');

      if (card.classList.contains('active')) {
        card.classList.remove('active');
        const indexToDelete = favoritesNumbers.indexOf(+cardNum);
        favoritesNumbers.splice(indexToDelete, 1);
        localStorage.setItem('favoritesNumbers', JSON.stringify(favoritesNumbers));
      } else {
        card.classList.add('active');
        if (favoritesNumbers.indexOf(+cardNum) === -1) {
          favoritesNumbers.push(+cardNum);
          localStorage.setItem('favoritesNumbers', JSON.stringify(favoritesNumbers));
        }
      }
    }
    headerFavorites.textContent = '' + favoritesNumbers.length;
  });
}

export function updateFavorites() {
  const cardsItems = document.querySelectorAll('.card');
  cardsItems.forEach((cardItem) => {
    const cardNum = cardItem.getAttribute('data-num');
    console.log(cardItem);

    if (favoritesNumbers.indexOf(+cardNum) !== -1) {
      cardItem.classList.add('active');
    }
  });
  headerFavorites.textContent = '' + favoritesNumbers.length;
}

export function renderCards(cardsArray: ICardParams[]) {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = new Card(cardsArray[i]);
    const cardHTML = card.createCard();
    card.insertCard();

    handleFavorites(cardHTML);
    updateFavorites();
  }
}
