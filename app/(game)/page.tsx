'use client';

import React from 'react';
import PlayerPanel from './_components/player-panel';
import QuestionValueButtons from './_components/question-value-buttons';
import { GameContext } from './_context/game-context';
import { useGame } from './_hooks/useGame';
import { usePlayer, usePlayerList } from './_hooks/usePlayer';
import { PlayersContext } from './_context/players-context';

const GamePage = () => {
  const game = useGame();
  const players = usePlayerList();

  return (
    <GameContext.Provider value={game}>
      <PlayersContext.Provider value={players}>
        <main className="w-full lg:w-[1000px] xl:w-[90%] mx-auto">
          <div className="text-center mx-auto mt-4 lg:mt-8">
            <QuestionValueButtons />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-8 p-2 sm:p-0">
            <PlayerPanel />
            <PlayerPanel />
            <PlayerPanel />
          </div>
        </main>
      </PlayersContext.Provider>
    </GameContext.Provider>
  );
};

export default GamePage;
