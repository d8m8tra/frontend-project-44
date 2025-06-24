import readlineSync from 'readline-sync'

const evenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let count = 0; count < 3; count += 1) {
    let randomNumber = Math.floor(Math.random() * 100)

    const isEven = () => {
      let result = (randomNumber % 2 === 0) ? 'yes' : 'no'

      return result
    }

    let trueAnswer = isEven()

    console.log(`Question: ${randomNumber}`)
    let userAnswer = readlineSync.question('You answer: ')

    if (userAnswer === 'yes' && isEven() === 'yes') {
      console.log('Correct!')
    }
    else if (userAnswer === 'no' && isEven() === 'no') {
      console.log('Correct!')
    }
    else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`)
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default evenGame
