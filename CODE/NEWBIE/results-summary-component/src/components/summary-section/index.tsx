import React from "react";
import { Card } from "./card";

type ScoreData = {
  id: string;
  title: string;
  score: number;
  logo: string;
};

const SCORE: ScoreData[] = [
  {
    id: "reaction",
    title: "Reaction",
    score: 80,
    logo: "icon-reaction.svg",
  },
  {
    id: "memory",
    title: "Memory",
    score: 92,
    logo: "icon-memory.svg",
  },
  {
    id: "verbal",
    title: "Verbal",
    score: 61,
    logo: "icon-verbal.svg",
  },
  {
    id: "visual",
    title: "Visual",
    score: 72,
    logo: "icon-visual.svg",
  },
];

export const SummarySection: React.FC = () => {
  return (
    <div className="pt-8 px-8 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-dark-grey-blue">Summary</h1>
      <div className="flex flex-col gap-4">
        {SCORE?.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <button className="bg-dark-grey-blue w-full text-white rounded-full py-4 hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
        Continue
      </button>
    </div>
  );
};
