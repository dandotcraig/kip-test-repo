// components/Card.tsx

import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import LocationDetailCard from "./loaction-detail-cards";

interface Props {
  data: any;
}

export const LocationDetails: FC<Props> = ({ data }: any) => {
  return (
    <Section>
      <Container>
        <div className="rounded-xl">
          <Heading size="h2" as="h3" className="mb-5">
            {data?.heading}
          </Heading>
          <Heading size="h4" as="h4" className="font-tiempos-text uppercase">
            {data?.title ?? ""}
          </Heading>
          {data?.tagline && (
            <Heading size="h2" as="h5" className="my-5 font-bold">
              {data?.tagline}
            </Heading>
          )}

          <div className="grid md:grid-cols-3 gap-6 ">
            {data?.features?.map((item: any, index: number) => (
              <LocationDetailCard
                key={index}
                body={item?.fields?.description}
                title={item?.fields?.title}
                backgroundColor={
                  (index === 0 && "bg-blue-150") ||
                  (index === 1 && "bg-yellow-75") ||
                  (index === 2 && "bg-pink-150")
                }
                color={
                  index === 0
                    ? "text-blue-750"
                    : index === 1
                    ? "text-purple-900"
                    : index === 2
                    ? "text-pink-750"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
