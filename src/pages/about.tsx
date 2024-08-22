import * as React from "react";
import { Layout } from "../components/layout";
import { Container } from "../components/shared/container";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import { Section } from "../components/shared/section";
import { heroData } from "../data";
import { AboutDetails } from "../components/about-us/about-details";
import { aboutDetailsData } from "../components/about-us/about-details/data";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import { fetchInstagramFeeds } from "./index";

const AboutUsPage: React.FC<any> = ({ serverData }) => {
  const [reviews, setReviews] = React.useState<any>([]);

  React.useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };

    getGoogleReviews();
  }, []);

  return (
    <Layout>
      <SEOMeta seoData={serverData.seoData} />
      <div className="pt-6">
        {heroData?.map((item: any, idx: number) => {
          return idx === 3 ? (
            <>
              <AllPagesReviews data={reviews} />
              <SectionSeparator />
              <Section key={idx}>
                <Container className="flex flex-col gap-y-12">
                  <CardWithImage
                    data={item}
                    titleClassName="normal-case"
                    wrapperClassName={`${
                      item?.isFullWidth ? "lg:grid-cols-1" : ""
                    }`}
                  />
                </Container>
              </Section>
              <SectionSeparator />
            </>
          ) : (
            <div>
              <Section key={idx}>
                <Container className="flex flex-col gap-y-12">
                  <CardWithImage
                    data={
                      idx === 0 ? { ...item, isTopMostSection: true } : item
                    }
                    titleClassName="normal-case"
                    wrapperClassName={`${
                      item?.isFullWidth ? "lg:grid-cols-1" : ""
                    }`}
                  />
                </Container>
              </Section>
              <SectionSeparator />
            </div>
          );
        })}
      </div>
      <AboutDetails data={aboutDetailsData} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={serverData?.instagramFeeds?.data} />
      <SectionSeparator />
      {/* <EmptyCards /> */}
    </Layout>
  );
};

export default AboutUsPage;

export async function getServerData() {
  const seoData = {
    title: "About Us - The Story of Kip | Kip Happy Stays",
    description:
      "Kip was born with an ambitious goal; to reimagine pet boarding and daycare for the Aussie fur family. Determined to create an alternative, we founded Kip!",
    og_title: "About Us - The Story of Kip | Kip Happy Stays",
    og_description:
      "Kip was born with an ambitious goal; to reimagine pet boarding and daycare for the Aussie fur family. Determined to create an alternative, we founded Kip!",
    canonical: "https://kip.com.au/about",
  };
  let feeds = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds: feeds },
  };
}
