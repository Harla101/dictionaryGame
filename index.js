const wordsProvider = require('./operations/wordsProvider'); // @param {Number, callback}
const wordMatching = require('./operations/wordMatching'); // @param {String, String}
const randomNumber = require('./operations/randomNumber'); // @param {Number, Number}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// guessCounter for number of remaining guesses
let guessCounter = 4;
// password to be guessed by user, instantiated once user selects difficulty level
let password;
let passwordLength;
let wordOptionsArr;

//used to populate game constraints after user selects difficulty
function gameInitialization(data) {
  wordOptionsArr = data;
  passwordLength = data[0].length;
  password = wordOptionsArr[randomNumber(0, passwordLength)].toUpperCase();
  console.log(wordOptionsArr)
}

// checks whether answer given is winning or losing, calls itself recursively
function conditionChecker(answer) {
  if(answer.toUpperCase() === password) {
    console.log('you win!');
    rl.close;
  } else if(guessCounter <= 0) {
    console.log(`you lose, the password was ${password}`);
    rl.close;
  } else {
    console.log(`${wordMatching(answer, password)}/${passwordLength} correct`)
    guessCounter -= 1;
    rl.question(`Guess (${guessCounter} left)? `, (answer) => {
      conditionChecker(answer);
    });
  }
}

rl.question('Please Select Difficulty: 1 (easy) - 5 (very hard)', (answer) => {
  wordsProvider(answer, gameInitialization)
  //initial question prompt to start recursive calls of conditionChecker
  rl.question(`Guess (${guessCounter} left)? `, (answer) => {
    conditionChecker(answer);
  });
});
