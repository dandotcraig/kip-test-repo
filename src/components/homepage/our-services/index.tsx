import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { IServiceCard } from "./interfaces";
import { ServicesCard } from "../../shared/ui/service-card";
interface Props {
  data: { cards: IServiceCard[] };
}

const OurServices: FC<Props> = ({ data }: any) => {

  return (
    <>
      {!!data?.cards?.length && (
        <Section>
          <Container className="px-4">
            <div className=" md:px-0  sm:py-0 ">
              <Heading
                size="h4"
                as="h3"
                className="text-3xl sm:text-4.5xl mb-5  text-primary leading-7 ml-4 font-[700] font-mabry-pro"
              >
                {/* {data.?Heading} */}
                {"What we do"}
              </Heading>
              <div className={`grid md:grid-cols-2 gap-6`}>
                {(data?.cards ?? [])?.map((item: any, index: number) => (
                  <ServicesCard
                    key={index}
                    title={item?.fields?.title}
                    tagline={item?.fields?.tagline}
                    logoURL={item?.fields?.image?.fields?.file?.url}
                    body={item?.fields?.descriptionA}
                    CTA={item?.fields?.cta?.fields?.text}
                    id={item?.fields?.cta?.fields?.link}
                  />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};

export default OurServices;
