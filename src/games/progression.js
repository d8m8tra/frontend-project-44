import randomNumber from '../rnd.js'
import startGame from '../index.js'

// правила игры
const textForGame = 'What number is missing in the progression?'

// вопрос юзеру и правильный ответ
const usrQuestionAndCorrectAnsw = () => {
  let firstNumberArr = Math.round(randomNumber() / 4)
  let stepForProgression = Math.round(randomNumber() / 20)
  const myArray = []

  for (let i = 0; i < 10; i += 1) {
    if (stepForProgression === 0) {
      stepForProgression += 1
    }
    myArray[0] = firstNumberArr
    myArray[i] = stepForProgression + myArray[i - 1]
  }

  let rndIndexForHide = Math.floor(Math.random() * (myArray.length - 1))
  let correctAnsw = myArray[rndIndexForHide]
  myArray[rndIndexForHide] = '..'
  let usrQuestion = myArray.join(' ')

  return { usrQuestion, correctAnsw }
}

const progressionGame = () => {
  startGame(textForGame, usrQuestionAndCorrectAnsw)
}

export default progressionGame
