"use client";

import { useState } from "react";
import GameBoard from "./GameBoard";
import { calculateWinner, triggerConfetti } from "@/utils/gameUtils";

const TicTacToe = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null)); // State to hold the game board, initial state is an array of 9 null values (empty spaces)
  const [isXNext, setIsXNext] = useState(true); // State to track which player's turn it is, true for "X" and false for "O"
  const [winner, setWinner] = useState<string | null>(null); // State to track the winner, initially null as no one has won yet

  // Function to handle a player's move when they click a square
  const handleClick = (index: number) => {
    if (board[index] || winner) return;// Ignore if the square is already filled or if there's a winner
    // Create a new copy of the board and update the clicked square with the current player's mark ("X" or "O")
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    // Update the board state with the new board and toggle the turn to the next player
    setBoard(newBoard);
    setIsXNext(!isXNext);
    // Check if there is a winner after the move
    const result = calculateWinner(newBoard as string[]);
    if (result) {
      // Set the winner and trigger confetti animation
      setWinner(result.winner);
      triggerConfetti(result.winner);
    }
  };

  // Function to reset the game to its initial state
  const handleReset = () => {
    setBoard(Array(9).fill(null)); // Reset the board to empty
    setIsXNext(true); // Set the first player as "X"
    setWinner(null); // Clear the winner
  };

  // Calculate the winner (if any) from the current board state
  const winningResult = calculateWinner(board as string[]);
  const winningPattern = winningResult?.winningPattern || []; // Get the pattern of winning squares (if any)

  // Status message to display information about the game
  const status = winner
    ? `🎉 Player ${winner} Wins! 🎉` // Show the winner message if there's a winner
    : board.every((cell) => cell)
    ? "Game Drawn!" // If all squares are filled and no winner, it's a draw
    : `Next Player: ${isXNext ? "X" : "O"}`; // Display the next player's turn

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Game title */}
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Tic Tac Toe
      </h1>

      {/* Status Message */}
      <div className="mb-4 text-2xl font-bold text-amber-400 drop-shadow-[0px_0px_10px_rgba(255,215,0,0.8)]">
        {status}
      </div>

      {/* Game board component, passing the current board and handling the square clicks */}
      <GameBoard
        board={board}
        onSquareClick={handleClick}
        winningPattern={winningPattern}
      />

      {/* Reset button to start a new game */}
      <button
        className="mt-6 px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white 
        shadow-lg shadow-pink-500/50 transition-all duration-300 
        hover:scale-105 hover:shadow-purple-500/50 
        active:scale-95 active:shadow-none animate-pulse"
        onClick={handleReset}
      >
        🔄 Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
