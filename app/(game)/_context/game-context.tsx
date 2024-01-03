import { createContext, PropsWithChildren } from "react";
import { Game } from "./game";

const game = new Game();

export const GameContext = createContext<Game>(game);

export const GameProvider = (props: PropsWithChildren<{}>) => {
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
};
