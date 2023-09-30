import React from "react";
import { AppBar } from "./AppBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar />
      <div className="bg-neutral-100 w-full h-full fixed overflow-auto">
        {children}
      </div>
    </>
  );
};
