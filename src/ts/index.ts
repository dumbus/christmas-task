import '../sass/style.scss';
import toys from './modules/toys';
import { tree } from './modules/tree';
import switchPages from './modules/switchPages';

toys();
tree();
switchPages();

console.log(`
Score: 200/200
[+] Вёрстка страниц приложения и навигация между ними - 30/30
[+] Меню с настройками - 50/50
[+] Гирлянда - 40/40
[+] Игрушки в избранном - (80/80):
(для улучшения UX при изменении избранных игрушек все игрушки снимаются с ёлки)
(снятие реализуется перетаскиванием игрушки в любую часть экрана, которая находится вне блока с ёлкой)
  `);
