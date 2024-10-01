import { label } from "@/types/logLabel";
import React from "react";

interface LoglabelProps {
  type: label;
}
const Loglabel = ({ type }: LoglabelProps) => {
  switch (type) {
    case "all":
      return (
        <span className="text-sm font-semibold px-4 py-1 rounded-md text-[#F36325] border border-[#F36325] bg-[#FBDCCF]">
          All Mismatches
        </span>
      );
    case "followed":
      return (
        <span className="text-sm font-semibold px-4 py-1 rounded-md text-[#0DB580] border border-[#0DB580] bg-[#C8F8E9]">
          Followed Up
        </span>
      );
    case "raised":
      return (
        <span className="text-sm font-semibold px-4 py-1 rounded-md text-[#CCA60F] border border-[#CCA60F] bg-[#FBF6CF]">
          Case Raised
        </span>
      );
    case "reimbursed":
      return (
        <span className="text-sm font-semibold px-4 py-1 rounded-md text-[#14A341] border border-[#14A341] bg-[#CBEDD6]">
          Case Raised
        </span>
      );
    case "action":
      return (
        <span className="text-sm font-semibold px-4 py-1 rounded-md text-[#CC0F0F] border border-[#CC0F0F] bg-[#FBCFCF]">
          Action Required
        </span>
      );
  }
};

export default Loglabel;
