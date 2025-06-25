import readlineSync from 'readline-sync'

const startGame = (textForGame, usrQuestionAndCorrectAnsw) => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  console.log(textForGame)

  for (let roundCount = 0; roundCount < 3; roundCount += 1) {
    const { usrQuestion, correctAnsw } = usrQuestionAndCorrectAnsw()
    console.log(`Question: ${usrQuestion}`)

    const userAnswer = readlineSync.question('You answer: ')

    if (String(userAnswer) === String(correctAnsw)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default startGame
