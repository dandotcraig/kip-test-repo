import React, { FC, useState } from "react";
import { Plus } from "../../icons/plus";
import { Dog } from "../../icons/dog";
import { Paragraph } from "./paragraph";
import Expand from "react-expand-animated";
import MinusIcon from "../../icons/minus";
import { IPricing } from "../../all-locations/pricing/interface";

export const Faq = ({
  title,
  description,
  variant
}: IPricing) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-solid border-greenslate-250 px-5 py-4">
      <div
        className="flex items-center cursor-pointer "
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="mr-5 cursor-pointer">
          {open ? (
            <MinusIcon className={`${variant ? "stroke-white" : "stroke-green-slate-800"} `} />
          ) : (
            <Plus className={`${variant ? "fill-white" : "fill-green-slate-800"} `} />
          )}
        </div>
        <div className="mr-[12px]">
          <Dog className={`${variant ? "fill-white" : "fill-primary-dark"} `} />
        </div>
        <Paragraph
          className={`${
            variant ? "text-white" : "text-teal-950 "
          } font-bold font-mabry-pro text-base`}
        >
          {title}
        </Paragraph>
      </div>

      <Expand open={open} duration={150}>
        <Paragraph className={`${variant ? "text-white" : "text-teal-950"} ml-6 pt-2.5 `}>
          {description}
        </Paragraph>
      </Expand>
    </div>
  );
};
