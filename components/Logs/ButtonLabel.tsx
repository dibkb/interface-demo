import React from "react";

export const ButtonLabel = ({ text }: { text: string }) => {
  return (
    <div className="text-sm font-semibold px-4 py-1 rounded-md text-[#14A341] border border-[#14A341] bg-[#CBEDD6]">
      {text}
    </div>
  );
};

export const ButtonLabelAmber = ({ text }: { text: string }) => {
  return (
    <div className="text-sm font-semibold px-4 py-1 rounded-md text-[#CCA60F] border border-[#CCA60F] bg-[#FBF6CF]">
      {text}
    </div>
  );
};
