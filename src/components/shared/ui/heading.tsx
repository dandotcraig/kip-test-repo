import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const heading = cva("heading", {
  variants: {
    size: {
      h1: ["text-4xl lg:text-5xl", "text-green-slate-800", "font-bold"],
      h2: ["text-3xl sm:text-4.5xl", "text-primary", "font-semibold"],
      h3: ["text-2xl md:text-3xl", "text-green-slate-800", "font-semibold"],
      h4: [" text-2xl", "text-teal-950", "font-normal"],
      h5: [" text-xl ", "text-purple-900", "font-bold"],
      h6: ["text-lg", "text-green-slate-800", "font-semibold"],
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

export interface Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"|"span";
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: React.FC<Props> = ({
  className,
  size = "h1",
  as = "h1",      
  ...props
}) => {
  const el = React.createElement(as, {
    ...props,
    className: twMerge(heading({ size }), "font-mabry-pro", className),
  });
  return el;
};
