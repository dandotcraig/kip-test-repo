import React from "react";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";

interface Props {
  title: string;
  paragraphs: string[];
}

export const TextBox: React.FC<Props> = ({ title, paragraphs }) => {
  return (
    <div>
      <Heading size="h5" className="uppercase mb-5 text-primary">
        {title}
      </Heading>
      {paragraphs?.map((p, idx) => {
        return (
          <Paragraph
            key={idx}
            className={`${
              idx === paragraphs?.length - 1 ? "" : "mb-6"
            } text-primary`}
          >
            {p}
          </Paragraph>
        );
      })}
    </div>
  );
};
