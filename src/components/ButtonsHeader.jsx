import React, { useEffect } from "react";

export const ButtonsHeader = ({ winner }) => {
  return (
    <>
      <div className="row container-mod-game">
        <div className="col">
          <div className="row">
            <div className="col-12 center">
              <div className="text-col1">Ganador de la partida</div>
            </div>
            <div className="col-12">
              {winner === "x" || winner === "o" ? (
                <span className="text-col1">Jugador: {winner}</span>
              ) : (
                <span className="text-col1">{winner}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
