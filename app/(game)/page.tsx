import React from 'react';
import PlayerPanel from './components/player-panel';

const GamePage = () => {
  return (
    <main className="w-full lg:w-[1000px] mx-auto">
      <div className="bg-gray-light flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-12 ">
        <PlayerPanel />
        <PlayerPanel />
        <PlayerPanel />
      </div>
    </main>
  );
};

export default GamePage;
