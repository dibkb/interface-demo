"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
interface DropdownInput {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  title: string;
  className?: string;
  list: string[];
}
export const DropdownInput = ({
  state,
  setState,
  title,
  className,
  list,
}: DropdownInput) => {
  const [isHovered, setIsHovered] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "flex items-center justify-between bg-interface-base-white px-6 py-4 rounded-lg border cursor-pointer",
        className,
        isHovered && "bg-interface-neutrals-50"
      )}
    >
      <main className="flex flex-col gap-2 flex-1">
        <p className="font-bold text-interface-neutrals-500">{title}</p>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "text-black font-bold text-left flex items- justify-between"
            )}
          >
            <p>{state}</p>
            <button
              className={cn("invisible", (isHovered || editOpen) && "visible")}
              onClick={() => setEditOpen((t) => !t)}
            >
              <ChevronDown />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {list.map((l) => (
              <DropdownMenuItem key={l} onClick={() => setState(l)}>
                {l}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </main>
    </div>
  );
};
