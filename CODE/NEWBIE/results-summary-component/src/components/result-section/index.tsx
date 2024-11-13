import React from "react";
import { Circle } from "./circle";

export const ResultSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center px-16 sm:px-12 py-12 sm:py-16 bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-[50px] sm:rounded-[30px]">
      <p className="text-light-lavender text-xl font-bold">Your Result</p>
      <Circle />
      <p className="text-white text-2xl font-bold">Great</p>
      <p className="text-light-lavender text-lg font-medium text-opacity-75">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
