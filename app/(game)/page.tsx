import React from 'react';
import PlayerPanel from './components/player-panel';

const GamePage = () => {
  return (
    <main className="w-full lg:w-[1000px] xl:w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-12 p-2 sm:p-0">
        <PlayerPanel />
        <PlayerPanel />
        <PlayerPanel />
      </div>
    </main>
  );
};

export default GamePage;
