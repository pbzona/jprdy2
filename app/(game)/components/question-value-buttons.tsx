import React from 'react';

const VALUES = [200, 400, 600, 800, 1000];

const QuestionValueButtons = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      {VALUES.map(value => (
        <button
          className="text-yellow text-lg font-bold bg-blue hover:bg-gradient-to-b from-red to-purple px-4 py-2 rounded-md hover:scale-105"
          key={value}
        >
          ${value}
        </button>
      ))}
    </div>
  );
};

export default QuestionValueButtons;
