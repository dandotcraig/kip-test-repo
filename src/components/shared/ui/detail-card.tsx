import React, { FC } from "react";
import { Paragraph } from "./paragraph";
import { IDetail } from "../../homepage/the-details/interfaces";

const DetailCard: FC<IDetail> = ({
  imageURL,
  body,
  backgroundColor,
  color,
}) => {
  return (
    <div
      className={`${
        backgroundColor ?? ""
      } rounded-xl p-6 flex flex-col gap-y-6 justify-center items-center`}
    >
      <div className=" w-24 h-24 flex items-center justify-center ">
        <img src={imageURL??''} alt="" className="w-full h-auto   object-fit" />
      </div>
      <Paragraph className={`${color ?? ""}`}>{body}</Paragraph>
    </div>
  );
};

export default DetailCard;
