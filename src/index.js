import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let game1 

window.addEventListener('keypress',(e) => {
    const guess = e.key
    //const guess = String.fromCharCode(e.keyCode)
    game1.makeAGuess(guess)
    render()
})

const render = () => {
    //puzzleEl.textContent = game1.puzzle
    puzzleEl.innerHTML = ''
    guessEl.textContent = game1.statusMessage

    const word = game1.puzzle.split('')
    word.forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
       puzzleEl.appendChild(letterEl)
    });
    
    
}
const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()
