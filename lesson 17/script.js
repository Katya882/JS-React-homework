const cube = document.querySelector('.cube');

let topPosition = 0;
let leftPosition = 150;

const gameInterval = setInterval(() => {

    if (topPosition >= 450) {
        clearInterval(gameInterval);
        return;
    }

    topPosition += 50;
    cube.style.top = `${topPosition}px`;

}, 1000);

document.addEventListener('keydown', (event) => {

    if (
        event.key === 'ArrowLeft' &&
        leftPosition > 0
    ) {
        leftPosition -= 50;
        cube.style.left = `${leftPosition}px`;
    }

    if (
        event.key === 'ArrowRight' &&
        leftPosition < 250
    ) {
        leftPosition += 50;
        cube.style.left = `${leftPosition}px`;
    }

});