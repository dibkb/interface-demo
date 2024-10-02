import { SVGProps } from "@/types/svg";
import React from "react";

const Expand = (props: SVGProps) => {
  return (
    <div>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.0525 17.6054H5.44727V13.0002M13.7367 4.71069H18.342V9.31596"
          stroke="#888888"
          stroke-width="1.38158"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Expand;
