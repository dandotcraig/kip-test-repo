import React from "react";

export const Star = (props: any) => {
  return (
    <svg
      width={props?.width ?? '24'}
      height={props?.width ?? '22'}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0L14.6803 8.31088L23.4127 8.2918L16.3368 13.4091L19.0534 21.7082L12 16.56L4.94658 21.7082L7.66318 13.4091L0.587322 8.2918L9.3197 8.31088L12 0Z"
        fill="#F8E08E"
        {...props}
      />
    </svg>
  );
};
