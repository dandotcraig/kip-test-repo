import React, { FC } from "react";
import { Layout } from "../components/layout";
import ContentBox from "../components/common/content-box";
import OurServices from "../components/homepage/our-services";
import { EmptyCards } from "../components/homepage/emptyCards";
import { Pricing } from "../components/all-locations/pricing";
import { Hero } from "../components/all-locations/hero";
import { Section } from "../components/shared/section";
import { Container } from "../components/shared/container";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import { Heading } from "../components/shared/ui/heading";
import StepCard from "../components/shared/ui/stepCard";
import { LocationDetails } from "../components/shared/ui/locationDetail";
import { LocationFaqCards } from "../components/all-locations/location-faqs";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { LocationCard } from "../components/shared/ui/location-card";
import reviewsData from "../data/reviews.json";
import { ALL_LOCATIONS_DATA } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";

const OurServicesComp: FC<any> = ({ data }: any) => {
  return (
    <>
      <OurServices data={data} />
      <SectionSeparator />
    </>
  );
};

const StepperComp: FC<any> = ({ data, slug }: any) => {
  return (
    <Section>
      <Container className="px-4 md:px-6">
        <div
          className={` ${data?.stepper?.length === 1 && "single-meet-card"} ${
            data?.stepper?.length === 2 && "double-meet-card"
          } ${
            data?.stepper?.length > 2 &&
            " lg:mt-6 grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4"
          }  `}
        >
          {data?.stepper?.map((item: any, index: number) => (
            <StepCard
              key={index}
              name={item?.fields?.title}
              detail={item?.fields?.body}
              imgSrc={item?.fields?.image?.fields?.file?.url}
              imgAlt={item?.fields?.image?.fields?.title ?? ""}
              slug={slug}
            />
          ))}
        </div>
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const OurServicesDetails: FC<any> = ({ data }: any) => {
  return (
    <>
      <LocationDetails data={data} />
      <SectionSeparator />
    </>
  );
};

const ServiceWithImage: FC<any> = ({ data, rate, slug, googleMapsLinkEmbed }: any) => {
  return (
    <Section>
      <Container className="px-0 md:px-0">
        <Hero data={data} rate={rate} slug={slug} googleMapsLinkEmbed={googleMapsLinkEmbed} />
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const TextWithImage: FC<any> = ({ data, slug }: any) => {
  return (
    <Section>
      <Container className="flex flex-col ">
        <CardWithImage
          titleClassName="normal-case"
          data={data}
          slug={slug}
          parent="location"
        />
      </Container>
      <SectionSeparator />
    </Section>
  );
};
const HeadingSec: FC<any> = ({ data }: any) => {
  return (
    <Section>
      <Container>
        <Heading
          size="h2"
          as="h3"
          className={`text-[#122B2B] font-bold tracking-[0.8px] ${
            data?.title === "Dog Training Programs Available" ? "mb-0" : "mb-5"
          } text-center`}
        >
          {data?.title}
        </Heading>
      </Container>
      {data?.title === "Dog Training Programs Available" && (
        <SectionSeparator />
      )}
    </Section>
  );
};

const ImageGalleryComp: FC<any> = () => {
  return (
    <Section>
      <Container>
        <EmptyCards />
      </Container>
      <SectionSeparator />
    </Section>
  );
};

const ContentBoxComp: FC<any> = ({ data }: any) => {
  return (
    <Section>
      <Container>
        <ContentBox
          textColor={data?.textColor}
          backgroundColor={data?.backgroundColor}
          data={data}
        />
      </Container>
      <SectionSeparator />
    </Section>
  );
};
export const SectionCards: FC<any> = ({ data }: any) => {
  return (
    <Section>
      <Container>
        {!!data?.cards?.length && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.cards
              .map((card: any) => {
                let reviews = reviewsData?.allLocationsReviews?.find(
                  (allReviews) =>
                    allReviews?.place_details?.name?.toLowerCase() ===
                    ALL_LOCATIONS_DATA[
                      card?.fields?.locationPageSlug
                    ]?.name?.toLowerCase()
                );
                return {
                  ...card?.fields,
                  name: card?.fields?.address ?? "",
                  gallery:
                    card?.fields?.images?.length > 0
                      ? card?.fields?.images?.map((img: any) => {
                          return {
                            image: img?.fields?.file?.url ?? "",
                          };
                        })
                      : [],
                  logos:
                    card?.fields?.services?.length > 0
                      ? card?.fields?.services?.map((img: any) => {
                          return {
                            icon: img?.fields?.serviceLogo?.fields?.file?.url,
                            value: img?.fields?.service?.fields?.serviceName,
                          };
                        })
                      : [],
                  path: card?.fields?.locationPageSlug,
                  rating: reviews?.totals?.average_rating,
                };
              })
              ?.map((location: any, index: any) => (
                <LocationCard key={index} data={location} />
              ))}
          </div>
        )}
      </Container>
      <SectionSeparator />
    </Section>
  );
};
const PricingSection = ({ data }: any) => {
  return (
    <>
      <Pricing data={data} />
      <SectionSeparator />
    </>
  );
};

const reviewsIndex: any = {
  "dog-boarding-brisbane": 2,
  "cat-boarding-brisbane": 3,
  adelaidenorth: 5,
  "adelaide-hills": 4,
  canberra: 5,
  homestead: 4,
  "hunter-valley": 5,
  lakemacquarie: 5,
  "melbourne-south-east": 5,
  melbournewest: 5,
  bayside: 6,
  sydney: 3,
  adelaide: 3,
  "pet-boarding-sydney": 3,
  "pet-boarding-newcastle": 4,
  "pet-boarding-central-coast": 5,
  "dog-training-melbourne": 8,
  "dog-daycare-melbourne": 5,
  "dog-daycare-brisbane": 6,
  "dog-boarding-sydney": 2,
  "dog-boarding-newcastle": 2,
  "dog-boarding-melbourne": 6,
  "dog-boarding-hunter-valley": 2,
  "dog-boarding-central-coast": 6,
  "dog-boarding-canberra": 2,
  "dog-boarding-adelaide": 2,
  "cat-boarding-sydney": 2,
  "dog-daycare-sydney": 2,
  kew: 4,
  hobart: 4,
  alexandria: 4,
  marrickville: 4,
  bayswater: 4,
  blackburn: 4,
  brunswick: 4,
  fairfield: 4,
  mornington: 4,
  thomastown: 4,
  broadview: 4,
  "west-hindmarsh": 4,
  brisbane: 5,
  newstead: 4,
};

export default function SingleLocationPage({ pageContext }: any) {
  const {
    sections,
    title,
    reviews,
    seo,
    slug,
    instagramFeeds,
    googleMapsLinkEmbed,
  } = pageContext;
  
// console.log("-=-=-=-=pageContext",pageContext);

  const componentMap: any = {
    textWithImage: TextWithImage,
    ourServices: OurServicesComp,
    stepperCards: StepperComp,
    pricing: PricingSection,
    servicesWithImage: ServiceWithImage,
    heading: HeadingSec,
    features: OurServicesDetails,
    imageGallery: ImageGalleryComp,
    homeHeadingSection: ContentBoxComp,
    sectionCards: SectionCards,
  };

  const seoData = {
    title: seo?.fields.title ?? "",
    description: seo?.fields.metaDescription ?? "",
    og_title: seo?.fields.ogTitle ?? "",
    og_description: seo?.fields.ogDescription ?? "",
    canonical: seo?.fields.canonicalUrl ?? "",
    ogUrl: seo?.fields.ogUrl ?? "",
  };

  return (
    <Layout>
      <SEOMeta seoData={seoData} />
      <div className="pt-6">
        {sections?.map((section: any, idx: number) => {
          if (section?.fields) {
            const DynamicComponent =
              componentMap[section?.sys?.contentType?.sys?.id];
            return idx === reviewsIndex[slug] ? (
              <>
                <AllPagesReviews data={reviews} />
                <SectionSeparator />
                <DynamicComponent
                  data={section?.fields}
                  rate={reviews?.totals?.average_rating}
                  slug={title}
                  googleMapsLinkEmbed={googleMapsLinkEmbed}
                />
              </>
            ) : (
              <DynamicComponent
                data={section?.fields}
                rate={reviews?.totals?.average_rating}
                  slug={title}
                  googleMapsLinkEmbed={googleMapsLinkEmbed}
              />
            );
          } else return null;
        })}
      </div>
      <LocationFaqCards data={pageContext?.faqs} title={title} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data ?? []} />
      <SectionSeparator />
    </Layout>
  );
}
