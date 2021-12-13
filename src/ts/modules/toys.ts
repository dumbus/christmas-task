import data from '../../data.json';
import { Card } from './cards';

const toys = () => {
  const toysArr: HTMLElement[] = [];

  for (let i = 0; i < data.length; i++) {
    const card = new Card(data[i]);
    toysArr[i] = card.createCard();
    card.insertCard();
  }
};

export default toys;
