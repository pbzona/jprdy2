import React from 'react';

import { ArrowLeft } from '@game/_components/icons/arrow-left';
import { ArrowRight } from '@game/_components/icons/arrow-right';
import { PlayIcon } from '@game/_components/icons/play';
import { useEventStore } from '@game/_store/event-store';

import { GameActionButton } from './game-action-button';
import { PlayerCount } from './actions/player-count';

export const GameActionList = () => {
  const gameHasStarted = useEventStore.use.gameHasStarted();
  const startGame = useEventStore.use.startGame();

  return (
    <ul className="w-full mx-auto p-2 space-x-2 flex justify-center items-center bg-gray-light/50">
      <li>
        <GameActionButton
          label="Start game"
          show={!gameHasStarted}
          onClick={() => startGame()}
        >
          <PlayIcon
            className="h-6 w-6"
            aria-hidden="true"
          />
        </GameActionButton>
      </li>
      <li>{!gameHasStarted && <PlayerCount />}</li>
      <li>
        <GameActionButton
          label="Prev round"
          show={true}
          onClick={() => {}}
        >
          <ArrowLeft
            className="h-6 w-6"
            aria-hidden="true"
          />
        </GameActionButton>
      </li>
      <li>
        <GameActionButton
          label="Next round"
          show={true}
          onClick={() => {}}
        >
          <ArrowRight
            className="h-6 w-6"
            aria-hidden="true"
          />
        </GameActionButton>
      </li>
    </ul>
  );
};
