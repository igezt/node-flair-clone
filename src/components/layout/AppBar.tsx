import React from "react";

export const AppBar = () => {
  return (
    <>
      <div className="appbar bg-green-300 sticky w-screen h-20 z-50 top-0 whitespace-nowrap px-3">
        <span className="font-mono text-5xl">NODE</span>
        <span className="font-mono text-5xl font-bold">FLAIR</span>
        <span className="font-mono text-5xl"> CLONE</span>
        <br />
        <span>Something about not letting your dreams be dreams</span>
      </div>
    </>
  );
};
