import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'Answer "yes" if the number is even, otherwise answer "no".'

// проверка на четность
const isEven = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return true
  }
}

// вопрос юзеру и правильный ответ на вопрос
const usrQuestionAndCorrectAnsw = () => {
  const usrQuestion = randomNumber()
  const correctAnsw = isEven(usrQuestion) === true ? 'yes' : 'no'

  return { usrQuestion, correctAnsw }
}

const evenGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default evenGame
