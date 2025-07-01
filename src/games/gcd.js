import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'Find the greatest common divisor of given numbers.'

// вопрос юзеру и правильный ответ
const usrQuestionAndCorrectAnsw = () => {
  let correctAnsw = 0
  let firstNumber = randomNumber()
  let secondNumber = randomNumber()
  let usrQuestion = `${firstNumber} ${secondNumber}`

  if (secondNumber === 0) {
    correctAnsw = firstNumber
  }
  else {
    while (secondNumber !== 0) {
      [firstNumber, secondNumber] = [secondNumber, firstNumber % secondNumber]
    }
    correctAnsw = firstNumber
  }

  return { correctAnsw, usrQuestion }
}

const gcdGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default gcdGame
