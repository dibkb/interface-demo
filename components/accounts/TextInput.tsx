"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Pencil from "../icons/Pencil";
import { cn } from "@/lib/utils";
interface TextInputProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  title: string;
  className?: string;
  type?: "text" | "password";
}
export const TextInput = ({
  state,
  setState,
  title,
  className,
  type = "text",
}: TextInputProps) => {
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
        {editOpen ? (
          <input
            className="bg-transparent w-full text-black font-bold focus:outline-none h-8"
            type={type}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        ) : (
          <h3 className="text-black font-bold h-8 flex items-center">
            {" "}
            {state}
          </h3>
        )}
      </main>
      <button
        className={cn("invisible", (isHovered || editOpen) && "visible")}
        onClick={() => setEditOpen((t) => !t)}
      >
        <Pencil />
      </button>
    </div>
  );
};
