'use client';

import React, { useState } from 'react';
import { CorrectIcon } from './icons/correct';
import { IncorrectIcon } from './icons/incorrect';

const PlayerPanel = () => {
  const [playerScore, setPlayerScore] = useState<number>(0);

  const handleScoreChange = (wasCorrect: boolean) => {
    if (wasCorrect) setPlayerScore(playerScore + 100);
    else setPlayerScore(playerScore - 100);
  };

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-[320px] min-h-[300px] lg:min-h-[320px] xl:min-h-[360px] m-2 flex flex-col flex-none xl:flex-1 space-y-1 border-blue-lightest border-4 rounded-md p-1">
      <div className="flex justify-center items-center bg-blue rounded py-2">
        <h3 className="text-lg text-white">
          $<span>{playerScore}</span>
        </h3>
      </div>
      <div className="flex justify-center items-center bg-blue py-8 rounded flex-1">
        <h3 className="text-xl text-white">Name</h3>
      </div>
      <div className="w-full flex rounded overflow-hidden">
        <button
          className="flex-1 flex justify-center bg-gray-light hover:bg-green/20 text-green text-lg p-1"
          onClick={() => handleScoreChange(true)}
        >
          <CorrectIcon />
        </button>
        <button
          className="flex-1 flex justify-center bg-gray-light hover:bg-red/20 text-red text-lg p-1"
          onClick={() => handleScoreChange(false)}
        >
          <IncorrectIcon />
        </button>
      </div>
    </div>
  );
};

export default PlayerPanel;
