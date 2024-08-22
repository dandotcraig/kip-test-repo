import React from "react";
import { Layout } from "../components/layout";
import { Section } from "../components/shared/section";
import { Container } from "../components/shared/container";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import ContentBox from "../components/common/content-box";
import { FaqCards } from "../components/homepage/faq-cards";
import { Heading } from "../components/shared/ui/heading";
import { Paragraph } from "../components/shared/ui/paragraph";
import StepCard from "../components/shared/ui/stepCard";
import { IMeetOurTeamsCard } from "../components/all-locations/meet-our-team/interfaces";
import { ServicesWidthCardsImage } from "../components/shared/ui/services-width-card-image";
import { EmptyCards } from "../components/homepage/emptyCards";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import { Helmet } from "react-helmet";
import { SectionCards } from "./location";
import SectionSeparator from "../components/common/section-separator";
import OurServices from "../components/homepage/our-services";
import { StepsCards } from "../components/catboardingpage/steps";

const ServicesComp = (props: any) => {
  let serviceCards = [];
  if (props?.pageContext?.slug === "cat-boarding" || props?.pageContext?.slug === "dog-boarding") {
   serviceCards = props?.pageContext?.ourServicesCards.filter((service: any) => {
      return service?.fields?.title !== "DOG DAYCARE"
    } )
  } else {
    serviceCards = props?.pageContext?.ourServicesCards.filter((service: any) => {
      return service?.fields?.title !== "PICK-UP AND DROP-OFF"
    } )
  }
  return (
    <>
      <OurServices data={{ cards: serviceCards }} />
      <SectionSeparator />
    </>
  );
};

const ServiceCardsComp = (props: any) => {
  return (
    <>
      {props?.data?.map((item: any, idx: number) => {
        return (
          <Section key={idx}>
            <Container className="flex flex-col gap-y-12">
              <CardWithImage
                data={item}
                titleClassName="capitalize"
                wrapperClassName={`${
                  item?.isFullWidth ? "lg:grid-cols-1" : ""
                }`}
                parent="service"
              />
            </Container>
            <SectionSeparator />
          </Section>
        );
      })}
    </>
  );
};

