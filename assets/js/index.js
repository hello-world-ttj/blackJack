let basic = document.querySelector('.basic')
let startBtn = document.querySelector('.start-btn')
let hitResult = document.getElementById('hitResult')
let botResult = document.getElementById('botResult')
let playerPoint = document.getElementById('playerPoint')
let deal = document.getElementById('deal')
let botPoint = document.getElementById('botPoint')
let userPoint = 0
let botSum = 0
let cardImg;
let result = document.createElement('h1')
let blackJack = document.createElement('h1')
let contents = document.querySelector('.contents')
// let firstCard = 0
// let secondCard = 0
let cards = []
let botCards = []
// console.log(playerPoint);
// console.log(cards);
function randomCard(){
    let randomcard = Math.floor( Math.random() * 13 ) + 1
    // console.log(randomcard);
    cardImg = document.createElement('img')
    cardImg.src = "assets/img/"+randomcard+".png"
    document.querySelector('.userCardImg').appendChild(cardImg)
    if (randomcard > 10) {
        return 10
    } else if (randomcard === 1){
        return 11
    } else {
        return randomcard    
    }
}

function botRandomCard(){
    let randomcard = Math.floor( Math.random() * 13 ) + 1
    // console.log(randomcard);
    cardImg = document.createElement('img')
    cardImg.src = "assets/img/"+randomcard+".png"
    document.querySelector('.botCardImg').appendChild(cardImg)
    if (randomcard > 10) {
        return 10
    } else if (randomcard === 1){
        return 11
    } else {
        return randomcard    
    }
}

function hit() {
    // console.log(cards);
    if(cards.length<3){
        cards.push(randomCard())
        // console.log(cards);
    }
    playerPoint.textContent = cards
    if (cards.length === 2){
        userPoint = cards [0] + cards [1]
        // console.log(userPoint);
        playerPoint.textContent = userPoint
    }else if (cards.length === 3){
        userPoint = cards [0] + cards [1] + cards [2]
        playerPoint.textContent = userPoint
    }
    if (userPoint === 21) {
        blackJack.textContent = "You Got BlackJack"
        document.querySelector('.black-jack').appendChild(blackJack)
    } 

    if (userPoint>21) {
        playerPoint.textContent = "Bust"
        document.getElementById('playerPoint').setAttribute('style','color:red')
    }
    // console.log(document.getElementById('stand'));
    document.getElementById('stand').setAttribute('onclick', 'botCard()')
}

function botCard() {
    document.getElementById('hit').removeAttribute('onclick')
    let firstCard = botRandomCard()
    let secondCard = botRandomCard()
    botCards = [firstCard, secondCard]
    botSum = firstCard + secondCard
    botPoint.textContent =  botSum
    // console.log(botCards);
    if (botSum <= 12) {
        let thirdCard = botRandomCard()
        botCards = [firstCard, secondCard, thirdCard]
        botSum = firstCard + secondCard + thirdCard
        botPoint.textContent = botSum
    }

    if (botSum > 21) {
        botPoint.textContent = "Bust"
        document.getElementById('botPoint').setAttribute('style','color:red')
    }

    document.getElementById('stand').removeAttribute('onclick')

    if(userPoint>botSum & userPoint<=21 || botSum>21){
        result.textContent = "You Won🥳"
        document.querySelector('.result').appendChild(result)
        document.querySelector('.result').setAttribute('style', 'color:green')
        let userWin = document.querySelector("#userWin").textContent
        userWin ++
        document.querySelector("#userWin").textContent = userWin
        // console.log(userWin);
       
    }else if(userPoint === botSum){
        result.textContent = "Tie 🤝"
        document.querySelector('.result').appendChild(result)
        document.querySelector('.result').setAttribute('style', 'color:gray')
        let draw = document.querySelector("#draw").textContent
        draw++
        document.querySelector("#draw").textContent = draw
        // console.log(draw);
    }else if(botSum>userPoint & botSum<=21 || userPoint>21){
        result.textContent = "You Lost🤯"
        document.querySelector('.result').appendChild(result)
        document.querySelector('.result').setAttribute('style', 'color:red')
        let botWin = document.querySelector("#botWin").textContent
        botWin++
        document.querySelector("#botWin").textContent = botWin
        // console.log(botWin);
    }
    document.getElementById('deal').setAttribute('onclick', 'restartGame()')
    // document.getElementById("deal").addEventListener("click", restartGame)
}

function startGame() {
    startBtn.remove()
    basic.remove()
    contents.removeAttribute('style')
}

function restartGame() {
    userPoint = 0
    botSum = 0
    document.querySelector('#playerPoint').textContent = userPoint
    document.querySelector('#botPoint').textContent = botSum
    cards = []
    botCards = []
    document.querySelector('.userCardImg').remove()
    document.querySelector('.botCardImg').remove()
    document.querySelector('.result').remove()
    blackJack.remove()
    document.getElementById('playerPoint').setAttribute('style','color:#fff')
    document.getElementById('botPoint').setAttribute('style','color:#fff')
    document.getElementById('deal').removeAttribute('onclick')
    restart()
}

function restart() {
    console.log(userPoint,botSum);
    let userDiv = document.createElement('div')
    userDiv.setAttribute('class', 'userCardImg')
    document.querySelector('.userImageDiv').appendChild(userDiv)
    document.getElementById('hit').setAttribute('onclick', 'hit()')
    let botDiv = document.createElement('div')
    botDiv.setAttribute('class', 'botCardImg')
    document.querySelector('.botImageDiv').appendChild(botDiv)
    let resultDiv = document.createElement('div')
    resultDiv.setAttribute('class', 'result')
    document.querySelector('.resultDiv').appendChild(resultDiv)
}