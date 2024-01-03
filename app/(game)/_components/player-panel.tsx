import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CorrectIcon } from './icons/correct';
import { IncorrectIcon } from './icons/incorrect';
import { createScoreString } from '@/lib/utils/createScoreString';
import { GameContext } from '../_context/game-context';
import { Game } from '../_context/game';

const PlayerPanel = () => {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [displayScore, setDisplayScore] = useState<string>(playerScore.toString());

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

  useEffect(() => {
    setDisplayScore(createScoreString(playerScore));
  }, [playerScore]);

  const handleScoreChange = (value: number, wasCorrect: boolean): void => {
    const sign = wasCorrect ? 1 : -1;
    const newScore = playerScore + value * sign;

    setPlayerScore(newScore);
    setDisplayScore(createScoreString(newScore));
  };

  return (
    <GameContext.Consumer>
      {(game: Game) => (
        <div className={topLevelPanelStyles}>
          <div className={scorePanelStyles}>
            <h3 className={scoreTextStyles}>{displayScore}</h3>
          </div>
          <div className="flex justify-center items-center bg-blue py-8 rounded flex-1">
            <h3 className="text-xl text-white">Name</h3>
          </div>
          <div className="w-full flex rounded overflow-hidden">
            <button
              className="flex-1 flex justify-center bg-gray-light hover:bg-green/20 text-green text-lg p-1"
              onClick={() => handleScoreChange(game.activeValue, true)}
            >
              <CorrectIcon />
            </button>
            <button
              className="flex-1 flex justify-center bg-gray-light hover:bg-red/20 text-red text-lg p-1"
              onClick={() => handleScoreChange(game.activeValue, false)}
            >
              <IncorrectIcon />
            </button>
          </div>
        </div>
      )}
    </GameContext.Consumer>
  );
};

export default PlayerPanel;
