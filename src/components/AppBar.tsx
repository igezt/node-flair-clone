import React from "react";

export const AppBar = () => {
  return (
    <div>
      <div className="h-20 z-49 w-full" />
      <div className="bg-green-300 fixed w-full h-20 z-50 top-0">
        <span className="font-mono text-5xl">NODE</span>
        <span className="font-mono text-5xl font-bold">FLAIR</span>
        <span className="font-mono text-5xl"> CLONE</span>
        <br />
        <span>Something about not letting your dreams be dreams</span>
      </div>
    </div>
  );
};
