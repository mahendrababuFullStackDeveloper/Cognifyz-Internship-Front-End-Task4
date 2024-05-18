const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['green', 'red', 'yellow', 'navy', 'black'];

body.style.backgroundColor = 'white';

button.addEventListener('click', function () {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
})