const ReadyForStayComp = (props: any) => {
  return (
    <Section>
      <Container className="px-0 md:px-0">
        <div>
          <ContentBox
            data={props.data}
            backgroundColor={props.data?.backgroundColor ?? "bg-sky-500"}
            textColor={props.data?.textColor ?? ""}
          />
        </div>
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const FaqsComp = (props: any) => {
  return (
    <Section>
      <Container className="px-0 md:px-0">
        <FaqCards
          title="FAQs"
          data={props.data}
          slug={props.pageContext.slug}
        />
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const HeroComp = (props: any) => {
  return (
    <Section>
      <Container className="flex flex-col ">
        <CardWithImage
          titleClassName="normal-case"
          data={props?.data}
          parent="service"
        />
      </Container>
      <SectionSeparator />
    </Section>
  );
};
const TitleComp = (props: any) => {
  return (
    <Section>
      <Container>
        <Heading
          size="h2"
          as="h3"
          className="text-[#122B2B] font-bold tracking-[0.8px] text-center"
        >
          {props?.data?.title}
        </Heading>
      </Container>
      <SectionSeparator />
    </Section>
  );
};
const ServicesHeroComp = (props: any) => {
  return (
    <Section>
      <Container className="flex flex-col ">
        <ServicesWidthCardsImage data={props?.data} />
      </Container>
      <SectionSeparator />
    </Section>
  );
};
const WhatToExpectComp = (props: any) => {
  return (
    <Section>
      <Container>
        <div className="">
          <Heading
            as="h4"
            size="h4"
            className="mb-4 text-center font-bold leading-1 text-green-slate-800"
          >
            {props.data?.title}
          </Heading>
          <Paragraph className="text-green-slate-800">
            {props.data?.description}
          </Paragraph>
        </div>
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const MeetOurTeamComp = (props: any) => {
  return (
    <Section>
      <Container className="p-6">
        <Heading
          size="h2"
          className="text-green-slate-800 leading-12 font-bold text-center font-mabry-pro"
        >
          {props.data?.title ?? ""}
        </Heading>
        <Paragraph className="mt-4">{props.data?.description ?? ""}</Paragraph>
        <div className="max-w-2.5xl sm:mx-auto mt-6 grid sm:grid-cols-3  gap-4 mb-4 ">
          {props.data?.teamCards?.map(
            (item: IMeetOurTeamsCard, index: number) => (
              <StepCard
                key={index}
                name={item.name}
                tagline={item?.tagline}
                detail={item.detail}
                imgSrc={item.imgSrc}
                imgAlt={item?.imgAlt ?? ""}
              />
            )
          )}
        </div>
      </Container>
      <SectionSeparator />
    </Section>
  );
};
const ServiceLocations = (props: any) => {
  return (
    <div>
      <SectionCards data={props?.serviceLocations} />
      <SectionSeparator />
    </div>
  );
};

const WhatMakesKipDifferentComp = (props: any) => {
  return (
    <Section>
      <Container className="px-4 md:px-6">
        <Heading
          size="h2"
          className="text-green-slate-800 leading-12 font-bold text-center font-mabry-pro"
        >
          {props.data?.title ?? ""}
        </Heading>
        <Paragraph className="mt-4">{props.data?.description ?? ""}</Paragraph>
        <div className="mt-6 grid md:grid-cols-4  gap-2 mb-4">
          {props.data?.differenceCards?.map(
            (item: IMeetOurTeamsCard, index: number) => (
              <StepCard
                key={index}
                name={item.name}
                detail={item.detail}
                imgSrc={item.imgSrc}
                imgAlt={item?.imgAlt ?? ""}
              />
            )
          )}
        </div>
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const GoogleReviews = (props: any) => {
  return (
    <>
      <AllPagesReviews data={props?.pageContext?.reviews ?? []} />
      <SectionSeparator />
    </>
  );
};

export default function SingleServicePage({ pageContext }: any) {
  const componentMap: any = {
    hero: HeroComp,
    services: ServicesComp,
    serviceSteps: StepsCards,
    serviceCards: ServiceCardsComp,
    readyForStay: ReadyForStayComp,
    title: TitleComp,
    faqs: FaqsComp,
    whatToExpect: WhatToExpectComp,
    meetOurTeam: MeetOurTeamComp,
    whatMakesKipDifferent: WhatMakesKipDifferentComp,
    "service locations": ServiceLocations,
    "google reviews": GoogleReviews,
  };
  
  return (
    <Layout>
      <Helmet>
        <title>{pageContext?.seo?.title}</title>
        <meta
          name="description"
          content={pageContext?.seo?.description ?? ""}
        />
        <meta name="title" content={pageContext?.seo?.description ?? ""} />
        <link rel="canonical" href={pageContext?.seo?.canonicalLink ?? ""} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageContext?.seo?.title} />
        <meta
          property="og:description"
          content={pageContext?.seo?.description ?? ""}
        />
        <meta
          property="og:url"
          content={pageContext?.seo?.canonicalLink ?? ""}
        />
        <meta property="og:site_name" content="Kip" />
      </Helmet>
      <div className="pt-6">
        {(pageContext?.components ?? [])?.map((item: any) => {
          const DynamicComponent = componentMap[item?.name];
          return (
            <DynamicComponent
              data={item?.data}
              serviceLocations={{
                cards:
                  pageContext?.serviceLocations?.map((_location: any) => {
                    return {
                      fields: {
                        ..._location?.fields?.card?.fields,
                      },
                    };
                  }) ?? [],
              }}
              pageContext={pageContext}
            />
          );
        })}
      </div>

      <InstagramReviews instagramFeeds={pageContext?.instagramFeeds?.data??[]} />
      <SectionSeparator />
      <EmptyCards />
      <SectionSeparator />
    </Layout>
  );
}
