class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }     
    }
    get statusMessage() {
        if (this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses} `
        } else if (this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (letter === ' ') {
                puzzle += ' '
            } else if (this.guessedLetters.includes(letter)) {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    makeAGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(this.status !== 'Playing') {
            return
        }
    
        if(isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses-- //decrease by 1
        }   
        this.calculateStatus()
    }
}

export { Hangman as default }
