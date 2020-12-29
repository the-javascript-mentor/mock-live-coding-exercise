// There is a simple they play with dice.

// There are two players. The game consists of turns.
// In each turn, the player rolls two dice. If the two
// numbers are different, then the turn is over and the
// next player continues. If the two numbers are the same,
// the player can roll again with one die before the turn ends.

// At the end of the game, each player's score is the sum
// of all their dice rolls.

// You have to write a JavaScript function that takes
// an array of individual dice rolls, and returns an array
// of two numbers with the score of the two players.

// [1, 2, 3, 4, 1, 2, 3, 3, 4, 1, 2]

const diceGame = (rollsArray) => {
  const player1 = [];
  const player2 = [];
  let activeTurn = [];

  let activePlayer = 1;
  rollsArray.forEach((roll) => {
    if (activeTurn.length <= 1) {
      activeTurn.push(roll);
    } else if (activeTurn.length === 2 && activeTurn[0] === activeTurn[1]) {
      activeTurn.push(roll);
    }
    if (
      activeTurn.length === 3 ||
      (activeTurn.length === 2 && activeTurn[0] !== activeTurn[1])
    ) {
      if (activePlayer === 1) {
        player1.push(activeTurn);
      } else if (activePlayer === 2) {
        player2.push(activeTurn);
      }

      activeTurn = [];

      if (activePlayer === 1) {
        activePlayer = 2;
      } else if (activePlayer === 2) {
        activePlayer = 1;
      }
    }
  });

  return [
    player1.flat().reduce((a, b) => a + b, 0),
    player2.flat().reduce((a, b) => a + b, 0)
  ];
};

export default diceGame;
