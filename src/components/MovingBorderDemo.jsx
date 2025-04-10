"use client";
import React from "react";
import { Button } from "./ui/MovingBorder";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Admin
      </Button>
    </div>
  );
}
