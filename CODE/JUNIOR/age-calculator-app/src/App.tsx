import React from "react";
import { Container } from "./components";
import { Portfolio } from "./components/portfolio";

export const App: React.FC = () => {
  return (
    <div className="font-poppins min-h-screen bg-light-grey flex items-center justify-center p-4">
      <Container />
      <Portfolio />
    </div>
  );
};
