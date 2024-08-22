import React, { FC } from "react";

interface IProps {
  className?: string
  onClick?:()=>void
}
 const MinusIcon: FC<IProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-minus"
    width={12}
    height={12}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#122B2B"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
  </svg>
);

export default MinusIcon;
