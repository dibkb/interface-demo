import React, { Dispatch, SetStateAction } from "react";

interface InputProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  type?: "text" | "password";
  placeholder: string;
}
const Input = ({ state, setState, type = "text", placeholder }: InputProps) => {
  return (
    <input
      value={state}
      onChange={(e) => setState(e.target.value)}
      type={type}
      className="w-full bg-transparent px-4 py-4 focus:outline-none border-2 border-black/50 rounded-lg font-bold text-xs"
      placeholder={placeholder}
    />
  );
};

export default Input;
