import { SVGProps } from "@/types/svg";
import React from "react";

const Pencil = (props: SVGProps) => {
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
          d="M14.0774 4.86834C14.6614 4.28704 15.6057 4.28814 16.1884 4.87079L17.8162 6.49855C18.3987 7.08112 18.3999 8.02527 17.8189 8.60932L8.46227 18.0137L4.67309 18.0137L4.67309 14.229L14.0774 4.86834Z"
          stroke="#888888"
          strokeWidth="1.38158"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8896 6.05786L16.6257 9.79395"
          stroke="#888888"
          strokeWidth="1.38158"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Pencil;
