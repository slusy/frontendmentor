import React from "react";

export const Circle: React.FC = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-violet-blue to-persian-blue w-40 h-40 rounded-full items-center justify-center gap-2 sm:my-4">
      <span className="text-6xl font-extrabold text-white">76</span>
      <span className="text-lg text-light-lavender text-opacity-60 font-medium">
        of 100
      </span>
    </div>
  );
};
