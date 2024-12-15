const grid = document.getElementById('grid');
const width = 8; // Ancho de la cuadrícula
let cells = [];
let colorArray = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
let isDragging = false;
let firstCell = null;
let secondCell = null;

// Crear la cuadrícula de caramelos
function createGrid() {
    for (let i = 0; i < width * width; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(colorArray[Math.floor(Math.random() * colorArray.length)]);
        cell.setAttribute('id', i);
        cell.addEventListener('click', handleCellClick);
        grid.appendChild(cell);
        cells.push(cell);
    }
}

// Manejar el clic en una celda
function handleCellClick(event) {
    if (!isDragging) {
        if (firstCell === null) {
            firstCell = event.target;
        } else {
            secondCell = event.target;
            swapCells(firstCell, secondCell);
        }
    }
}

// Intercambiar dos celdas
function swapCells(cell1, cell2) {
    const tempClass = cell1.classList[1];
    cell1.classList.remove(cell1.classList[1]);
    cell1.classList.add(cell2.classList[1]);
    cell2.classList.remove(cell2.classList[1]);
    cell2.classList.add(tempClass);
    checkMatches();
    firstCell = null;
    secondCell = null;
}

// Revisar y eliminar combinaciones
function checkMatches() {
    // Comprobar las combinaciones horizontales
    for (let i = 0; i < cells.length; i++) {
        if (i % width < width - 2) {
            if (cells[i].classList[1] === cells[i + 1].classList[1] && cells[i + 1].classList[1] === cells[i + 2].classList[1]) {
                cells[i].style.backgroundColor = 'white';
                cells[i + 1].style.backgroundColor = 'white';
                cells[i + 2].style.backgroundColor = 'white';
            }
        }
    }

    // Comprobar las combinaciones verticales
    for (let i = 0; i < cells.length - width * 2; i++) {
        if (cells[i].classList[1] === cells[i + width].classList[1] && cells[i + width].classList[1] === cells[i + width * 2].classList[1]) {
            cells[i].style.backgroundColor = 'white';
            cells[i + width].style.backgroundColor = 'white';
            cells[i + width * 2].style.backgroundColor = 'white';
        }
    }

    setTimeout(() => {
        updateGrid();
    }, 500); // Después de medio segundo, actualizamos la cuadrícula
}

// Actualizar la cuadrícula después de eliminar combinaciones
function updateGrid() {
    cells.forEach((cell, index) => {
        if (cell.style.backgroundColor === 'white') {
            cell.classList.remove(cell.classList[1]);
            cell.classList.add(colorArray[Math.floor(Math.random() * colorArray.length)]);
            cell.style.backgroundColor = ''; // Reseteamos el color
        }
    });
}

// Inicializar el juego
createGrid();
