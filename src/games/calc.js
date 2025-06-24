import readlineSync from 'readline-sync'

const calc = (userName) => {
  console.log('What is the result of the expression?')

  for (let count = 0; count < 3; count += 1) {
    let randomNumber = Math.random()
    let firstNumber = Math.floor(Math.random() * 100)
    let secondNumber = Math.floor(Math.random() * 100)
    let resultOfExpression = 0
    let textForQuestion = ''

    switch (true) {
      case (randomNumber < 0.35):
        resultOfExpression = firstNumber + secondNumber
        textForQuestion = `${firstNumber} + ${secondNumber}`
        break
      case (randomNumber > 0.35 && randomNumber < 0.7):
        resultOfExpression = firstNumber - secondNumber
        textForQuestion = `${firstNumber} - ${secondNumber}`
        break
      default:
        resultOfExpression = firstNumber * secondNumber
        textForQuestion = `${firstNumber} * ${secondNumber}`
        break
    }

    console.log(`Question: ${textForQuestion}`)
    let userAnswer = readlineSync.questionInt('You answer: ')

    if (userAnswer === resultOfExpression) {
      console.log('Correct!')
    }
    else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${resultOfExpression}'.`)
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default calc
