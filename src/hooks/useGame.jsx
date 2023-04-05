import { useState } from "react";

export const useGame = () => {
  const [board2, setBoard2] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState("");
  const [start, setStart] = useState(false);
  const [winnerExist, setWinnerExist] = useState(false);

  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getPos = (pos) => {
    if (!winnerExist && board2[pos] !== "x" && board2[pos] !== "o") {
      const machine = player === "x" ? "o" : player === "o" ? "x" : null;
      const arrayCopy = [...board2];
      let arrayMachine = [];
      arrayCopy[pos] = player;
      let playerWinner = checkWinner(arrayCopy);
      if (playerWinner) {
        setBoard2(arrayCopy);
        setWinner(playerWinner);
        setWinnerExist(true);
      } else {
        arrayCopy.forEach((element, index) => {
          if (element === "") {
            arrayMachine.push(index);
          } else if (element === "x" || element === "o") {
            return null;
          }
        });

        let numRandom = Math.floor(Math.random() * arrayMachine.length);
        let contador = 0;
        while (arrayCopy[numRandom] === "x" || arrayCopy[numRandom] === "o") {
          numRandom = randMachine(arrayCopy);
          contador++;
          if (arrayMachine.length === 1 || contador === 10) {
            break;
          }
        }

        arrayCopy[numRandom] = machine;
        setBoard2(arrayCopy);
        setStart(true);
        playerWinner = checkWinner(arrayCopy);
        if (playerWinner) {
          setWinner(playerWinner);
          setWinnerExist(true);
        }

        const gameContinue = gameCanContinue(arrayCopy);
        if (gameContinue === 0) {
          setWinner("Empate");
          setWinnerExist(true);
        }
      }
    }
  };

  const randMachine = (array) => {
    const numRandom = Math.floor(Math.random() * array.length);
    return numRandom;
  };

  const checkWinner = (arrayGame) => {
    let winner = null;
    winningMoves.forEach((element) => {
      const [a, b, c] = element;
      if (
        arrayGame[a] &&
        arrayGame[a] === arrayGame[b] &&
        arrayGame[a] === arrayGame[c]
      ) {
        winner = arrayGame[a];
      }
    });
    return winner;
  };

  const reset = () => {
    setBoard2(Array(9).fill(""));
    setPlayer("x");
    setWinner(null);
    setStart(false);
    setWinnerExist(false);
  };

  const changePlayer = (state) => {
    state ? setPlayer("o") : setPlayer("x");
  };

  const gameCanContinue = (array) => {
    let arrayParse = [];
    array.forEach((element, index) => {
      if (element === "") {
        arrayParse.push(index);
      } else if (element === "x" || element === "o") {
        return null;
      }
    });

    return arrayParse.length;
  };

  return {
    getPos,
    board2,
    start,
    reset,
    changePlayer,
    winner,
  };
};
