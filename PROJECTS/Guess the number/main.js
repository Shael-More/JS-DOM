let randomNum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess) 
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert("please enter a valid number")
    } else if (guess > 100) {
        alert('please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over.  Random number was ${randomNum}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guesses it right`)
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNum) {
        displayMessage(`Number is tooo high`)
    }

}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++; 
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>` 
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')

    newGameBtn.addEventListener('click', function(e) {
        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        playGame = true

    })
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}