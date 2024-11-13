import React from "react";
import { ResultSection } from "./components/result-section";
import { SummarySection } from "./components/summary-section";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pale-blue grid sm:items-center sm:justify-center">
      <div className="bg-white shadow-xl sm:max-w-[700px] sm:grid sm:grid-cols-2 sm:rounded-[30px] sm:shadow-xl">
        <ResultSection />
        <SummarySection />
      </div>
      <a
        href="http://achal-socials.vercel.app/portfolio"
        target="_blank"
        className="w-10 h-10 bg-black fixed bottom-5 left-5 rounded-xl hover:scale-110 transition-transform ease-in flex items-center justify-center z-[99999]"
      >
        <img
          src="icon-globe.svg"
          alt="portfolio"
          className="w-full h-full p-2"
        />
      </a>
    </div>
  );
};
