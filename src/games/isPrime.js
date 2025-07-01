import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = '"yes" if given number is prime. Otherwise answer "no".'

// простое ли число?
const isPrime = (number) => {
  let result = ''

  if (number < 2) {
    result = 'no'
  }
  else if (number === 2) {
    result = 'yes'
  }
  else if (number % 2 === 0) {
    result = 'no'
  }
  else {
    result = 'yes'
  }

  let startValue = 3
  let finishValue = Math.sqrt(number)

  for (startValue = 3; startValue <= finishValue; startValue += 1) {
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
  console.log('correct answer for test = ' + correctAnsw)

  return { usrQuestion, correctAnsw }
}

const primeGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default primeGame
