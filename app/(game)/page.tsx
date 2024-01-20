'use client';

import React from 'react';
import PlayerPanel from './_components/player/player-panel';
import QuestionValueButtons from './_components/question-value-buttons';
import { GameActionList } from './_components/game-actions/game-action-list';

const GamePage = () => {
  return (
    <>
      <main className="w-full">
        <div className="w-full lg:w-[1000px] xl:w-[90%] mx-auto">
          <div className="text-center mx-auto mt-4 lg:mt-8">
            <QuestionValueButtons />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-8 p-2 sm:p-0 mb-8">
            <PlayerPanel playerIndex={0} />
            <PlayerPanel playerIndex={1} />
            <PlayerPanel playerIndex={2} />
          </div>
        </div>
      </main>
      <section className="absolute bottom-0 w-full">
        <GameActionList />
      </section>
    </>
  );
};

export default GamePage;
