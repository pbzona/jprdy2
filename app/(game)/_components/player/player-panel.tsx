import React from 'react';
import clsx from 'clsx';

import { CorrectIcon } from '@game/_components/icons/correct';
import { IncorrectIcon } from '@game/_components/icons/incorrect';
import { createScoreString } from '@/lib/utils/createScoreString';
import { useGameStore } from '@/app/(game)/_store/game-store';

import { PlayerNameModal } from './player-name-modal';

type PlayerPanelProps = {
  playerIndex: number;
};

const PlayerPanel = ({ playerIndex }: PlayerPanelProps) => {
  const shouldDisplay = useGameStore.use.players()[playerIndex].show;

  const playerName = useGameStore(state => state.players[playerIndex].name);
  const playerScore = useGameStore(state => state.players[playerIndex].score);
  const updatePlayerScoreOnCorrect = useGameStore(state => state.updatePlayerScoreOnCorrect);
  const updatePlayerScoreOnIncorrect = useGameStore(state => state.updatePlayerScoreOnIncorrect);

  if (!shouldDisplay) {
    return null;
  }

  const topLevelPanelStyles = clsx(
    'w-full sm:w-2/3 md:w-1/2 lg:w-[320px]', // Widths
    'min-h-[300px] lg:min-h-[320px] xl:min-h-[360px]', // Heights
    'flex flex-col flex-none xl:flex-1 space-y-1', // Flex
    'border-blue-lightest border-4 rounded-md', // Border
    'm-2 p-1' // Spacing
  );

  const scorePanelStyles = clsx(
    'bg-primary', // Color
    'rounded', // Shape
    'py-2', // Spacing
    'flex justify-center items-center' // Flex
  );

  const scoreTextStyles = clsx(
    'text-lg font-bold tracking-wide',
    playerScore >= 0 ? 'text-white' : 'text-red'
  );

  const openPlayerNameModal = () => {
    const modal = document?.getElementById(`player-name-${playerIndex}`);

    if (modal instanceof HTMLDialogElement) modal.showModal();
  };

  return (
    <div className={topLevelPanelStyles}>
      <div className={scorePanelStyles}>
        <h3 className={scoreTextStyles}>{createScoreString(playerScore)}</h3>
      </div>
      <div className="flex justify-center items-center bg-primary py-8 rounded flex-1">
        <button
          className="btn btn-primary btn-lg"
          type="button"
          onClick={openPlayerNameModal}
        >
          <h3 className="text-xl text-white">{playerName}</h3>
        </button>
        <PlayerNameModal playerIndex={playerIndex} />
      </div>
      <div className="w-full flex rounded overflow-hidden">
        <button
          type="button"
          className="flex-1 flex justify-center bg-gray-light hover:bg-green/20 text-green text-lg p-1"
          onClick={() => updatePlayerScoreOnCorrect(playerIndex)}
        >
          <CorrectIcon />
        </button>
        <button
          type="button"
          className="flex-1 flex justify-center bg-gray-light hover:bg-red/20 text-red text-lg p-1"
          onClick={() => updatePlayerScoreOnIncorrect(playerIndex)}
        >
          <IncorrectIcon />
        </button>
      </div>
    </div>
  );
};

export default PlayerPanel;
