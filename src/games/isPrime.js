import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// простое ли число?
const isPrime = (number) => {
  let result = ''

  if (number === 2) {
    result = 'yes'
  }
  else if (number < 2 || number % 2 === 0) {
    result = 'no'
  }
  else {
    result = 'yes'
  }

  let finishValue = Math.sqrt(number)

  for (let startValue = 3; startValue <= finishValue; startValue += 1) {
    if (number % startValue === 0) {
      result = 'no'
    }
  }

  return result
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
