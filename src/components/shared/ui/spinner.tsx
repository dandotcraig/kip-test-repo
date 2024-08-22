import React, { FC } from "react";

interface Props {}

export const Spinner: FC<Props> = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        className="h-10 w-10"
        src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
        alt=""
      />
    </div>
  );
};
