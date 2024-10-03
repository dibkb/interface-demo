import { inter } from "@/components/fonts";
import ChevronDown from "@/components/icons/ChevronDown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";
import DashChart from "../DashChart";

const CaseLogs = () => {
  return (
    <div className="p-8 bg-interface-neutrals-50 border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Case Logs </h3>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              inter.className,
              "bg-interface-base-black text-sm text-white rounded-lg px-4 py-2 flex items-center gap-3"
            )}
          >
            <p>Last Week</p>
            <ChevronDown className="text-interface-neutrals-500 size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option #1</DropdownMenuItem>
            <DropdownMenuItem>Option #2</DropdownMenuItem>
            <DropdownMenuItem>Option #3</DropdownMenuItem>
            <DropdownMenuItem>Option #4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <span className="flex items-center gap-4 my-6">
        <h3 className={cn(inter.className, "text-sm")}>Dispute Win Rate</h3>
        <p className="text-4xl font-bold">92.81%</p>
      </span>
      <DashChart
        data={[
          { title: "Reimbursed Cases", count: 1942, color: "#3EC76A" },
          { title: "Pending Case", count: 532, color: "#1E1E1E" },
          { title: "Action Required", count: 280, color: "#E4626F" },
        ]}
      />
    </div>
  );
};

export default CaseLogs;
