const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const suits = [
    'clubs',
    'diamonds',
    'hearts',
    'spades'
];

const faces = [
    'jack',
    'queen',
    'king'
];

const cardsContainer = document.getElementById('cards');

function createCard(value, suit, centerImage = suit) {

    const card = document.createElement('div');
    card.classList.add('card');

    const top = document.createElement('div');
    top.classList.add('card__top');

    const topText = document.createElement('span');
    topText.textContent = value;

    const topImg = document.createElement('img');
    topImg.src = `img/${suit}.svg`;

    top.appendChild(topText);
    top.appendChild(topImg);

    const center = document.createElement('div');
    center.classList.add('card__center');

    const centerImg = document.createElement('img');
    centerImg.src = `img/${centerImage}.svg`;

    center.appendChild(centerImg);

    const bottom = document.createElement('div');
    bottom.classList.add('card__bottom');

    const bottomText = document.createElement('span');
    bottomText.textContent = value;

    const bottomImg = document.createElement('img');
    bottomImg.src = `img/${suit}.svg`;

    bottom.appendChild(bottomText);
    bottom.appendChild(bottomImg);

    card.appendChild(top);
    card.appendChild(center);
    card.appendChild(bottom);

    cardsContainer.appendChild(card);
}

for (let number of numbers) {

    for (let suit of suits) {

        createCard(number, suit);
    }
}

const faceLetters = {
    jack: 'J',
    queen: 'Q',
    king: 'K'
};

for (let face of faces) {

    for (let suit of suits) {

        createCard(
            faceLetters[face],
            suit,
            face
        );
    }
}

for (let suit of suits) {

    createCard(
        'A',
        suit
    );
}
