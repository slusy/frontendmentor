import React from "react";
import { DividerProps } from "./types";

export const Divider: React.FC<DividerProps> = ({
  handleSubmit,
  date,
  setError,
  setCalculatedDate,
}) => {
  return (
    <div className="grid">
      <div className="w-full h-[2px] bg-off-white rounded-full col-start-1 col-end-2 row-start-1 row-end-2 self-center"></div>
      <button
        onClick={() => handleSubmit(date, setError, setCalculatedDate)}
        className="bg-cust-purple hover:bg-off-black transition-colors duration-500 col-start-1 col-end-2 row-start-1 row-end-2 self-center justify-self-center sm:justify-self-end rounded-full p-6"
      >
        <img src="icon-arrow.svg" alt="arrow" className="w-8" />
      </button>
    </div>
  );
};
