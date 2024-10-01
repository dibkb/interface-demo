import React from "react";
import Loglabel from "./Loglabel";
import LogThumbnail from "./LogThumbnail";
import { label } from "@/types/logLabel";
import ArrowUpRight from "../icons/ArrowUpRight";

const labels: label[] = ["all", "raised", "followed", "reimbursed", "action"];
const Mainpage = () => {
  return (
    <div className="border h-full overflow-x-auto flex">
      {labels.map((type, index) => (
        <div
          key={index}
          className="flex-shrink-0 border-r last:border-r-0 w-[300px] flex flex-col h-full"
        >
          <span className="h-16 border-b flex items-center justify-between px-4 group hover:bg-neutral-100 cursor-pointer">
            <Loglabel type={type} />
            <ArrowUpRight className="size-5 text-interface-neutrals-600 invisible group-hover:visible" />
          </span>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {type === "all" && (
              <>
                <LogThumbnail
                  title={"Overcharge : Shipping"}
                  content={"B0CLMN3PQ7"}
                />
                <LogThumbnail
                  title={"Overcharge : Shipping"}
                  content={"B0CLMN3PQ7"}
                />
                <LogThumbnail
                  title={"Overcharge : Shipping"}
                  content={"B0CLMN3PQ7"}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainpage;
