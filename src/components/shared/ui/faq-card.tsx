import React from "react";
import { Plus } from "../../icons/plus";
import { Paragraph } from "./paragraph";
import Expand from "react-expand-animated";
import MinusIcon from "../../icons/minus";
import RichText from "../RichText";

export const FaqCard = ({ item, totalLength, index, isOpen, onClick }: any) => {
  return (
    <div
      className={`hover:bg-[#F4F4F5] transition-all duration-300 active:bg-[#D4D4D8] cursor-pointer ${
        totalLength - 1 === index
          ? "hover:rounded-b-xl"
          : "border-greenslate-250 border-b"
      } ${index === 0 ? "rounded-t-xl" : ""} `}
    >
      <div
        onClick={onClick}
        className="flex items-center cursor-pointer text-start py-4 px-4"
      >
        <div className="mr-5 cursor-pointer">
          {isOpen ? <MinusIcon /> : <Plus />}
        </div>

        <Paragraph className="text-teal-950 font-bold font-mabry-pro cursor-text">
          {item?.fields?.question ?? item?.question}
        </Paragraph>
      </div>

      <Expand open={isOpen} duration={150}>
        <div
          className={`${
            item?.answer ? "flex flex-col gap-y-3" : ""
          } ml-10 -mt-1.5 pb-4 text-[#718080] text-start text-base font-normal leading-normal font-mabry-pro faqCards-wraper`}
        >
          {item?.fields?.answer ? (
            <div
              className="!cursor-text"
              style={{
                display: "flex",
                gap: "8px",
                flexDirection: "column",
              }}
            >
              <RichText richText={item?.fields?.answer} />
            </div>
          ) : (
            <div
              className="!cursor-text"
              style={{
                display: "flex",
                gap: "8px",
                flexDirection: "column",
              }}
              dangerouslySetInnerHTML={{ __html: item?.answer ?? "" }}
            ></div>
          )}
        </div>
      </Expand>
    </div>
  );
};
