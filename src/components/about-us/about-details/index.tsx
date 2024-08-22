// components/Card.tsx

import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { IDetail } from "./interfaces";
import AboutDetailCard from "../../shared/ui/about-details-cards";

interface Props {
  data: IDetail;
}

export const AboutDetails: FC<Props> = ({ data }: any) => {
  return (
    <Section>
      <Container>
        <div className="p-5  bg-sky-200 rounded-xl">
          <Heading size="h4" className="font-tiempos-text uppercase">
            {data?.title}
          </Heading>
          <Heading size="h2" className="my-5 font-bold">
            {data?.tagline}
          </Heading>
          <div className="grid md:grid-cols-3 gap-6 ">
            {data?.data?.map((item: any, index: number) => (
              <AboutDetailCard
                key={index}
                body={item.body}
                title={item.title}
                backgroundColor={item.backgroundColor}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
