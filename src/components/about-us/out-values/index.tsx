import React from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { TextBox } from "./text-box";
import { ITextBox } from "../../../interfaces/index";

interface Props {
  data: ITextBox[];
}

export const OutValues: React.FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container>
        <Heading
          size="h4"
          className="mb-5 font-tiempos-text leading-6 text-primary uppercase"
        >
          Our Values
        </Heading>
        <Heading size="h2" className="mb-5 ">
          At Kip, we provide pets with the best care and enrichment.
        </Heading>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {data?.map((box, idx) => {
            return (
              <TextBox
                key={idx}
                title={box?.title}
                paragraphs={box?.paragraphs}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
