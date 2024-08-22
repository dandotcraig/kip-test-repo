// components/UniqueTraits.tsx

import React, { FC } from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { ICardWithImage } from "./what-makes-different/interfaces";
import { CardWithImage } from "../shared/ui/card-with-image";
interface Props {
  data: ICardWithImage;
}

const DogDaycare: FC<Props> = ({ data }) => {
  return (
    <Section>
      <Container>
        <div className="">
          <CardWithImage
            data={data}
            wrapperClassName="gap-x-6"
            cardClassName="sm:p-6 pb-6 sm:pb-0"
            titleSize="h3"
            titleClassName="mb-4 font-bold text-green-slate-800"
          />
        </div>
      </Container>
    </Section>
  );
};

export default DogDaycare;
