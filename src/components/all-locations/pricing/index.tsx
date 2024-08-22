import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import PricingCard from "../../shared/ui/pricingCard";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";

export type Field = {
  faq: string;
  price: string;
  tag: string;
  title: string;
  variant: string;
  logo: any;
  cta: any;
  faqDescription: any;
  description: any;
};
export type Fields = {
  fields: Field;
};
export type PriceCard = {
  tagline: string;
  title: string;
  description: string;
  cards: Fields[];
};
interface Props {
  data: PriceCard;
}
export const Pricing: FC<Props> = ({ data }) => {
  const FilterMostPopular = data?.cards?.filter((item) => item?.fields?.tag?.includes("Popular"))
  const FilterNotMostPopular = data?.cards?.filter((item) => !item?.fields?.tag?.includes("Popular"))
  if (FilterMostPopular.length === 1) {
    FilterNotMostPopular.splice(1, 0, ...FilterMostPopular);
  } else {
    console.log("No or multiple 'most popular' cards found");
  }
  const OrderedArray = FilterNotMostPopular

  return (
    <Section>
      <Container>
        <div>
          <div className="flex justify-center items-center mb-4">
            <Paragraph className="font-normal leading-5 text-sm text-center font-mabry-pro  bg-sky-85 rounded-2xl px-3 py-1">
              {data?.tagline}
            </Paragraph>
          </div>
          <Heading
            size="h2"
            as="h3"
            className="text-center mb-6 font-bold tracking-wider"
          >
            {data?.title}
          </Heading>
          <Heading size="h5" as="h4" className="text-center leading-6 text-primary ">
            {data?.description}
          </Heading>
        </div>
        <div className="hidden sm:block">
          <div className=" pt-3 md:px-8.5 grid sm:grid-cols-2 lg:grid-cols-3  gap-x-5 gap-y-4">
            { FilterMostPopular.length > 0 && OrderedArray?.filter((item)=>item.fields)?.map((item: Fields, index: number) => {
              return (
                <PricingCard
                  key={index}
                  tag={item?.fields?.tag}
                  imgSrc={item?.fields?.logo?.fields?.file?.url}
                  imgAlt={item?.fields?.logo?.fields?.title}
                  title={item?.fields?.title}
                  price={item?.fields?.price}
                  CTA={item?.fields?.cta?.fields?.text}
                  CTALink={item?.fields?.cta?.fields?.link}
                  faqTitle={item?.fields?.faq}
                  faqDescription={item?.fields?.faqDescription}
                  variant={item?.fields?.variant}
                  description={item?.fields?.description}
                />
              );
            })}
            {    FilterMostPopular.length === 0  && FilterNotMostPopular?.filter((item)=>item.fields)?.map((item: Fields, index: number) => {
                return (
                  <PricingCard
                    key={index}
                    tag={item?.fields?.tag}
                    imgSrc={item?.fields?.logo?.fields?.file?.url}
                    imgAlt={item?.fields?.logo?.fields?.title}
                    title={item?.fields?.title}
                    price={item?.fields?.price}
                    CTA={item?.fields?.cta?.fields?.text}
                    CTALink={item?.fields?.cta?.fields?.link}
                    faqTitle={item?.fields?.faq}
                    faqDescription={item?.fields?.faqDescription}
                    variant={item?.fields?.variant}
                    description={item?.fields?.description}
                  />
                );
              })}
          </div>
        </div>
        <div className="sm:hidden block">
          <div className=" pt-3 md:px-8.5 grid sm:grid-cols-2 lg:grid-cols-3  gap-x-5 gap-y-4">
            {data?.cards?.filter((item)=>item.fields)?.map((item: Fields, index: number) => {
              return (
                <PricingCard
                  key={index}
                  tag={item?.fields?.tag}
                  imgSrc={item?.fields?.logo?.fields?.file?.url}
                  imgAlt={item?.fields?.logo?.fields?.title}
                  title={item?.fields?.title}
                  price={item?.fields?.price}
                  CTA={item?.fields?.cta?.fields?.text}
                  CTALink={item?.fields?.cta?.fields?.link}
                  faqTitle={item?.fields?.faq}
                  faqDescription={item?.fields?.faqDescription}
                  variant={item?.fields?.variant}
                  description={item?.fields?.description}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
