The popular video games Fallout 3 and Fallout: New Vegas have a computer "hacking" minigame where the player must correctly guess the correct password from a list of same-length words. Your challenge is to implement this game yourself.

The game operates similarly to the classic board game Mastermind. The player has only 4 guesses and on each incorrect guess the computer will indicate how many letter positions are correct.

For example, if the password is MIND and the player guesses MEND, the game will indicate that 3 out of 4 positions are correct (M_ND). If the password is COMPUTE and the player guesses PLAYFUL, the game will report 0/7. While some of the letters match, they're in the wrong position.

Ask the player for a difficulty (very easy, easy, average, hard, very hard), then present the player with 5 to 15 words of the same length. The length can be 4 to 15 letters. More words and letters make for a harder puzzle. The player then has 4 guesses, and on each incorrect guess indicate the number of correct positions.

Here's an example game:

```
Difficulty (1-5)? 3

  SCORPION
  FLOGGING
  CROPPERS
  MIGRAINE
  FOOTNOTE
  REFINERY
  VAULTING
  VICARAGE
  PROTRACT
  DESCENTS

Guess (4 left)? migraine
  0/8 correct
Guess (3 left)? protract
  2/8 correct
Guess (2 left)? croppers
  8/8 correct
You win!
```

Your program should completely ignore case when making the position checks.


NOTES:

difficulty:
  5   (very hard) = 15 words | 14 - 15 letters;
  4   12 - 14 words | 12 - 13
  3   10 - 12 words | 10 - 12
  2   7 - 10  words | 7- 9
  1   (very easy) = 5 - 6 words | 4 - 6 letters

Matching:
  -user input
  -check if user input is among the list of options
  - if user input === password; return winner
  - else
    -matching characters variable instantiated at 0;
    -iterate through user input (charAt(i))
    * Case ignored
    - if charAt(i) of userinput matches charAt(i) of password,
    increment matching characters variable;
    - return number of matches as string
    - decremebt remaining guesses available
Counting:
  variable instantiated at 4 (guesses);
  for each wrong matcing, decrement by 1
  if variable is less than 0, end game and 'you lose'

UI:
  * via terminal?
  * front end


User Experience:
- Request difficulty ( 1 - 5 )
- return list of words corresponding to difficulty level
  * words MUST be same length
  * words MUST be unique
- store random word as the password
- request user input for word choice
- return INT of matching letters (2/8 correct) and INT of guesses remaining out of 4 (2 left)
  - guesses remaining decreases
- CONDITIONS:
  * if word matches, winner (you win!)
  * if count < 0, loser (you lose!)
