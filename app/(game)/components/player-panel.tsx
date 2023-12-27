import React from 'react';
import { CorrectIcon } from './icons/correct';
import { IncorrectIcon } from './icons/incorrect';

const PlayerPanel = () => {
  return (
    <div className="w-full sm:w-2/3 lg:w-[300px] min-h-[300px] m-2 flex flex-col space-y-1">
      <div className="flex justify-center items-center bg-blue py-2">
        <h3 className="text-lg text-white">
          $<span>100</span>
        </h3>
      </div>
      <div className="flex justify-center items-center bg-blue py-8 flex-1">
        <h3 className="text-xl text-white">Name</h3>
      </div>
      <div className="w-full flex">
        <button className="flex-1 flex justify-center bg-white p-2">
          <CorrectIcon />
        </button>
        <button className="flex-1 flex justify-center bg-white p-2">
          <IncorrectIcon />
        </button>
      </div>
    </div>
  );
};

export default PlayerPanel;
