import React from "react";
import { InputSectionProps, INPUT_KEY } from "./types";
import classNames from "classnames";

export const InputSection: React.FC<InputSectionProps> = ({
  date,
  setDate,
  error,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap">
      {INPUT_KEY.map((item) => (
        <div key={`date-${item}-key`} className="flex flex-col gap-1 sm:gap-2">
          <p
            className={classNames({
              "text-xs text-smokey-grey font-bold tracking-[0.3em] uppercase sm:text-sm":
                true,
              "!text-light-red": error[item]?.error,
            })}
          >
            {item}
          </p>
          <input
            type="text"
            name={item}
            id={`${item}-input`}
            className={classNames({
              "rounded-lg border border-off-white hover:border-cust-purple transition-colors duration-500 text-off-black h-16 pl-3 text-2xl bg-transparent font-bold placeholder-placeholder-border sm:w-[150px] sm:text-3xl sm:pl-5":
                true,
              "!border-light-red": error[item]?.error,
            })}
            placeholder={
              item === "day" ? "DD" : item === "month" ? "MM" : "YYYY"
            }
            value={date[item] ?? ""}
            onChange={(e) => {
              setDate((prev) => ({
                ...prev,
                [item]: e?.target?.value,
              }));
            }}
          />
          {error[item]?.error && (
            <p className="text-[10px] text-light-red italic">
              {error[item]?.message}
            </p>
          )}
        </div>
      ))}
      {error?.common?.error && (
        <p className="text-[10px] text-light-red italic col-span-3 -mt-3 sm:-mt-2 sm:shrink-0">
          {error?.common?.message}
        </p>
      )}
    </div>
  );
};
