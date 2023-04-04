import { useState } from "react";
import { ButtonsFooter } from "./ButtonsFooter";
import { ButtonsHeader } from "./ButtonsHeader";
import { ButtonsChooseXO } from "./ButtonsChooseXO";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  //const winner = calculateWinner(board);

  return (
    <>
      <div className="container-principal">
        <ButtonsHeader />
        <div className="container-game ">
          <div className="container-tablero">
            <div className="row">
              <div className="square pos-0 col"></div>
              <div className="square pos-1 col"></div>
              <div className="square pos-2 col"></div>
            </div>
            <div className="row">
              <div className="square pos-3 col"></div>
              <div className="square pos-4 col"></div>
              <div className="square pos-5 col"></div>
            </div>
            <div className="row">
              <div className="square pos-6 col"></div>
              <div className="square pos-7 col"></div>
              <div className="square col"></div>
            </div>
          </div>
        </div>
        <ButtonsChooseXO />
      </div>
      <ButtonsFooter />
    </>
  );
};
