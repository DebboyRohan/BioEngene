import React from "react";

import { cn } from "../lib/Utils";
import AchievementsTimeline from "../components/AchievementTimeline";

const Achievement = () => {
  return (
    <div>
      <div className="h-96 relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className={cn("md:text-4xl text-xl text-black relative z-20")}>
          Achievements & Accomplishmets
        </h1>
        <br />
        <p className="mx-10 text-center mt-2 text-neutral-800 relative z-20">
          BioEnGene has established a distinguished history of innovation and
          excellence in the fields of biotechnology and genetic engineering.
          Since its inception, BioEnGene has been instrumental in advancing
          research that addresses critical challenges in healthcare, energy, and
          environmental sustainability. This group emerged as a hub for
          interdisciplinary research, integrating principles of biology,
          engineering, and technology to foster groundbreaking innovations.
        </p>
      </div>
      <AchievementsTimeline />
    </div>
  );
};

export default Achievement;
