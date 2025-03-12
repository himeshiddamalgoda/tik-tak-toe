import Square from "./Square";

interface GameBoardProps {
  board: (string | null)[];
  onSquareClick: (index: number) => void;
  winningPattern: number[];
}

const GameBoard = ({ board, onSquareClick, winningPattern }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningPattern.includes(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
