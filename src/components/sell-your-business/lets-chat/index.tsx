import React from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";

export const LetsChat = () => {
  return (
    <Section>
      <Container>
        <div className="text-center py-0 md:py-10">
          <Heading size="h4">Lets chat </Heading>
          <Heading size="h2" className="font-bold mt-2 tracking-wider">Get in contact</Heading>
          <Paragraph className="mt-4">Contact Us</Paragraph>
          <Paragraph>General enquiries: 1800 951 926</Paragraph>
          <Paragraph>Centre enquiries: Click Here</Paragraph>
          <Paragraph>Email: Hello@Kip.com.au</Paragraph>
        </div>
      </Container>
    </Section>
  );
};
