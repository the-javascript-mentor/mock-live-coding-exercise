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
