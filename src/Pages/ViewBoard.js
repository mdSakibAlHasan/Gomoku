import React, { useEffect, useState } from "react";
import "./board.css";
// import { main } from '../Board/Move.js';
import { AI_movement } from "../Board/Move.js";

const Board = () => {
  const row_count = 10;
  const col_count = 10;

  const [turn, setTurn] = useState("0");
  const [cells, setCells] = useState(Array(row_count * col_count).fill(""));
  const [winner, setWinner] = useState("");

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let squares = [...cells];

    squares[num] = "0";
    setCells(squares);
    setTurn("1");
   
    console.log(squares, " ------------ forntent");

    setCells(squares);
    const cell = AI_movement(squares);
    console.log(cell, "++++++++++++++++++ in the forntent after ai movement");
    setCells(cell);

    setTurn("1");
  };

  const Cell = ({ num }) => {
	const className = `c${cells[num]}`;
    return (
      <td onClick={() => handleClick(num)}>
        <div className={className} />
      </td>
    );
  };

  const handleRestart = () =>{
    setWinner('');
		setCells(Array(row_count*col_count).fill(''));
		setTurn('0');
  }

  useEffect(() => {
    setTimeout(() => {
      if (turn === "1") {
        let squares = [...cells];
      }
    }, 0);
  });

  var t = 0;

  return (
    <div className="container m-8">
    <div className="container mt-5">
      {turn === "1" && (
        <b>
          <p>
            <span class="red">Red</span>'s Turn!
          </p>
        </b>
      )}
      {turn === "0" && (
        <b>
          <p>Your Turn!</p>
        </b>
      )}
      <table className="box">
        <tbody>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
          <tr>
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
            <Cell num={t++} />
          </tr>
        </tbody>
      </table>
    </div>
      <div className="container m-3">
        <button class="btndd mt-4" onClick={() => handleRestart()}>Restart Game</button>
      </div>
    </div>
  );
};

export default Board;
