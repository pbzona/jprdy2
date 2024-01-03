'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { GameContext } from '../_context/game-context';
import { Game } from '../_context/game';

const VALUES = [200, 400, 600, 800, 1000];

const QuestionValueButtons = () => {
  // Active value might need its own context, visual updates aren't working probably because it's an object
  // Or handle the display in state here - probaby smarter
  return (
    <div className="flex justify-center items-center gap-3">
      {VALUES.map(value => {
        return (
          <GameContext.Consumer key={value}>
            {({ activeValue }: Game) => (
              <button
                className={clsx(
                  'text-yellow text-lg font-bold hover:bg-gradient-to-b from-red to-purple px-4 py-2 rounded-md hover:scale-105',
                  activeValue === value ? 'bg-gradient-to-b' : 'bg-blue'
                )}
                key={value}
                onClick={() => (activeValue = value)}
              >
                ${value}
              </button>
            )}
          </GameContext.Consumer>
        );
      })}
    </div>
  );
};

export default QuestionValueButtons;
