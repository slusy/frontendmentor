import React from "react";

export const HeroImage: React.FC = () => {
  return (
    <picture>
      <source media="(max-width:639px)" srcSet="image-product-mobile.jpg" />
      <img
        src="image-product-desktop.jpg"
        alt="Flowers"
        className="rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl sm:rounded-bl-2xl sm:h-full"
      />
    </picture>
  );
};
