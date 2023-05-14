let size = 16;

function getSize() {
    size = prompt();
}
const container = document.querySelector('#container');


createGrid();

function createGrid() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.setAttribute('id', i + "+" + j);
            gridCell.classList.add('gridCell');
            gridCell.addEventListener('mouseover', () => {
                gridCell.classList.add('clicked');
            });
            row.appendChild(gridCell);
        }
    }

}


function clearGrid(){
    const gridCells = document.querySelectorAll('div > .gridCell');
    for (const cell of gridCells) {
        cell.classList.remove('clicked');
    }
}
function addListener(){
    for (const cell of gridCells) {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('clicked');
        });
    }
}

function newGrid(){
    getSize();
    createGrid(size);
}

/*function newGrid(){
    console.log(container.id);
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    getSize();
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.setAttribute('id', i + "+" + j);
            gridCell.classList.add('gridCell');
            gridCell.addEventListener('mouseover', () => {
                gridCell.classList.add('clicked');
            });
            row.appendChild(gridCell);
        }
    }

}*/




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