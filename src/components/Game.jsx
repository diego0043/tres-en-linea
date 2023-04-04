import { useState } from "react";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  //const winner = calculateWinner(board);

  return (
    <div className="container-game ">
      <div className="container-tablero">
        <div className="row">
          <div className="square col"></div>
          <div className="square col"></div>
          <div className="square col"></div>
        </div>
        <div className="row">
          <div className="square col"></div>
          <div className="square col"></div>
          <div className="square col"></div>
        </div>
        <div className="row">
          <div className="square col"></div>
          <div className="square col"></div>
          <div className="square col"></div>
        </div>
      </div>
      <div className="row container-cards">
        <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 container-x-o shadow">
          <div className="row">
            <div className="col">
              <span className="text-card2">Jugar con: O</span>
            </div>
            <div class="form-check form-switch col">
              <input
                class="form-check-input input-switch"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div className="col">
              <span className="text-card2">Jugar con: X</span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-5 col-sm-12 container-x-o shadow">
          <div className="row">
            <div className="col-12">
              <span className="text-card2">Turno de: </span>
            </div>
            <div className="col-12">
              <span className="text-card2">Ganador: </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
