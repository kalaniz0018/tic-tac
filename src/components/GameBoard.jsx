import React from "react";

const initialGameBorad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <>
      <ol id="game-board">
        {initialGameBorad.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};

export default GameBoard;
