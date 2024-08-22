import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?:string;
}

export const Container: FC<Props> = ({ children,className }) => {
  return <div className={twMerge('container mx-auto px-4 md:px-6', className)}>{children}</div>;
};