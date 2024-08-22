import React from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { ITextBox } from "../../../interfaces/index";
import { TextBox } from "../out-values/text-box";

interface Props {
  data: ITextBox[];
}

export const WhyChooseUs: React.FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container>
        <Heading
          size="h4"
          className="mb-5 font-tiempos-text leading-6 text-primary uppercase"
        >
          Why choose Kip?
        </Heading>
        <Heading size="h2" className="mb-5">
          Cos we are paw-some.
        </Heading>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-6">
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
