import React from "react";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const logoFont = Manrope({
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <h1
      className={cn(
        logoFont.className,
        "font-semibold text-[28px] text-interface-palette-secondary flex justify-start items-center h-full"
      )}
    >
      interface
    </h1>
  );
};
