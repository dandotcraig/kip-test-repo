import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { ICardWithImage } from "./interfaces";
import { CardWithImage } from "../../shared/ui/card-with-image";
interface Props {
  data: ICardWithImage;
}

export const WhatMakesDifferent: FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container>
        <CardWithImage data={data} />
      </Container>
    </Section>
  );
};
