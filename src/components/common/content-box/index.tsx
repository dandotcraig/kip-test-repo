// components/Card.tsx

import React, { FC, ReactNode } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";
import { IContentBox } from "../../teamspage/bios/interface";
import { Button } from "../../shared/ui/button";
import { Link } from "gatsby-link";

interface Props {
  data: IContentBox;
  textColor?: string;
  backgroundColor?: string;
}

const ContentBox: FC<Props> = ({ data, textColor, backgroundColor }) => {
  return (
    <Section>
      <Container>
        <div
          className={`flex flex-col items-center pt-6 px-6 rounded-xl ${
            backgroundColor ?? "bg-bone-200"
          }`}
        >
          {data?.title && (
            <Heading
              size="h2"
              as="h3"
              className={`font-bold mb-4 text-center ${
                textColor ?? "text-primary"
              }`}
            >
              {data?.title}
            </Heading>
          )}
          {data?.heading && (
            <Heading
              size="h2"
              as="h3"
              className={`font-bold mb-4 text-center ${
                textColor ?? "text-primary"
              }`}
            >
              {data?.heading}
            </Heading>
          )}

          {data?.description && (
            <Heading
              size="h4"
              as="h3"
              className={`text-[16px] text-center  ${
                textColor ?? "text-primary"
              }`}
            >
              {data?.description}
            </Heading>
          )}
          {data?.sub_title && (
            <Heading
              size="h5"
              as="h3"
              className={` mb-4 ${textColor ?? "text-primary"} `}
            >
              {/* {data?.sub_title} */}
            </Heading>
          )}
          <div
            className={` mb-4 text-left lg:text-center ${
              textColor ?? "text-purple-900"
            } text-base font-mabry-pro `}
            dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
          ></div>
          {data?.button?.name && (
            <div>
              <Link to={data?.button?.link}>
                <Button variant="orange">{data?.button?.name}</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default ContentBox;
