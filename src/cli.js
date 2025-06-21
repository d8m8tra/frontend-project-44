import readlineSync from 'readline-sync'

const getName = () => {
  let userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)

  return userName
}

const userName = getName() // Вызов функции и сохранение значения в переменной

export { userName }
export default getName
