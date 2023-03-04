const drag = () => {
  const dropzone = document.querySelector('area');
  const draggable = document.querySelectorAll('[draggable]');

  let shiftX: number;
  let shiftY: number;

  let dragStartBlock: ParentNode;

  function updateNumber(num: number) {
    const cardSlot = document.querySelector(`.tree-toys-card[data-num="${num}"]`);
    const countBlock = document.querySelector(`p[data-num="${num}"]`);

    const countValue = cardSlot.childElementCount;
    countBlock.textContent = countValue - 1 + '';
  }

  function handleDragStart(e: DragEvent) {
    const target = e.target as HTMLElement;
    e.dataTransfer.setData('id', target.id);
  }

  function allowDrop(e: Event) {
    e.preventDefault();
  }

  function handleDrop(e: DragEvent) {
    const target = e.target as HTMLElement;
    const itemId = e.dataTransfer.getData('id');
    const toy = document.getElementById(itemId);

    if (document.getElementById(itemId)) {
      const blockId = +itemId.substring(0, itemId.indexOf('-'));

      const finalX = e.clientX - target.getBoundingClientRect().left - shiftX;
      const finalY = e.clientY - target.getBoundingClientRect().top - shiftY;

      toy.style.left = finalX + 'px';
      toy.style.top = finalY + 'px';
      target.append(toy);

      updateNumber(blockId);
    }
  }

  draggable.forEach((toy) => {
    toy.addEventListener('dragstart', (e) => {
      const target = e.target as HTMLElement;
      const event = e as DragEvent;

      dragStartBlock = target.parentNode;

      shiftX = event.clientX - target.getBoundingClientRect().left;
      shiftY = event.clientY - target.getBoundingClientRect().top;

      handleDragStart(event);
    });
  });

  dropzone.addEventListener('dragover', (e) => {
    allowDrop(e);
  });

  dropzone.addEventListener('drop', (e) => {
    const event = e as DragEvent;
    handleDrop(event);
  });

  const treeContainer = document.querySelector('.tree-container-img');
  const treeContainerWidth = window.getComputedStyle(treeContainer).width;
  const treeContainerHeight = window.getComputedStyle(treeContainer).height;
  const treeContainerOffsetX = treeContainer.getBoundingClientRect().left;
  const treeContainerOffsetY = treeContainer.getBoundingClientRect().top;

  document.addEventListener('dragend', (e) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const event = e as DragEvent;

    const xCoord = event.x;
    const yCoord = event.y;

    // если событие не попадает в блок ёлки и начинается с ёлки
    if (
      dragStartBlock === dropzone &&
      (yCoord < treeContainerOffsetY - window.pageYOffset ||
        yCoord > +treeContainerHeight.slice(0, -2) + treeContainerOffsetY - window.pageYOffset ||
        xCoord < treeContainerOffsetX ||
        xCoord > +treeContainerWidth.slice(0, -2) + treeContainerOffsetX)
    ) {
      const itemId = +target.id.substring(0, target.id.indexOf('-'));
      const cardSlot = document.querySelector(`.tree-toys-card[data-num="${itemId}"]`);
      target.style.left = '';
      target.style.top = '';
      cardSlot.append(target);

      updateNumber(itemId);
    }
  });
};

export default drag;
