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

// Let's calculate the sum of all the turns in the playerTurns array
const calculateOverallScoreOfPlayer = (playerTurns) => {
  return playerTurns.flat().reduce((a, b) => a + b, 0);
};

// If this is the first or second roll in the turn
// or if this is the third roll in the turn
// but the first and the second rolls were the same
const doesTurnContinue = (turn) => {
  return turn.length <= 1 || (turn.length === 2 && turn[0] === turn[1]);
};

// If there are already 3 rolls in the turn,
// or if there are two rolls, but they are different
const didTurnEnd = (turn) => {
  return turn.length === 3 || (turn.length === 2 && turn[0] !== turn[1]);
};

const diceGame = (rollsArray) => {
  const player1 = [];
  const player2 = [];
  let activeTurn = [];

  // We start with player 1
  let activePlayer = player1;

  // We go through each individual die roll
  rollsArray.forEach((roll) => {
    if (doesTurnContinue(activeTurn)) {
      activeTurn.push(roll);
    }
    // If this is the end of the turn
    if (didTurnEnd(activeTurn)) {
      // Save the turn in the player's turns array
      activePlayer.push(activeTurn);
      // Clear the active turn
      activeTurn = [];
      // Switch to the other player
      activePlayer = activePlayer === player1 ? player2 : player1;
    }
  });

  // Calculate the overall score of both players
  const player1score = calculateOverallScoreOfPlayer(player1);
  const player2score = calculateOverallScoreOfPlayer(player2);

  // Return the score of both players
  return [player1score, player2score];
};

module.exports = diceGame;
