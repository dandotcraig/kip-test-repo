import React from "react";
import { Heading } from "./heading";
import { Star } from "../../icons/star";
import { Paragraph } from "./paragraph";
import useBrowserWidth from "../../../hooks/useBrowserWidth";

const ReviewCard: React.FC<any> = ({ icon, title, description }) => {
  const width = useBrowserWidth();

  return (
    <div
      className={`${
        width < 450 ? "h-[200px]" : "h-[230px]"
      } p-[16px] xl:p-[24px] rounded-xl  shadow-xl`}
    >
      <div className="flex justify-between items-center">
        <Heading size="h6" as="h3" className="xl:text-[25px] truncate">
          {title}
        </Heading>
        <span>{icon}</span>
      </div>
      <div className="flex gap-0 mt-[8px]">
        <Star width="16" height="16" />
        <Star width="16" height="16" />
        <Star width="16" height="16" />
        <Star width="16" height="16" />
        <Star width="16" height="16" />
      </div>
      <div className="mt-[8px]">
        <Paragraph className="lines_clamp text-[14px] xl:text-[16px] ">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default ReviewCard;
