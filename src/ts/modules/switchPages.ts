import { renderToysCards } from './treeUtils/render';

const switchPages = () => {
  const switchToToys = document.querySelector('.header-toys-nav-toys');
  const switchToTree = document.querySelector('.header-toys-nav-tree');

  const toysBlock = document.querySelector('.main-toys');
  const treeBlock = document.querySelector('.main-tree');

  switchToToys.addEventListener('click', () => {
    toysBlock.classList.remove('hidden');
    treeBlock.classList.add('hidden');
  });

  switchToTree.addEventListener('click', () => {
    treeBlock.classList.remove('hidden');
    toysBlock.classList.add('hidden');
    renderToysCards();
  });
};

export default switchPages;
