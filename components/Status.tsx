type StatusProps = {
    status: string;
  };
  
  const Status = ({ status }: StatusProps) => {
    return (
      <div className={`text-2xl font-bold bg-gradient-to-r from-cyan-500 via-amber-600 to-amber-300 bg-clip-text text-transparent drop-shadow-md 
        ${status.includes("Winner") || status.includes("draw") ? "animate-pulse" : ""}
      `}>
        {status}
      </div>
    );
  };
  
  export default Status;
  