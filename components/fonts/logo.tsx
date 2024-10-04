import React from "react";
import { manrope } from "./index";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <h1
      className={cn(
        manrope.className,
        "font-semibold text-[28px] text-interface-palette-secondary flex justify-start items-center h-full",
        className
      )}
    >
      interface
    </h1>
  );
};
