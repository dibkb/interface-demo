import { SVGProps } from "@/types/svg";
import React from "react";

const Dots = (props: SVGProps) => {
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
          d="M3.92771 11.1582V11.158C3.92771 10.6884 4.09345 10.2896 4.42882 9.95427C4.76419 9.6189 5.1626 9.45351 5.63149 9.45408H5.63166C6.10127 9.45408 6.50004 9.61982 6.83541 9.95519C7.17078 10.2906 7.33617 10.689 7.33561 11.1579V11.158C7.33561 11.6276 7.16987 12.0264 6.83449 12.3618C6.49912 12.6971 6.10071 12.8625 5.63183 12.862H5.63166C5.16205 12.862 4.76328 12.6962 4.4279 12.3609C4.09253 12.0255 3.92714 11.6271 3.92771 11.1582ZM11.1578 9.45408H11.158C11.6276 9.45408 12.0264 9.61982 12.3617 9.95519C12.6971 10.2906 12.8625 10.689 12.8619 11.1579V11.158C12.8619 11.6276 12.6962 12.0264 12.3608 12.3618C12.0254 12.6971 11.627 12.8625 11.1581 12.862H11.158C10.6884 12.862 10.2896 12.6962 9.95422 12.3609C9.61885 12.0255 9.45346 11.6271 9.45403 11.1582V11.158C9.45403 10.6884 9.61977 10.2896 9.95514 9.95427C10.2905 9.6189 10.6889 9.45351 11.1578 9.45408ZM16.6841 9.45408H16.6843C17.1539 9.45408 17.5527 9.61982 17.888 9.95519C18.2234 10.2906 18.3888 10.689 18.3882 11.1579V11.158C18.3882 11.6276 18.2225 12.0264 17.8871 12.3618C17.5518 12.6971 17.1533 12.8625 16.6845 12.862H16.6843C16.2147 12.862 15.8159 12.6962 15.4805 12.3609C15.1452 12.0255 14.9798 11.6271 14.9803 11.1582V11.158C14.9803 10.6884 15.1461 10.2896 15.4815 9.95427C15.8168 9.6189 16.2152 9.45351 16.6841 9.45408Z"
          fill="#888888"
          stroke="white"
          stroke-width="0.276316"
        />
      </svg>
    </div>
  );
};

export default Dots;
