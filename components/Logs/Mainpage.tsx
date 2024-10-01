import React from "react";
import Loglabel from "./Loglabel";

const Mainpage = () => {
  return (
    <div className="border h-full overflow-y-auto grid grid-cols-12">
      <div className="border-r col-span-3 flex flex-col h-full">
        <span className="h-16 border-b flex items-center px-4">
          <Loglabel type="all" />
        </span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
      <div className="border-r col-span-3 flex flex-col h-full">
        <span className="h-16 border-b flex items-center px-4">
          <Loglabel type="raised" />
        </span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
      <div className="border-r col-span-3 flex flex-col h-full">
        <span className="h-16 border-b flex items-center px-4">
          <Loglabel type="followed" />
        </span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
      <div className="col-span-3 flex flex-col h-full">
        <span className="h-16 border-b flex items-center px-4">
          <Loglabel type="reimbursed" />
        </span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
    </div>
  );
};

export default Mainpage;
