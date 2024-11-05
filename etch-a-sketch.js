let gridDensity = 16;

function createGrid(gridDensity) {
    const grid = document.getElementById("grid");
    for(let i = 0; i < gridDensity**2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `${600 / gridDensity}px`
        cell.style.width = `${600 / gridDensity}px`
        grid.appendChild(cell);
    };

    // Updates grid density information
    document.getElementById("current-grid").textContent = `Current grid density: ${gridDensity} x ${gridDensity}`

    // Add hover effect after populating the grid
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach((cell) => {
        
        let r = (Math.random() * 255);
        let g = (Math.random() * 255);
        let b = (Math.random() * 255);
        let randomRGB = `rgb(${r}, ${g}, ${b})`;

        cell.addEventListener("mouseover", () => {
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = randomRGB;
            } else {
                cell.style.opacity -= "-0.1";
            }
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    createGrid(gridDensity);
});

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
};

const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", () => {
    const userGridDensity = window.prompt("Input the number of columns/rows you want (max. 100)");

    if (userGridDensity > 0 && userGridDensity <= 100) {
        gridDensity = userGridDensity;
        removeGrid();
        createGrid(gridDensity);
    } else if (isNaN(userGridDensity)) {
        alert("Please input a number");
    } else {
        alert("The number must be between 1 and 100");
    };  
});

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach((cell) => { 
        cell.style.backgroundColor = "";
        cell.style.opacity = ""; 
    });
});