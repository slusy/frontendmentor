import React from "react";
import { HeroImage } from "./components/image-section";
import { HeroDescription } from "./components/description";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl sm:grid sm:grid-cols-2 max-w-[600px]">
        <HeroImage />
        <HeroDescription />
      </div>
      <a
        href="http://achal-socials.vercel.app/portfolio"
        target="_blank"
        className="w-10 h-10 bg-black fixed bottom-5 left-5 rounded-xl hover:scale-110 transition-transform ease-in flex items-center justify-center z-[99999]"
        data-testid="portfolio"
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
