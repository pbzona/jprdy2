import React from 'react';
import { GameActionButton } from '../game-action-button';

import { UserAdd } from '../../icons/user-add';
import { useGameStore } from '@/app/(game)/_store/game-store';

const AddPlayerButton = () => {
  const addPlayer = useGameStore.use.addPlayer();

  const handleClick = () => {
    addPlayer();
  };

  return (
    <GameActionButton
      label="Add player"
      show={true}
      onClick={handleClick}
    >
      <UserAdd
        className="h-6 w-6"
        aria-hidden="true"
      />
    </GameActionButton>
  );
};

export default AddPlayerButton;
