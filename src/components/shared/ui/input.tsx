import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

const Input: FC<any> = ({
  children,
  className,
  type,
  onChange,
  value,
  onFocus,
}: any) => {
  return (
    <input
      type={type ?? "text"}
      value={value ?? ""}
      onChange={onChange}
      onFocus={onFocus}
      className={`${twMerge(
        "font-mabry-pro placeholder:text-neutral-500 focus:outline-none text-neutral-500 w-full p-3.5 rounded-xl border border-neutral-200",
        className
      )}`}
      placeholder={children}
    />
  );
};

export default Input;
