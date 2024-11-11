import React from "react";

export const App: React.FC = () => {
  return (
    <div className="font-spicy min-h-screen bg-slate-300 p-4 flex items-center justify-center">
      <div className="bg-white w-full sm:max-w-[320px] flex flex-col gap-2 text-center rounded-3xl p-4 shadow-lg">
        <img src="image-qr-code.png" alt="qr" className="rounded-xl" />
        <div className="flex flex-col gap-4 mb-2 p-6">
          <h1 className="text-slate-900 font-bold text-xl">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-[15px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
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
