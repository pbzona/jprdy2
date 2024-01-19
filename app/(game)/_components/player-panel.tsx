import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CorrectIcon } from './icons/correct';
import { IncorrectIcon } from './icons/incorrect';
import { createScoreString } from '@/lib/utils/createScoreString';
import { useGameStore } from '../_store/game-store';

type PlayerPanelProps = {
  playerIndex: number;
};

const PlayerPanel = ({ playerIndex }: PlayerPanelProps) => {
  const playerName = useGameStore(state => state.players[playerIndex].name);
  const playerScore = useGameStore(state => state.players[playerIndex].score);
  const updatePlayerScoreOnCorrect = useGameStore(state => state.updatePlayerScoreOnCorrect);
  const updatePlayerScoreOnIncorrect = useGameStore(state => state.updatePlayerScoreOnIncorrect);

  const topLevelPanelStyles = clsx(
    'w-full sm:w-2/3 md:w-1/2 lg:w-[320px]', // Widths
    'min-h-[300px] lg:min-h-[320px] xl:min-h-[360px]', // Heights
    'flex flex-col flex-none xl:flex-1 space-y-1', // Flex
    'border-blue-lightest border-4 rounded-md', // Border
    'm-2 p-1' // Spacing
  );

  const scorePanelStyles = clsx(
    'bg-blue', // Color
    'rounded', // Shape
    'py-2', // Spacing
    'flex justify-center items-center' // Flex
  );

  const scoreTextStyles = clsx(
    'text-lg font-bold tracking-wide',
    playerScore >= 0 ? 'text-white' : 'text-red'
  );

  return (
    <div className={topLevelPanelStyles}>
      <div className={scorePanelStyles}>
        <h3 className={scoreTextStyles}>{createScoreString(playerScore)}</h3>
      </div>
      <div className="flex justify-center items-center bg-blue py-8 rounded flex-1">
        <h3 className="text-xl text-white">{playerName}</h3>
      </div>
      <div className="w-full flex rounded overflow-hidden">
        <button
          type="button"
          className="flex-1 flex justify-center bg-gray-light hover:bg-green/20 text-green text-lg p-1"
          onClick={() => updatePlayerScoreOnCorrect(playerIndex.toString())}
        >
          <CorrectIcon />
        </button>
        <button
          type="button"
          className="flex-1 flex justify-center bg-gray-light hover:bg-red/20 text-red text-lg p-1"
          onClick={() => updatePlayerScoreOnIncorrect(playerIndex.toString())}
        >
          <IncorrectIcon />
        </button>
      </div>
    </div>
  );
};

export default PlayerPanel;
