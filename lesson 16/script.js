const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');

let intervalId;

function getRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

startBtn.addEventListener('click', () => {
    intervalId = setInterval( () => {
        document.body.style.backgroundColor = getRandomColor()
    }, 2000);
});

stopBtn.addEventListener('click' , () => {
    clearInterval(intervalId)
});

const clickBtn = document.querySelector('#clickBtn');
const counter = document.querySelector('#counter');

let count = 0;

clickBtn.addEventListener('click', () => {
    count++

    counter.innerText = `Click = ${count}`
})
console.log(clickBtn)
