import React from "react";

const Mainpage = () => {
  return (
    <div className="border h-full overflow-y-auto grid grid-cols-12">
      <div className="border-r col-span-3 flex flex-col h-full">
        <span className="h-16 border-b"></span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
      <div className="border-r col-span-3 flex flex-col h-full">
        <span className="h-16 border-b"></span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
      <div className="border-r col-span-3 flex flex-col h-full">
        <span className="h-16 border-b"></span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
      <div className="col-span-3 flex flex-col h-full">
        <span className="h-16 border-b"></span>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
    </div>
  );
};

export default Mainpage;
