import React, { useState } from "react";
import { InputSection } from "./input-section";
import { Divider } from "./divider";
import { CalculatedDate } from "./calculated-date";
import { DateState, ErrorState, INPUT_KEY } from "./types";

const handleSubmit = async (
  date: DateState,
  setError: React.Dispatch<React.SetStateAction<ErrorState>>,
  setCalculatedDate: React.Dispatch<React.SetStateAction<DateState>>
) => {
  setError({
    day: {
      error: false,
    },
    month: {
      error: false,
    },
    year: {
      error: false,
    },
  });

  INPUT_KEY?.map((item) => {
    if (!date[item]) {
      setError((prev) => ({
        ...prev,
        [item]: {
          error: true,
          message: "This field is required",
        },
      }));
      return;
    }
  });

  if (date?.day && (date?.day > 31 || date?.day < 1)) {
    setError((prev) => ({
      ...prev,
      day: {
        error: true,
        message: "Must be a valid day",
      },
    }));
    return;
  }

  if (date?.month && (date?.month > 12 || date?.month < 1)) {
    setError((prev) => ({
      ...prev,
      month: {
        error: true,
        message: "Must be a valid month",
      },
    }));
    return;
  }

  if (date?.year && date?.month && date?.day) {
    const userDate: Date = new Date(date?.year, date?.month - 1, date?.day);
    const currentDate: Date = new Date();

    if (userDate > currentDate) {
      setError(() => ({
        common: {
          error: true,
          message: "You have provided a future date",
        },
      }));
      return;
    }

    let yearDifference = currentDate?.getFullYear() - userDate?.getFullYear();
    let monthDifference = currentDate?.getMonth() - userDate?.getMonth();
    let dayDifference = currentDate?.getDate() - userDate?.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      yearDifference--;
      monthDifference += 12;
    }

    if (dayDifference < 0) {
      const lastMonthDate = new Date(
        currentDate?.getFullYear(),
        currentDate?.getMonth(),
        0
      );
      monthDifference--;
      dayDifference += lastMonthDate?.getDate();
    }

    setCalculatedDate({
      day: dayDifference,
      month: monthDifference,
      year: yearDifference,
    });
  }
};

export const Container: React.FC = () => {
  const [date, setDate] = useState<DateState>({
    day: null,
    month: null,
    year: null,
  });
  const [calculatedDate, setCalculatedDate] = useState<DateState>({
    day: null,
    month: null,
    year: null,
  });

  const [error, setError] = useState<ErrorState>({
    day: {
      error: false,
      message: "",
    },
    month: {
      error: false,
      message: "",
    },
    year: {
      error: false,
      message: "",
    },
  });

  return (
    <div className="bg-white w-full min-h-[500px] max-w-[700px] rounded-t-[20px] rounded-bl-[20px] rounded-br-[150px] sm:rounded-br-[180px] px-6 py-12 sm:px-12 flex flex-col gap-8 sm:gap-0">
      <InputSection date={date} setDate={setDate} error={error} />
      <Divider
        handleSubmit={handleSubmit}
        date={date}
        setError={setError}
        setCalculatedDate={setCalculatedDate}
      />
      <CalculatedDate calculatedDate={calculatedDate} />
    </div>
  );
};
