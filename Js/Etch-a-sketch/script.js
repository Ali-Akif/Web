document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const penButton = document.getElementById('pen');
    const rainbowButton = document.getElementById('rainbow');
    const eraserButton = document.getElementById('eraser');
    const sizeRange = document.getElementById('size-range');
    const sizeValue = document.getElementById('size-value');
    const sizeValue2 = document.getElementById('size-value2');
    const applySizeButton = document.getElementById('apply-size');
    let currentMode = 'pen'; // Default mode
    let drawing = false;

    function createGrid(size) {
        container.innerHTML = ''; // Clear the container before creating a new grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            container.appendChild(div);
        }

        addHoverEffect();
    }

    function addHoverEffect() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (drawing) {
                    applyColor(item);
                }
            });

            item.addEventListener('mousedown', (event) => {
                event.preventDefault(); // Prevent default dragging behavior
                applyColor(item);
                drawing = true;
            });
        });

        container.addEventListener('mouseup', () => {
            drawing = false;
        });

        container.addEventListener('mouseleave', () => {
            drawing = false;
        });
    }

    function applyColor(item) {
        if (currentMode === 'pen') {
            item.style.backgroundColor = 'black';
        } else if (currentMode === 'rainbow') {
            item.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (currentMode === 'eraser') {
            item.style.backgroundColor = 'white';
        }
    }

    penButton.addEventListener('click', () => {
        currentMode = 'pen';
    });

    rainbowButton.addEventListener('click', () => {
        currentMode = 'rainbow';
    });

    eraserButton.addEventListener('click', () => {
        currentMode = 'eraser';
    });

    sizeRange.addEventListener('input', () => {
        sizeValue.textContent = sizeRange.value;
        sizeValue2.textContent = sizeRange.value;
    });

    applySizeButton.addEventListener('click', () => {
        const size = parseInt(sizeRange.value);
        createGrid(size);
    });

    createGrid(16); // Create a default 16x16 grid
});

// This is not the Odin version
