let basic = document.querySelector('.basic')
let startBtn = document.querySelector('.start-btn')
let hitResult = document.getElementById('hitResult')
let botResult = document.getElementById('botResult')
let point = document.getElementById('point')
let userPoint = 0
// let firstCard = 0
// let secondCard = 0
let cards = []
console.log(cards);
function randomCard(){
    let randomcard = Math.floor( Math.random() * 13 ) + 1
    if (randomcard > 10) {
        return 10
    } else {
       return randomcard 
    }
}

function hit() {
    if(cards.length<3){
        cards.push(randomCard())
        console.log(cards);
    }
    hitResult.textContent = "Cards: " + cards
    if (cards.length === 2){
        userPoint = cards [0] + cards [1]
        point.textContent =  userPoint
    }else if (cards.length === 3){
        userPoint = cards [0] + cards [1] + cards [2]
        point.textContent = userPoint
    }
}

function botCard() {
    let botCards = []
    let firstCard = randomCard()
    let secondCard = randomCard()
    botCards = [firstCard, secondCard]
    // let sum = firstCard + secondCard
    // if ()
    console.log(botCards);
    botResult.textContent = botCards
}

function startGame() {
    startBtn.remove()
    basic.remove()
}

