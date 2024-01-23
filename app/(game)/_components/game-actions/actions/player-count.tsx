import { useGameStore } from '@game/_store/game-store';
import React from 'react';

export const PlayerCount = () => {
  const activePlayerCount = useGameStore.use.activePlayerCount();
  const addPlayer = useGameStore.use.addPlayer();
  const removePlayer = useGameStore.use.removePlayer();

  const handleRemovePlayer = () => {
    removePlayer();
    console.log(activePlayerCount);
  };

  const handleAddPlayer = () => {
    addPlayer();
    console.log(activePlayerCount);
  };

  return (
    <div className="flex flex-row justify-center text-primary">
      <button
        type="button"
        name="Remove player"
        className="btn btn-sm btn-ghost disabled:text-muted disabled:bg-transparent p-1 text-xs translate-x-2 text-gray -scale-x-100 focus:-scale-x-100 active:-scale-x-100 active:focus:-scale-x-100 hover:active:-scale-x-100"
        onClick={handleRemovePlayer}
        disabled={activePlayerCount <= 1}
      >
        &#x27A4;
      </button>
      <div className="text-center">
        <div className="text-md font-bold">{activePlayerCount}</div>
        <div className="text-[0.6em] uppercase font-bold">
          Player<span className={activePlayerCount > 1 ? '' : 'opacity-0'}>s</span>
        </div>
      </div>
      <button
        type="button"
        name="Add player"
        className="btn btn-sm btn-ghost disabled:text-muted disabled:bg-transparent p-1 text-xs -translate-x-2 text-gray scale-x-100 focus:scale-x-100 active:scale-x-100 active:focus:scale-x-100 hover:active:scale-x-100"
        onClick={handleAddPlayer}
        disabled={activePlayerCount >= 3}
      >
        &#x27A4;
      </button>
    </div>
  );
};
