import { PropsWithChildren, createContext } from 'react';
import { PlayerList } from './player-list';

const playerList = new PlayerList();

export const PlayersContext = createContext<PlayerList>(playerList);

export const PlayersProvider = (props: PropsWithChildren<{}>) => (
  <PlayersContext.Provider value={playerList}>{props.children}</PlayersContext.Provider>
);
