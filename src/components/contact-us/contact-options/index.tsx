import React from "react";
import { Section } from "../../shared/section";
import { Heading } from "../../shared/ui/heading";
import { Container } from "../../shared/container";
import { OptionCard } from "../option-card";

export const ContactOptions = ({ data }: any) => {
  return (
    <Section>
      <Container>
        <Heading
          as="h5"
          size="h5"
          className="font-mabry-pro font-bold leading-6 mb-5 text-green-slate-800"
        >
          All other questions
        </Heading>
        <Heading
          as="h3"
          size="h2"
          className="text-primary font-mabry-pro font-bold mb-5"
        >
          Contact options
        </Heading>
        <div className=" w-full grid md:grid-cols-3 gap-6">
          {data?.map((item: any, index: number) => {
            return <OptionCard data={item} key={index} />;
          })}
        </div>
      </Container>
    </Section>
  );
};
