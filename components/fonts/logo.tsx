import React from "react";
import { manrope } from "./index";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <h1
      className={cn(
        manrope.className,
        "font-semibold text-[28px] text-interface-palette-secondary flex justify-start items-center h-full"
      )}
    >
      interface
    </h1>
  );
};
