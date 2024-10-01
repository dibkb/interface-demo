import { cn } from "@/lib/utils";
import React from "react";
import { manrope } from ".";

const Heading = ({ text }: { text: string }) => {
  return (
    <p
      className={cn(
        manrope.className,
        "text-lg font-bold text-interface-palette-secondary"
      )}
    >
      {text}
    </p>
  );
};

export default Heading;
