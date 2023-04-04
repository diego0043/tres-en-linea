import { useState } from "react";

export const useGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [board2, setBoard2] = useState(Array(9).fill(""));
  const [board3, setBoard3] = useState(Array(9).fill(""));
  const [numGames, setNumGames] = useState(3);
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState(null);
  const [start, setStart] = useState(false);

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
    const machine = player === "x" ? "o" : player === "o" ? "x" : null;
    const arrayCopy = [...board2];
    let arrayMachine = [];
    arrayCopy[pos] = player;

    arrayCopy.forEach((element, index) => {
        if (element != "x" && element != "o") {
            arrayMachine.push(index);
        }
    });

    const numRandom = Math.floor(Math.random() * arrayMachine.length);
    arrayCopy[numRandom]  = machine;
    setBoard2(arrayCopy);



    //console.log(arrayMachine, arrayCopy);

    /* setBoard2(arrayCopy);
    const randon = movingMachine();
    randMachine(randon);
    setStart(true); */
  };

  const randMachine = ( pos ) => {
    const machine = player === "x" ? "o" : player === "o" ? "x" : null;
    const arrayCopy = [...board2];
    arrayCopy[pos] = machine;
    setBoard2(arrayCopy);
  }

  const reset = () => {
    setBoard(Array(9).fill(null));
    setBoard2(Array(9).fill(""));
    setNumGames(3);
    setPlayer("x");
    setWinner(null);
    setStart(false);
  };

  const changePlayer = (state) => {
    state ? setPlayer("o") : setPlayer("x");
  };

  const movingMachine = () => {
    let arrayTest = [];
    board2.forEach((element, index) => {
        if ( element === ""){
            arrayTest.push(index)
        }
    });

    
    let random = Math.floor(Math.random() * arrayTest.length);
    return arrayTest[random];
  };    

  return {
    getPos,
    board2,
    start,
    reset,
    changePlayer,
  };
};
