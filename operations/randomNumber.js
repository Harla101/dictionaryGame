//returns a random number between min and max integer values
function randomNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

module.exports = randomNumber
