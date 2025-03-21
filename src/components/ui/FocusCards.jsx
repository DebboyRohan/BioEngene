"use client";
import React, { useState } from "react";
import { cn } from "../../lib/Utils";
import {
  cardsData,
  defaultPic,
  linkedinlogo,
  maillogo,
} from "../../assets/asset.js";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg mb-5 relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={defaultPic}
      alt={card.name}
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.name}
        <p className="text-sm text-neutral-100">
          {card.designation}, {card.team}
        </p>
        <br />
        <div className="flex space-x-2 items-center">
          <a href={`mailto:${card.email}`}>
            <img src={maillogo} className="h-6 w-6" />
          </a>
          <a href={card.linkedin_url}>
            <img src={linkedinlogo} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:px-8 w-full">
      {cardsData.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
