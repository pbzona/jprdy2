import { useContext } from "react";
import { GameContext } from "../_context/game-context";

export const useGame = () => useContext(GameContext);
