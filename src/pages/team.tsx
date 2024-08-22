import * as React from "react";
import { Layout } from "../components/layout";
import { Container } from "../components/shared/container";
import { TeamCards } from "../components/teamspage/bios";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import { Paragraph } from "../components/shared/ui/paragraph";
import { Section } from "../components/shared/section";
import { teamsHeroData } from "../data";
import { EmptyCards } from "../components/homepage/emptyCards";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import { fetchInstagramFeeds } from "./index";

const Team: React.FC<{ serverData: any }> = ({ serverData }) => {
  let { seoData, instagramFeeds } = serverData;
  const [reviews, setReviews] = React.useState<any>([]);

  React.useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };

    getGoogleReviews();
  }, []);
  const showButton = true;
  return (
    <Layout>
      <SEOMeta seoData={seoData} />
      <Section className="pt-6">
        <Container>
          <CardWithImage
            showButton={showButton}
            data={teamsHeroData}
            wrapperClassName=""
          >
            <Paragraph className="mb-4">
              Pet boarding and daycare, reimagined for Aussie fur-families. At
              Kip, we’re not a traditional dog boarding kennel or cattery.
              Creating happy staycations and daycare days for your furry friends
              is what we’re all about.
            </Paragraph>
          </CardWithImage>
        </Container>
      </Section>
      <SectionSeparator />
      <TeamCards />
      <SectionSeparator />

      <AllPagesReviews data={reviews} />
      <SectionSeparator />

      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />

      <EmptyCards />
      <SectionSeparator />
    </Layout>
  );
};

export default Team;

export async function getServerData() {
  const seoData = {
    title: "Our Team | Kip",
    description:
      "Meet the Kip team: We are dedicated, compassionate pet people who work hard and play harder - with fetch being a favourite amongst us.",
    og_title: "Our Team | Kip",
    og_description:
      "Meet the Kip team: We are dedicated, compassionate pet people who work hard and play harder - with fetch being a favourite amongst us.",
    canonical: "https://kip.com.au/team",
  };
  let instagramFeeds = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds },
  };
}
