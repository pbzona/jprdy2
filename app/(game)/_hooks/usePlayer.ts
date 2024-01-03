import { useContext } from 'react';
import { PlayerList, PlayersContext } from '../_context/players-context';
import { Player } from '../_context/player';

export const usePlayerList = (): PlayerList => {
  return useContext(PlayersContext);
};

export const usePlayer = (key: string): Player | undefined => {
  const players = useContext(PlayersContext);
  return players.getPlayer(key);
};
