import { cn } from "@/lib/utils";
import React from "react";
import { inter } from "../fonts";

const SmallButton = ({
  text,
  variant = "primary",
}: {
  text: string;
  variant?: "primary" | "secondary";
}) => {
  return (
    <button
      className={cn(
        inter.className,
        "text-xs px-6 py-1 rounded-md bg-interface-base-black text-interface-base-white border",
        variant === "secondary" &&
          "text-interface-base-black bg-interface-base-white"
      )}
    >
      {text}
    </button>
  );
};

export default SmallButton;
