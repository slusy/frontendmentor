import React from "react";
import classNames from "classnames";

type ScoreData = {
  id: string;
  title: string;
  score: number;
  logo: string;
};

interface CardProps {
  item: ScoreData;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div
      key={`score-data-${item?.id}`}
      className={classNames({
        "flex items-center justify-between rounded-xl p-4 bg-opacity-10": true,
        "bg-light-red": item?.id === "reaction",
        "bg-orangey-yellow": item?.id === "memory",
        "bg-green-teal": item?.id === "verbal",
        "bg-cobalt-blue": item?.id === "visual",
      })}
    >
      <div className="flex items-center gap-2">
        <img src={item?.logo} alt={item?.title} />
        <p
          className={classNames({
            "text-lg font-medium": true,
            "text-light-red": item?.id === "reaction",
            "text-orangey-yellow": item?.id === "memory",
            "text-green-teal": item?.id === "verbal",
            "text-cobalt-blue": item?.id === "visual",
          })}
        >
          {item?.title}
        </p>
      </div>
      <div className="text-lg font-bold flex items-center gap-1.5">
        <span className="text-dark-grey-blue">{item?.score}</span>
        <span className="text-dark-grey-blue text-opacity-50">/ 100</span>
      </div>
    </div>
  );
};
