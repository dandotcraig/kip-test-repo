import React, { FC } from "react";
import StepCard from "../../../shared/ui/stepCard";
import { ITeamsCard } from "./interfaces";
import { Container } from "../../../shared/container";

interface Props {
  data: ITeamsCard[];
}
export const OurTeamsCards: FC<Props> = ({ data }) => {
  return (
    <Container>
      <div className=" grid md:grid-cols-  gap-4">
      {data?.map((item, index) => (
        <StepCard
          key={index}
          name={item.name}
          detail={item.detail}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
        />
      ))}
    </div>
    </Container>
  
  );
};
