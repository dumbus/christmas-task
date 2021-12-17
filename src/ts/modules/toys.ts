import data from '../../data.json';
import { Card } from './cards';
import { utils } from './utils';

const toys = () => {
  function renderCards() {
    for (let i = 0; i < data.length; i++) {
      const card = new Card(data[i]);
      const cardHTML = card.createCard();
      card.insertCard();

      utils.updateFavorites(cardHTML);
    }
  }

  renderCards();
};

export default toys;
