import React from "react";
import { OutputSectionProps } from "./types";

export const CalculatedDate: React.FC<OutputSectionProps> = ({
  calculatedDate,
}) => {
  return (
    <div className="font-extrabold text-[56px] sm:text-[84px] flex flex-col italic leading-tight">
      <h1>
        <span className="text-cust-purple">{calculatedDate?.year ?? "--"}</span>{" "}
        years
      </h1>
      <h1>
        <span className="text-cust-purple">
          {calculatedDate?.month ?? "--"}
        </span>{" "}
        months
      </h1>
      <h1>
        <span className="text-cust-purple">{calculatedDate?.day ?? "--"}</span>{" "}
        days
      </h1>
    </div>
  );
};
