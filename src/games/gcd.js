import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'Find the greatest common divisor of given numbers.'

// вопрос юзеру и правильный ответ
const usrQuestionAndCorrectAnsw = () => {
  let correctAnsw = 0
  let firstNumber = randomNumber() + 1
  let secondNumber = randomNumber() + 1
  let usrQuestion = `${firstNumber} ${secondNumber}`

  while (secondNumber !== 0) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber % secondNumber]
    if (secondNumber === 0) {
      correctAnsw = firstNumber
    }
  }

  return { correctAnsw, usrQuestion }
}

const gcdGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default gcdGame
