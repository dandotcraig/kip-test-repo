import React, { FC } from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { LocationCard } from "../shared/ui/location-card";
import AllPagesReviews from "../common/reviewCards/AllPagesReview";
import { Paragraph } from "../shared/ui/paragraph";
interface Props {
  data: any;
}

export const AllLocations: FC<Props> = ({ data }) => {
  return (
    <Section className="">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(data ?? [])?.map((location: any, index: any) => (
            <LocationCard key={index} data={location} />
          ))}
        </div>
        {!data?.length && (
          <div className="flex items-center justify-center">
            <Paragraph>No location found...</Paragraph>
          </div>
        )}
      </Container>
      <AllPagesReviews />
    </Section>
  );
};
