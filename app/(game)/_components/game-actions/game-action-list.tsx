import React from 'react';
import { GameActionButton } from './game-action-button';
import { UserAdd } from '../icons/user-add';
import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';

export const GameActionList = () => {
  return (
    <ul className="w-full mx-auto p-2 space-x-2 flex justify-center items-center bg-gray-light/50">
      <li>
        <GameActionButton
          label="Add user"
          show={true}
          onClick={() => {}}
        >
          <UserAdd
            className="h-6 w-6"
            aria-hidden="true"
          />
        </GameActionButton>
      </li>
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
