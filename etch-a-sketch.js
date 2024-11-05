document.addEventListener("DOMContentLoaded", function() {
    // Populates grid on page load
    const container = document.getElementById("container");
    for(let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    };

    // Add hover effect after populating the grid
    const cellHover = document.querySelectorAll(".cell");
    cellHover.forEach((item) => {
        item.addEventListener("mouseenter", function() {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseout", function () {
            setTimeout(() => {
                item.classList.remove("hovered");
            }, 1000);
        });
    });
});