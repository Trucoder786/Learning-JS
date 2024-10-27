let randomNumber = (parseInt(Math.random()*100+1))
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParam')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        valideGuess(guess)
    });
}

function valideGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter the valid Number")
    }else if(guess<1){
        alert("Please Enter the valid Number")
    }else if(guess>100){
        alert("Please Enter the Number who is less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over, Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed It right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess>randomNumber){
        displayGuess(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(guess){
    const newGameButton = document.querySelector('#newGame')
    newGame.addEventListener('click',function(e){
        randomNumber = (parseInt(Math.random()*100+1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = false
    })
}

function endGame(guess){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


