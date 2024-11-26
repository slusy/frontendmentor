import React from "react";

export const Portfolio: React.FC = () => {
  return (
    <a
      href="http://achal-socials.vercel.app/portfolio"
      target="_blank"
      className="w-10 h-10 bg-black fixed bottom-5 left-5 rounded-xl hover:scale-110 transition-transform ease-in flex items-center justify-center z-[99999]"
    >
      <img src="icon-globe.svg" alt="portfolio" className="w-full h-full p-2" />
    </a>
  );
};
