let size = 16;

function getSize() {
    size = prompt();
}
const container = document.querySelector('#container');
createGrid();

function createGrid() {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.setAttribute('id', i + "+" + j);
            gridCell.classList.add('gridCell');
            row.appendChild(gridCell);
        }
    }
}

function newGrid(){
    console.log(container.id);
    container.removeChild(row);

    /*
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.setAttribute('id', i + "+" + j);
            gridCell.classList.add('gridCell');
            row.appendChild(gridCell);
        }
    }*/
}

const gridCells = document.querySelectorAll('div > .gridCell');
function clearGrid(){
    for (const cell of gridCells) {
        cell.classList.remove('clicked');
    }
}

for (const cell of gridCells) {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('clicked');
    });
}




/*
for(const cell of gridCells){
    cell.classList.add('something');
}

gridCells.forEach((cell) => {

    cell.style.cssText = 'background-color: black;';
   
});


/*const cRow = document.createElement('p');
cRow.textContent = "C" + i;
row.appendChild(cRow);*/