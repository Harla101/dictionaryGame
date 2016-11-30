const fs = require('fs');
const randomNumber = require('./randomNumber');

/*difficulty:
  5   (very hard) = 15 words | 14 - 15 letters;
  4   12 - 14 words | 12 - 13
  3   10 - 12 words | 10 - 12
  2   7 - 10  words | 7- 9
  1   (very easy) = 5 - 6 words | 4 - 6 letters
*/

const difficultyObj = {
  5: {numWordsRange: [15, 15], lettersRange: [14, 15]},
  4: {numWordsRange: [12, 14], lettersRange: [12, 13]},
  3: {numWordsRange: [10, 12], lettersRange: [10, 12]},
  2: {numWordsRange: [7, 10], lettersRange: [7, 9]},
  1: {numWordsRange: [5, 6], lettersRange: [4, 6]},
}


// returns an array of strings, randomly selected depending on user difficulty selection
function wordsProvider(difficulty, callback) {
  fs.readFile('./words.txt', 'utf8', (err, data) => {
    let wordsArr = data.split('\n')
    let wordOptionsArr = [];

    let wordOptionsArrLength =
      randomNumber(difficultyObj[difficulty]['numWordsRange'][0],
        difficultyObj[difficulty]['numWordsRange'][1]);

    let wordLettersLength =
    randomNumber(difficultyObj[difficulty]['lettersRange'][0],
      difficultyObj[difficulty]['lettersRange'][1]);

    // grabs random word from word source, pushes into array if it matches the wordOptionsArrLength
    while(wordOptionsArr.length <=wordOptionsArrLength) {
      let randomWordOption = wordsArr[randomNumber(0, 172819)].replace(/^[\r\n]+|\.|[\r\n]+$/g, "")
      if(randomWordOption.length === wordLettersLength) {
        wordOptionsArr.push(randomWordOption);
      }
    }
     callback(wordOptionsArr);
  });
}

module.exports = wordsProvider;
