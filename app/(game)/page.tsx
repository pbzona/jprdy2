"use client";

import React from "react";
import PlayerPanel from "./_components/player-panel";
import QuestionValueButtons from "./_components/question-value-buttons";
import { GameProvider } from "./_context/game-context";
import { PlayersProvider } from "./_context/players-context";

const GamePage = () => {
  return (
    <GameProvider>
      <PlayersProvider>
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
      </PlayersProvider>
    </GameProvider>
  );
};

export default GamePage;
