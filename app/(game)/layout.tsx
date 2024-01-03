import React from "react";
import Header from "./_components/header";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GameLayout;
