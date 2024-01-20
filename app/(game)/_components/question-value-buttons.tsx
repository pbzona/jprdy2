'use client';

import React from 'react';
import clsx from 'clsx';
import { useGameStore } from '../_store/game-store';

const QuestionValueButtons = () => {
  const activeValue = useGameStore.use.activeValue();
  const setActiveValue = useGameStore.use.setActiveValue();
  const scoreValues = useGameStore.use.scoreValues();
  const round = useGameStore.use.round();

  const handleValueButtonClick = (val: number) => {
    setActiveValue(val);
  };

  // Don't display question value buttons for Final Jeopardy
  if (round >= 3) return null;

  return (
    <div className="flex justify-center items-center gap-3 max-w-full">
      {scoreValues
        .map(value => value * round) // Handle this in state middleware or something later
        .map(value => {
          const isActive = activeValue === value;
          return (
            <button
              className={clsx(
                'text-yellow text-md sm:text-lg font-bold hover:bg-gradient-to-b from-red to-purple px-4 py-1 rounded-md scale-100 hover:scale-105 border-none transition-all',
                isActive ? 'bg-gradient-to-b scale-105' : 'bg-primary'
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
