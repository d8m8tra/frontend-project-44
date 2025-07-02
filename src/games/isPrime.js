import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// простое ли число?
const isPrime = (number) => {
  if (number === 2) {
    return 'yes'
  }
  if (number < 2 || number % 2 === 0) {
    return 'no'
  }

  const finishValue = Math.sqrt(number)

  for (let startValue = 3; startValue <= finishValue; startValue += 1) {
    if (number % startValue === 0) {
      return 'no'
    }
  }
  return 'yes'
}
// вопрос юзеру и правильный ответ на вопрос
const usrQuestionAndCorrectAnsw = () => {
  const usrQuestion = randomNumber()
  const correctAnsw = isPrime(usrQuestion)

  return { usrQuestion, correctAnsw }
}

const primeGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default primeGame
