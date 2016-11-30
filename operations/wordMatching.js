/* input is two strings, compares both to each other and returns the number
of matching character positions as INT
*/

function wordMatching(firstWord, secondWord) {
  let matchingCounter = 0;
  if(firstWord === secondWord) {
    return firstWord.length;
  } else {
    for(let i = 0; i < firstWord.length; i += 1 ) {
      if(firstWord.charAt(i) === secondWord.charAt(i)) {
        matchingCounter += 1;
      }
    }
  }
  return matchingCounter;
}

module.exports = wordMatching;
