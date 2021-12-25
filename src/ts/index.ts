import '../sass/style.scss';
import toys from './modules/toys';
import { tree } from './modules/tree';
import switchPages from './modules/switchPages';

toys();
tree();
switchPages();

console.log(`
  Score: 200/200
  [+] Страница с игрушками содержит карточки всех игрушек а также фильтры, строку поиска, поле для сортировки. 10/10
  [+] Карточка игрушки содержит её изображение, название, текстом или условным значком обозначено количество экземпляров, год покупки, форма, цвет, размер, является ли игрушка любимой 10/10
  [+] Добавление игрушек в избранное 20/20
  [+] Сортировка 20/20
  [+] Фильтры в указанном диапазоне от и до 30/30
  [+] Фильтры по значению 30/30
  [+] Можно отфильтровать игрушки по нескольким фильтрам разного типа (уведомление об остутствии выводится прямо на страницу под блоком с фильтрами) 20/20
  [+] Сброс фильтров (для улучшения UX при очистке LocalStorage страница перезагружается) 20/20
  [+] Сохранение настроек в local storage 10/10
  [+] Поиск 30/30
  `);
