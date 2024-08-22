import React, { FC } from "react";

export const InfoIcon: FC = (props:any) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={16} fill="#0B4141" />
    <path
      d="M15 11H17V13H15V11ZM15 15H17V21H15V15ZM16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16 24C11.59 24 8 20.41 8 16C8 11.59 11.59 8 16 8C20.41 8 24 11.59 24 16C24 20.41 20.41 24 16 24Z"
      fill="white"
    />
  </svg>
);



