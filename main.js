container = document.querySelector(".container");

createGrid(16, 16);

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

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function randomColor() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}