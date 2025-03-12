type SquareProps = {
    value: string | null;
    onClick: () => void;
    isWinning: boolean;
  };
  
  const Square = ({ value, onClick, isWinning }: SquareProps) => {
    let textColor = "text-gray-300";
    let glowEffect = "";
  
    if (value === "X") {
      textColor = "text-red-500";
      glowEffect = "drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]";
    } else if (value === "O") {
      textColor = "text-blue-500";
      glowEffect = "drop-shadow-[0_0_10px_rgba(0,0,255,0.8)]";
    }
  
    if (isWinning) {
      textColor = "text-green-500";
      glowEffect = "drop-shadow-[0_0_15px_rgba(0,255,0,1)] animate-pulse";
    }
  
    return (
      <button
        className={`w-24 h-24 flex items-center justify-center text-4xl font-bold border border-gray-500 bg-black 
        ${textColor} ${glowEffect} transition-all duration-200 hover:bg-gray-800 active:scale-95`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  };
  
  export default Square;
  