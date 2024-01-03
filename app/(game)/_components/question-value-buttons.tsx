"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useGame } from "../_hooks/useGame";

const VALUES = [200, 400, 600, 800, 1000];

const QuestionValueButtons = () => {
  const game = useGame();

  // Note to future self: setValues will be used for round changes (eg double jprdy)
  const [values, setValues] = useState<number[]>(VALUES);
  const [activeValue, setActiveValue] = useState<number>(game.activeValue);

  const handleValueButtonClick = (val: number) => {
    game.activeValue = val;
    setActiveValue(game.activeValue);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      {values.map((value) => {
        const isActive = activeValue === value;
        return (
          <button
            className={clsx(
              "text-yellow text-lg font-bold hover:bg-gradient-to-b from-red to-purple px-4 py-2 rounded-md hover:scale-105",
              isActive ? "bg-gradient-to-b" : "bg-blue",
            )}
            key={value}
            onClick={() => handleValueButtonClick(value)}
          >
            ${value}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionValueButtons;
