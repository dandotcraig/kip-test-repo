import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?:string;
}

export const Section: FC<Props> = ({ children,className }) => {
  return <section className={`${twMerge(' ', className)}`}>{children}</section>;
};
