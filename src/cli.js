import readlineSync from 'readline-sync'

export default (getName) => {
    let userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}
