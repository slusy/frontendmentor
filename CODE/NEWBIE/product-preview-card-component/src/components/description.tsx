import React from "react";

export const HeroDescription: React.FC = () => {
  return (
    <div className="p-6 flex flex-col gap-4 sm:p-8">
      <p className="font-montserrat text-dark-greyish-blue font-medium tracking-[0.2em] text-opacity-80 sm:text-sm">
        PERFUME
      </p>
      <h1 className="font-fraunces text-very-dark-blue font-bold text-4xl sm:text-[32px]">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p className="font-montserrat text-dark-greyish-blue font-medium text-opacity-80 sm:text-sm">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="flex items-center gap-4 py-2">
        <h1 className="font-fraunces font-bold text-4xl text-dark-cyan sm:text-3xl">
          $149.99
        </h1>
        <p className="font-montserrat font-medium text-dark-greyish-blue text-opacity-80 line-through sm:text-sm">
          $169.99
        </p>
      </div>
      <button className="bg-dark-cyan flex items-center justify-center py-[14px] rounded-lg gap-3 hover:bg-[#22483a] transition-colors duration-300">
        <img src="icon-cart.svg" alt="cart" />
        <p className="text-white font-montserrat font-bold sm:text-sm">
          Add to Cart
        </p>
      </button>
    </div>
  );
};
