import React from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { InformationCard } from "./information-card";

export const SearchOurInformation = ({ data }: any) => {
  return (
    <Section>
      <Container>
        <div id="search-our-info-hub">
          <div className="flex justify-center" >
          <Heading className="text-black"  size="h2" as="h3">
            Search our Information hub{" "}
          </Heading>

          </div>

          {/* <div className="my-12">
            <div className="flex justify-between gap-x-4 items-center">
              <Paragraph className="text-sm font-bold">
                Try searching ‘Vaccination information’
              </Paragraph>
              <Paragraph className="text-sm text-greenslate-500">
                Secondary
              </Paragraph>
            </div>
            <Input className="mt-4 shadow-sm">Search by keyword</Input>
            <Paragraph className="text-neutral-400 text-sm mt-2.5">
              Can’t find your answer?{" "}
              <Link to="/contact">Get in contact with us</Link>
            </Paragraph>
          </div> */}
          <div className="grid md:grid-cols-3 mt-5 gap-4 items-shrink">
            {data?.map((item: any, index: number) => (
              <div key={index}>
                <InformationCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
