import data from '../../data.json';
import { Card, ICardParams } from './cards';

const favorites: HTMLElement[] = [];
const headerFavorites = document.querySelector('.header-controls-favourites span');

export function updateFavorites(card: HTMLElement) {
  card.addEventListener('click', () => {
    if (favorites.length === 20) {
      // TODO: function with modal
      console.log('more than 20');
    } else {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
        const indexToDelete = favorites.indexOf(card);
        favorites.splice(indexToDelete, 1);
      } else {
        card.classList.add('active');
        favorites.push(card);
      }
      headerFavorites.textContent = '' + favorites.length;
    }
  });
}

export function renderCards(cardsArray: ICardParams[]) {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = new Card(cardsArray[i]);
    const cardHTML = card.createCard();
    card.insertCard();

    updateFavorites(cardHTML);
  }
}
