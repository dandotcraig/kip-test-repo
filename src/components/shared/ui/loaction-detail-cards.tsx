import React, { FC } from "react";
import { Paragraph } from "./paragraph";
import { Heading } from "./heading";

const LocationDetailCard = ({ title, body, backgroundColor, color }: any) => {
  
  return (
    <div className={`${backgroundColor ?? ""} rounded-xl p-6 `}>
      <Heading
        size="h5"
        as="h6"
        className={`text-start ${color} font-bold uppercase pb-6`}
      >
        {title}
      </Heading>
      <Paragraph className={`${color ?? ""}`}>{body}</Paragraph>
    </div>
  );
};

export default LocationDetailCard;
