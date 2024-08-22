import React, { FC } from "react";
import { Paragraph } from "./paragraph";
import { Heading } from "./heading";

const AboutDetailCard = ({
  title,
  body,
  backgroundColor,
  color,
}: any) => {
  return (
    <div
      className={`${
        backgroundColor ?? ""
      } rounded-xl p-6 `}
    >
      <Heading size="h5" className="text-start text-primary font-bold uppercase pb-6">
        {title}
      </Heading>
      <Paragraph className={`${color ?? ""}`}>{body}</Paragraph>
    </div>
  );
};

export default AboutDetailCard;
