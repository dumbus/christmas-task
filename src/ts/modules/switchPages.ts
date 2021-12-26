import { renderToysCards } from './treeUtils/render';
import drag from './treeUtils/drag';

const switchPages = () => {
  const switchToToys = document.querySelector('.header-toys-nav-toys');
  const switchToTree = document.querySelector('.header-toys-nav-tree');
  const startBtn = document.querySelector('.start-btn');
  const startHeaderBtn = document.querySelector('.header-toys-nav-logo');

  const toysBlock = document.querySelector('.main-toys');
  const treeBlock = document.querySelector('.main-tree');
  const startBlock = document.querySelector('.start');

  renderToysCards();

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
    const mapBlock = document.querySelector('map');
    mapBlock.innerHTML = '<area coords="246,-1,2,621,139,701,368,696,494,629" shape="poly">';

    treeBlock.classList.remove('hidden');
    toysBlock.classList.add('hidden');
    startBlock.classList.add('hidden');
    renderToysCards();
    drag();

    switchToTree.classList.add('header-toys-nav-item-active');
    switchToToys.classList.remove('header-toys-nav-item-active');
  });
};

export default switchPages;
