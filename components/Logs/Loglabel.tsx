import { label } from "@/types/logLabel";
import Link from "next/link";
import React from "react";

interface LoglabelProps {
  type: label;
  href: string;
}
const Loglabel = ({ type, href }: LoglabelProps) => {
  switch (type) {
    case "all":
      return (
        <Link
          href={`logs/${href}`}
          className="text-sm font-semibold px-4 py-1 rounded-md text-[#F36325] border border-[#F36325] bg-[#FBDCCF]"
        >
          All Mismatches
        </Link>
      );
    case "followed":
      return (
        <Link
          href={`logs/${href}`}
          className="text-sm font-semibold px-4 py-1 rounded-md text-[#0DB580] border border-[#0DB580] bg-[#C8F8E9]"
        >
          Followed Up
        </Link>
      );
    case "raised":
      return (
        <Link
          href={`logs/${href}`}
          className="text-sm font-semibold px-4 py-1 rounded-md text-[#CCA60F] border border-[#CCA60F] bg-[#FBF6CF]"
        >
          Case Raised
        </Link>
      );
    case "reimbursed":
      return (
        <Link
          href={`logs/${href}`}
          className="text-sm font-semibold px-4 py-1 rounded-md text-[#14A341] border border-[#14A341] bg-[#CBEDD6]"
        >
          Reimbursed
        </Link>
      );
    case "action":
      return (
        <Link
          href={`logs/${href}`}
          className="text-sm font-semibold px-4 py-1 rounded-md text-[#CC0F0F] border border-[#CC0F0F] bg-[#FBCFCF]"
        >
          Action Required
        </Link>
      );
  }
};

export default Loglabel;
