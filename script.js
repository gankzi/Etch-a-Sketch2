let gridSize = document.querySelector('.slider');
let rangeValue = document.querySelector('.range-value');
const penButton = document.querySelector('#color');
const eraserButton = document.querySelector('#eraser');
const resetButton = document.querySelector('#reset');
const mainContainer = document.querySelector('#main-container');

let eraser = false;
penButton.style.backgroundColor = "rgb(117, 113, 109)";

gridSize.addEventListener('click', () => {
    let newGridSize = gridSize.value;
    rangeValue.textContent = newGridSize;

    changeGridSize(newGridSize);

} );

penButton.addEventListener('click', () => {
    eraser = false;
    eraserButton.style.backgroundColor = "rgb(228, 228, 228)";
    penButton.style.backgroundColor = "rgb(117, 113, 109)";
});

eraserButton.addEventListener('click', () => {
    eraser = true;
    penButton.style.backgroundColor = "rgb(228, 228, 228)";
    eraserButton.style.backgroundColor = "rgb(117, 113, 109)"
});

resetButton.addEventListener('click', () => {
    changeGridSize(gridSize.value);
});

function changeGridSize(size) {

    mainContainer.replaceChildren();

    mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (i=0; i < size * size; i++) {
    const newDiv = document.createElement('div');

    newDiv.addEventListener('mouseover', function() {
        if (eraser) {
            eraseColor(this);
        } else {
            changeColor(this);
        }
    });

    newDiv.classList.add('boxes')
    mainContainer.appendChild(newDiv);
    }
};

function changeColor(event) {
    event.style.backgroundColor = "black";
};

function eraseColor(event) {
    event.style.backgroundColor = 'white';
}


changeGridSize(gridSize.value);