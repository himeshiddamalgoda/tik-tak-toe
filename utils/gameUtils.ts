import confetti from "canvas-confetti";

/**
 * Calculates the winner of the Tic Tac Toe game.
 * @param squares The current state of the board
 * @returns The winner ('X' or 'O') and the winning pattern, if any
 */
export const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningPattern: line };
    }
  }
  return null;
};

/**
 * Triggers confetti animation when a player wins.
 * @param winner The winning player ('X' or 'O')
 */
export const triggerConfetti = (winner: string) => {
  const confettiOptions = {
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors: winner === "X" ? ["#ff0000", "#ff4500"] : ["#0000ff", "#0080ff"],
  };

  confetti(confettiOptions);
};
