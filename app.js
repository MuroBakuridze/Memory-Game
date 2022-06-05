const cardArray = [
    {
        name: 'corgy',
        img: 'images/corgi.jpg',
    },
    {
        name: 'avo',
        img: 'images/avo.jpg',
    },
    {
        name: 'cat',
        img: 'images/cat.jpg',
    },
    {
        name: 'panda',
        img: 'images/panda.png',
    },
    {
        name: 'fox',
        img: 'images/fox.png',
    },
    {
        name: 'mosp',
        img: 'images/mosp.png',
    },
    {
        name: 'corgy',
        img: 'images/corgi.jpg',
    },
    {
        name: 'avo',
        img: 'images/avo.jpg',
    },
    {
        name: 'cat',
        img: 'images/cat.jpg',
    },
    {
        name: 'panda',
        img: 'images/panda.png',
    },
    {
        name: 'fox',
        img: 'images/fox.png',
    },
    {
        name: 'mosp',
        img: 'images/mosp.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i)
        card.classList.add('blank');
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked same image!')
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen, cardsChosenIds)

    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}