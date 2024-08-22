import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Paragraph: React.FC<Props> = ({
  className,
  children,
  style,
}: any) => {
  const mergedClassName = twMerge(
    `${
      !style && "text-teal-950"
    }  text-base font-normal leading-normal font-mabry-pro`,
    className
  );

  return (
    <p className={mergedClassName} style={style}>
      {children}
    </p>
  );
};
