import data from '../../data.json';
import { Card } from './cards';

const toys = () => {
  const toysHTMLArr: HTMLElement[] = [];
  const toysObjArr: Card[] = [];

  // can be copied to utils:
  let favoritesCounter = 0;
  const headerFavorites = document.querySelector('.header-controls-favourites span');

  function updateFavorites(card: HTMLElement) {
    card.addEventListener('click', () => {
      if (favoritesCounter === 20) {
        // TODO: function with modal
        console.log('more than 20');
      } else {
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          favoritesCounter--;
        } else {
          card.classList.add('active');
          favoritesCounter++;
        }
        headerFavorites.textContent = '' + favoritesCounter;
      }
    });
  }

  function renderCards() {
    for (let i = 0; i < data.length; i++) {
      const card = new Card(data[i]);
      const cardHTML = card.createCard();
      toysHTMLArr[i] = cardHTML;
      toysObjArr[i] = card;
      card.insertCard();

      updateFavorites(cardHTML);
    }
  }
  renderCards();
};

export default toys;
