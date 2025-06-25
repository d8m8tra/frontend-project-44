import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'What is the result of the expression?'

// вопрос юзеру и правильный ответ
const usrQuestionAndCorrectAnsw = () => {
  let correctAnsw = 0
  let usrQuestion = ''
  let firstNumber = randomNumber()
  let secondNumber = randomNumber()
  let randomNbr = randomNumber()

  switch (true) {
    case (randomNbr < 35):
      correctAnsw = firstNumber + secondNumber
      usrQuestion = `${firstNumber} + ${secondNumber}`

      return { correctAnsw, usrQuestion }

    case (randomNbr > 35 && randomNbr < 70):
      correctAnsw = firstNumber - secondNumber
      usrQuestion = `${firstNumber} - ${secondNumber}`

      return { correctAnsw, usrQuestion }

    default:
      correctAnsw = firstNumber * secondNumber
      usrQuestion = `${firstNumber} * ${secondNumber}`

      return { correctAnsw, usrQuestion }
  }
}

const calcGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default calcGame
