"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const words = `Re-engineering Nature’s Blueprint.
`;
export function BackgroundBoxes() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <h1 className="md:text-8xl text-xl text-black relative z-20">
        About BioEnGene
      </h1>
      <br />
      <p className="mx-10 text-4xl text-center mt-2 text-black relative z-20">
        <TextGenerateEffect words={words} />
      </p>
    </div>
  );
}
