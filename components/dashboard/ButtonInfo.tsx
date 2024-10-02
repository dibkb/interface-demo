import React from "react";
import ChevronRight from "../icons/ChevronRight";
interface ButtonInfoProps {
  title: string;
  amount: string;
}
const ButtonInfo = ({ title, amount }: ButtonInfoProps) => {
  return (
    <div className="p-7 rounded-md flex items-center justify-between border flex-1 linear-grad text-interface-base-white">
      <section className="font-bold flex flex-col gap-3">
        <h1 className="">{title}</h1>
        <p className="text-3xl">{amount}</p>
      </section>
      <button className="p-4">
        <ChevronRight className="size-8" />
      </button>
    </div>
  );
};

export default ButtonInfo;
