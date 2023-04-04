import { useState } from "react";
import {
  ButtonsFooter,
  ButtonsHeader,
  ButtonsChooseXO,
  ContainerGame,
} from "./index";
import { useGame } from "../hooks/useGame";

export const Game = () => {
  const { getPos, board2, start, reset, changePlayer } = useGame();

  return (
    <>
      <div className="container-principal">
        <ButtonsHeader start={start} />
        <ContainerGame getPos={getPos} board2={board2} />
        <ButtonsChooseXO start={start} changePlayer={changePlayer} />
      </div>
      <ButtonsFooter reset={reset} />
    </>
  );
};
