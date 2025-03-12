import Square from "./Square";

type BoardProps = {
  board: (string | null)[];
  onSquareClick: (index: number) => void;
  winningSquares: number[] | null;
};

const Board = ({ board, onSquareClick, winningSquares }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningSquares?.includes(index) ?? false}
        />
      ))}
    </div>
  );
};

export default Board;
