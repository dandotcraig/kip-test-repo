// components/Card.tsx

import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { IDetail } from "./interfaces";
import DetailCard from "../../shared/ui/detail-card";

interface Props {
  data: IDetail[];
}

export const TheDetails: FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container>
        <div className="rounded-xl">
          <Heading size="h4" as="h3" className="font-tiempos-text uppercase">
            Our Difference
          </Heading>
          <Heading size="h2" as="h3" className="my-5 font-bold">
            What we’re perfecting!
          </Heading>
          <div className="grid md:grid-cols-3 gap-6 ">
            {data.map((item, index) => (
              <DetailCard
                key={index}
                body={item.body}
                imageURL={item.imageURL}
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
