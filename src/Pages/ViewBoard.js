import React, { useState } from "react";
// import "./styles.css";

const Board = () => {
  const [board, setBoard] = useState(Array(100).fill(null));

  const handleClick = (i) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[i] = "X";
      return newBoard;
    });
  };

  return (
    <div className="board">
      {board.map((square, i) => (
        <div key={i} className="square" onClick={() => handleClick(i)}>
          {square}
        </div>
      ))}
    </div>
  );
};

export default Board;