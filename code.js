const container = document.querySelector('#container');

for(let i = 0; i < 16 ; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
    const gridCell = document.createElement('div');
    gridCell.setAttribute('id', i + "+" + j);
    gridCell.classList.add('gridCell');
    row.appendChild(gridCell);
    
    }
    
}

/*const cRow = document.createElement('p');
cRow.textContent = "C" + i;
row.appendChild(cRow);*/