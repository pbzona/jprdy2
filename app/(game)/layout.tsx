import React from 'react';
import Header from '@game/_components/header';

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GameLayout;
