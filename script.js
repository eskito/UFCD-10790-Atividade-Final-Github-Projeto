// Contador
const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

function updateCount() {
    countElement.textContent = count;
}

// Mudar cor de fundo
const changeColorBtn = document.getElementById('changeColor');
const colors = ['#ffffff', '#ffe6e6', '#e6ffe6', '#e6e6ff', '#fff2e6'];
let currentColor = 0;

changeColorBtn.addEventListener('click', () => {
    currentColor = (currentColor + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColor];
});