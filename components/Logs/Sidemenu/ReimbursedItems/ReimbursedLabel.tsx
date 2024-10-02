import React from "react";

const ReimbursedLabel = ({ children }: { children: React.ReactNode }) => {
  if (children === "Partially reimbursed")
    return (
      <div className="text-sm font-semibold px-4 py-1 rounded-md text-[#724DFF] border border-[#724DFF] bg-[#D5CCF8] w-min whitespace-nowrap">
        {children}
      </div>
    );
  return (
    <div className="text-sm font-semibold px-4 py-1 rounded-md text-[#14A341] border border-[#14A341] bg-[#CBEDD6] w-min whitespace-nowrap">
      {children}
    </div>
  );
};

export default ReimbursedLabel;
