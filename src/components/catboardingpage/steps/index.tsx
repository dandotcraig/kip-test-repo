import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import ServiceStepCard from "../../shared/ui/serviceStepCard";
import SectionSeparator from "../../common/section-separator";
interface Props {
  data: any;
}
export const StepsCards: FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container className="max-w-[984px]">
        <div className="grid sm:grid-cols-2 gap-4">
          {data?.map((item: any, index: number) => (
            <ServiceStepCard
              key={index}
              name={item.name}
              detailPet={item.detail}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          ))}
        </div>
      </Container>
      <SectionSeparator />
    </Section>
  );
};
