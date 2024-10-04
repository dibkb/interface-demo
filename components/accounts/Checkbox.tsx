import { cn } from "@/lib/utils";
import React from "react";
import Check from "../icons/Check";

interface CheckboxProps {
  selected: boolean;
}
const Checkbox = ({ selected }: CheckboxProps) => {
  return (
    <div
      className={cn(
        "w-6 h-6 border rounded-sm flex items-center justify-center bg-interface-base-white p-1",
        selected &&
          "bg-interface-palette-secondary border-interface-palette-secondary"
      )}
    >
      <Check
        className={cn(
          "size-5 text-interface-base-black visible",
          selected && "text-interface-base-white"
        )}
      />
    </div>
  );
};

export default Checkbox;
