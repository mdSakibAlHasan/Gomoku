import React, { useEffect, useState } from "react";
import "./board.css";
import { findBestMove } from "../Board/Minimax";
import { checkWinner } from "../Board/BoardLines";

// import { main } from '../Board/Move.js';
// import { AI_movement } from "../Board/Move.js";

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
    if (winner === "1" || winner == "0") {
      alert("match is finished");
      return;
    }

    let squares = [...cells];
    if (turn === "0") {
      squares[num] = "0";
      setCells(squares);
      setTurn("1");
    } else {
      squares[num] = "1";
      setTurn("0");
    }
    console.log(squares, " ------------ forntent");

    setCells(squares);
    setWinner(checkWinner(squares));

    // const cell = AI_movement(squares);
    // console.log(cell, "++++++++++++++++++ in the forntent after ai movement");
    // setCells(cell);

    // setTurn("1");
  };

  const Cell = ({ num }) => {
    const className = `c${cells[num]}`;
    return (
      <td onClick={() => handleClick(num)}>
        <div className={className} />
      </td>
    );
  };

  const handleRestart = () => {
    setWinner("");
    setCells(Array(row_count * col_count).fill(""));
    setTurn("0");
  };

  useEffect(() => {
    setTimeout(() => {
      if (turn === "1") {
        let squares = [...cells];
        let best = findBestMove(squares);
        handleClick(best);
        // if(score>=1000000){
        //   alert("AI win");
        // }else if(score<=-1000000){
        //   alert("You win");
        // }
      }
    }, 0);
  });

  var t = 0;

  return (
    <div className=" m-8 boardBG" style={{ height: "100vh" }}>
      {turn === "1" && winner === "" && (
        <b>
          <p>
            <h1 style={{marginTop:"10px" ,color:"#9cbed4"}}>
              <span class="red">Red</span>'s Turn!
            </h1>
          </p>
        </b>
      )}
      {turn === "0" && winner === "" && (
        <b>
          <h1 style={{marginTop:"10px" ,color:"#9cbed4"}} >
            <p>Your Turn!</p>
          </h1>
        </b>
      )}

      {winner === "1" && (
        <>
          <b className="mt-4 mb-3">
            <p>
              <h2 style={{marginTop:"10px" ,color:"#9cbed4"}}>
                <span class="red">Red</span> is the winner!
              </h2>
            </p>
          </b>
          <button class="btndd" onClick={() => handleRestart()}>
            Play Again
          </button>
        </>
      )}

      {winner === "0" && (
        <>
          <b className="mt-4 mb-3">
            <p>
              <h2 style={{marginTop:"10px" ,color:"#9cbed4"}} >
                Black is the winner!
              </h2>
            </p>
          </b>
          <button class="btndd" onClick={() => handleRestart()}>
            Play Again
          </button>
        </>
      )}

      <div className="container mt-5">
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

        {winner === "" && (
          <>
            <div className="container m-3">
              <button class="btndd mt-4" onClick={() => handleRestart()}>
                Restart Game
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
