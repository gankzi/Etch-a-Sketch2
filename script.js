let gridSize = document.querySelector('.slider');
let rangeValue = document.querySelector('.range-value');
const eraserButton = document.querySelector('#eraser');
const resetButton = document.querySelector('#reset');
const mainContainer = document.querySelector('#main-container');

gridSize.addEventListener('click', () => {
    let newGridSize = gridSize.value;
    rangeValue.textContent = newGridSize;

    changeGridSize(newGridSize);
} );


function changeGridSize(size) {

    mainContainer.replaceChildren();
    
    for (i=0; i < size; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('boxes')

    mainContainer.appendChild(newDiv);
    }
};


changeGridSize(gridSize.value);