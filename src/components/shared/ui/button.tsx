import classNames from "classnames";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import React from "react";

const link = cva("link", {
  variants: {
    variant: {
      primary: [
        "bg-primary",
        "font-bold",
        "text-white",
        "rounded-xl",
        "inline-block",
        "px-4 py-3.5",
      ],
      orange: [
        "bg-secondary  font-bold text-white rounded-xl inline-block px-4 py-3.5 text-base leading-[1]",
      ],
      none: ["bg-none font-bold inline-block text-base "],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof link> & {
    loading?: boolean;
  };

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  loading = false,
  style,
  ...props
}) => {
  const cn = twMerge(
    link({ variant }),
    `${
      variant === "orange" && "hover:bg-[#5F062F] active:bg-opacity-50    "
    } transition-all duration-300 hover:bg-opacity-90`,
    className,
    classNames({
      "p-0 border-0 flex justify-center align-center  bg-white hover:bg-white transition-colors ":
        loading,
    })
  );
  return (
    <button
      className={cn}
      {...props}
      disabled={props.disabled || loading}
      style={style ?? undefined}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    as?: "a" | any;
  };

export const Anchor: FC<AnchorProps> = ({
  children,
  className = "",
  variant = "primary",
  as = "a",
  ...props
}) => {
  const cn = twMerge(
    "disabled:hover:bg-primary disabled:hover:text-white cursor-pointer transition-colors",
    link({ variant }),
    className
  );
  return React.createElement(as, { className: cn, ...props }, children);
};
