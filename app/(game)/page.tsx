'use client';

import React from 'react';
import PlayerPanel from './_components/player/player-panel';
import QuestionValueButtons from './_components/question-value-buttons';

const GamePage = () => {
  return (
    <main className="w-full lg:w-[1000px] xl:w-[90%] mx-auto">
      <div className="text-center mx-auto mt-4 lg:mt-8">
        <QuestionValueButtons />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-8 p-2 sm:p-0">
        <PlayerPanel playerIndex={0} />
        <PlayerPanel playerIndex={1} />
        <PlayerPanel playerIndex={2} />
      </div>
    </main>
  );
};

export default GamePage;
