# Mock live coding exercise

A mock live coding exercise to help you prepare for job interviews.


## The exercise

There is a simple they play with dice.

There are two players. The game consists of turns. In each turn, the player rolls two dice. If the two numbers are different, then the turn is over and the next player continues. If the two numbers are the same, the player can roll again with one die before the turn ends.

At the end of the game, each player's score is the sum of all their dice rolls.

You have to write a JavaScript function that takes an array of individual dice rolls, and returns an array of two numbers with the score of the two players.

For example:

```js
diceGame([1,2,3,4,5,6,1,2,3,4,5,6]); // [21, 21]

diceGame([1,1,2,3,3,4,1,2,3,4]); // [7, 17]

diceGame([1,2,2,3,3,4,5,6]); // [10, 16]

diceGame([1,2,2,2,3,3,4,5,6]) // [10, 18]
```
