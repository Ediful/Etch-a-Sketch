const container = document.getElementById('grid-container');

// Creates grid
function makeGrid(gridSize) {
  container.style.setProperty('--grid-size', gridSize);
  for (let i = 0; i < gridSize*gridSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    container.appendChild(gridItem);
  }
}

function highlightItem () {
  this.style.backgroundColor = 'black';
}

function clearGrid () {
  const array = Array.from(container.childNodes);
  array.forEach((element) => {
    container.removeChild(element);
  });

  let customGridSize = window.prompt("Please enter grid size (maximum of 100");
  if (customGridSize > 100) {
    customGridSize = 100;
  }
  makeGrid(customGridSize);

  for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseenter', highlightItem)
  }
}

makeGrid(16);

// change background color of gridItem on hover .grid-item:hover
let gridItem = document.getElementsByClassName('grid-item');
for (let i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener('mouseenter', highlightItem)
}

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', clearGrid);