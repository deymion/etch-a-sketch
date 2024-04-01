let container = document.querySelector(".container");
let btnGrid = document.querySelector("#newGrid");

createGrid(16, 16);

container.addEventListener('mouseover', (event) => {
    setRandomBgColor(event.target);
});

btnGrid.addEventListener('click', () => {
    let side = Number(prompt("Number of squares per side (maximum 100):"));

    if (isNaN(side) || side < 1 || side > 100) {
        alert("Grid square only accepts numbers in the range of 1 to 100.");
    } else {
        removeGrid();
        createGrid(side, side);
    }
});

function createGrid(rows = 1, cols = 1) {

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function removeGrid() {
    let gridRows = document.querySelectorAll('.row');

    for (const grid of gridRows) {
        container.removeChild(grid);
    }
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function randomColor() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

function setRandomBgColor(selector) {
    const newBgColor = randomColor();
    selector.style.setProperty("background-color", newBgColor);
}