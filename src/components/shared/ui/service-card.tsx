import React, { FC } from "react";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { Button } from "./button";
import Chevron from "../../icons/chevron";
import { IServiceCard } from "../../homepage/our-services/interfaces";
import { Link } from "gatsby-link";

export const ServicesCard: FC<IServiceCard> = ({
  title,
  tagline,
  logoURL,
  body,
  CTA,
  id,
}) => {
  const COLORS: any = {
    "PICK-UP AND DROP-OFF": {
      backgroundColor: "#d2ded6",
      textColor: "#152953",
    },
    "DOG TRAINING": { backgroundColor: "#f8e08e", textColor: "#512d6d" },
    "DOG GROOMING": { backgroundColor: "#ffbe95", textColor: "#152953" },
    "DOG DAYCARE": { backgroundColor: "#c3d7ee", textColor: "#152953" },
    "DOG BOARDING": { backgroundColor: "#ffdbd7", textColor: "#ac003e" },
    "CAT BOARDING": { backgroundColor: "#f4e0f7", textColor: "#235140" },
  };
  const defaultColor = {
    backgroundColor: "#fff",
    textColor: "#000",
  };
  let bgColor =
    COLORS[title ?? ""]?.backgroundColor ?? defaultColor.backgroundColor;
  let txtColor = COLORS[title ?? ""]?.textColor ?? defaultColor.textColor;
  return (
    <div
      className={` relative border border-solid border-neutral-200 shadow-sm rounded-xl p-5`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between">
        <div>
          <h3
            style={{ color: txtColor }}
            className="heading text-xl  font-bold font-mabry-pro leading-6 uppercase mb-1"
          >
            {title?.toUpperCase()}
          </h3>
          <Paragraph style={{ color: txtColor }}>{tagline}</Paragraph>
        </div>
        {/* <div className="w-16 h-64 absolute top-2 right-2">
          <img
            src={logoURL}
            alt={title}
            className="w-full h-auto  object-fit"
          />
        </div> */}
      </div>
      <Paragraph className={` my-4`} style={{ color: txtColor }}>
        {body}
      </Paragraph>
      <Link to={`/services/${id}`}>
        <Button
          variant="none"
          style={{ color: txtColor }}
          className={`green-slate-800 hover:opacity-50 gap-x-2 flex items-center font-mabry-pro `}
        >
          {CTA} <Chevron />
        </Button>
      </Link>
    </div>
  );
};
