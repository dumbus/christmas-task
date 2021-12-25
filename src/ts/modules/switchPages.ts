import { renderToysCards } from './treeUtils/render';

const switchPages = () => {
  const switchToToys = document.querySelector('.header-toys-nav-toys');
  const switchToTree = document.querySelector('.header-toys-nav-tree');
  const startBtn = document.querySelector('.start-btn');
  const startHeaderBtn = document.querySelector('.header-toys-nav-logo');

  const toysBlock = document.querySelector('.main-toys');
  const treeBlock = document.querySelector('.main-tree');
  const startBlock = document.querySelector('.start');

  startBtn.addEventListener('click', () => {
    toysBlock.classList.remove('hidden');
    treeBlock.classList.add('hidden');
    startBlock.classList.add('hidden');

    switchToToys.classList.add('header-toys-nav-item-active');
    switchToTree.classList.remove('header-toys-nav-item-active');
  });

  startHeaderBtn.addEventListener('click', () => {
    startBlock.classList.remove('hidden');
    toysBlock.classList.add('hidden');
    treeBlock.classList.add('hidden');

    switchToToys.classList.remove('header-toys-nav-item-active');
    switchToTree.classList.remove('header-toys-nav-item-active');
  });

  switchToToys.addEventListener('click', () => {
    toysBlock.classList.remove('hidden');
    treeBlock.classList.add('hidden');
    startBlock.classList.add('hidden');

    switchToToys.classList.add('header-toys-nav-item-active');
    switchToTree.classList.remove('header-toys-nav-item-active');
  });

  switchToTree.addEventListener('click', () => {
    treeBlock.classList.remove('hidden');
    toysBlock.classList.add('hidden');
    startBlock.classList.add('hidden');
    renderToysCards();

    switchToTree.classList.add('header-toys-nav-item-active');
    switchToToys.classList.remove('header-toys-nav-item-active');
  });
};

export default switchPages;
