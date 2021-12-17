import data from '../../data.json';
import { ICardParams } from './cards';

interface IFiltersSettings {
  shapeFiltersApplied: boolean[];
  colorFiltersApplied: boolean[];
  sizeFiltersApplied: boolean[];
  favouriteFiltersApplied: boolean;
}

interface IfilterValues {
  shapeFiltersValues: string[];
  colorFiltersValues: string[];
  sizeFiltersValues: string[];
}

const filters = () => {
  let cardsObjArr: ICardParams[] = [];

  const filtersSettings: IFiltersSettings = {
    shapeFiltersApplied: [false, false, false, false, false],
    colorFiltersApplied: [false, false, false, false, false],
    sizeFiltersApplied: [false, false, false],
    favouriteFiltersApplied: true
  };

  const filtersValues: IfilterValues = {
    shapeFiltersValues: ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'],
    colorFiltersValues: ['белый', 'желтый', 'красный', 'синий', 'зелёный'],
    sizeFiltersValues: ['большой', 'средний', 'малый']
  };

  function filter(dataArray: ICardParams[]) {
    // фильтр по форме
    if (filtersSettings.shapeFiltersApplied.indexOf(true) !== -1) {
      for (let i = 0; i < filtersSettings.shapeFiltersApplied.length; i++) {
        if (filtersSettings.shapeFiltersApplied[i] === true) {
          dataArray.forEach((toy) => {
            // если фильтр включен, форма игрушки совпадает с заданной, и такого элемента нет в массиве, добавляем элемент в массив
            if (filtersValues.shapeFiltersValues[i] === toy.shape && cardsObjArr.indexOf(toy) === -1) {
              cardsObjArr.push(toy);
            }
          });
        }
      }
    } else {
      // если фильтр выключен, пушим весь массив
      dataArray.forEach((toy) => {
        cardsObjArr.push(toy);
      });
    }

    // фильтр по цвету
    if (filtersSettings.colorFiltersApplied.indexOf(true) !== -1) {
      const resultArr: ICardParams[] = [];

      for (let i = 0; i < filtersSettings.colorFiltersApplied.length; i++) {
        if (filtersSettings.colorFiltersApplied[i] === true) {
          cardsObjArr.forEach((toy) => {
            // если фильтр включен, цвет игрушки совпадает с заданной, и такого элемента нет в массиве, добавляем элемент в буферный массив
            if (filtersValues.colorFiltersValues[i] === toy.color && resultArr.indexOf(toy) === -1) {
              resultArr.push(toy);
            }
          });
        }
      }
      cardsObjArr = resultArr;
    }

    // фильтр по размеру
    if (filtersSettings.sizeFiltersApplied.indexOf(true) !== -1) {
      const resultArr: ICardParams[] = [];

      for (let i = 0; i < filtersSettings.sizeFiltersApplied.length; i++) {
        if (filtersSettings.sizeFiltersApplied[i] === true) {
          cardsObjArr.forEach((toy) => {
            // если фильтр включен, размер игрушки совпадает с заданной, и такого элемента нет в массиве, добавляем элемент в буферный массив
            if (filtersValues.sizeFiltersValues[i] === toy.size && resultArr.indexOf(toy) === -1) {
              resultArr.push(toy);
            }
          });
        }
      }
      cardsObjArr = resultArr;
    }

    // фильтр по любимым
    if (filtersSettings.favouriteFiltersApplied === true) {
      const resultArr: ICardParams[] = [];

      cardsObjArr.forEach((toy) => {
        // если фильтр включен, игрушка является любимой и её нет в массиве, добавляем элемент в массив
        if (filtersSettings.favouriteFiltersApplied === toy.favorite && resultArr.indexOf(toy) === -1) {
          resultArr.push(toy);
        }
      });
      cardsObjArr = resultArr;
    }

    console.log(cardsObjArr);
  }

  filter(data);
};

export default filters;
