'use client';

import React from 'react';
import clsx from 'clsx';
import { useGameStore } from '../_store/game-store';

const VALUES = [200, 400, 600, 800, 1000];

const QuestionValueButtons = () => {
  const activeValue = useGameStore(state => state.activeValue);
  const setActiveValue = useGameStore(state => state.setActiveValue);
  const scoreValues = useGameStore(state => state.scoreValues);

  const handleValueButtonClick = (val: number) => {
    setActiveValue(val);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      {scoreValues.map(value => {
        const isActive = activeValue === value;
        return (
          <button
            className={clsx(
              'text-yellow text-lg font-bold hover:bg-gradient-to-b from-red to-purple px-4 py-2 rounded-md scale-100 hover:scale-105',
              isActive ? 'bg-gradient-to-b scale-105' : 'bg-blue'
            )}
            key={value}
            onClick={() => handleValueButtonClick(value)}
            type="button"
          >
            ${value}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionValueButtons;
