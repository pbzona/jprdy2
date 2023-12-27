import React from 'react';
import Header from './components/header';

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GameLayout;
