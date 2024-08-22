import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { Section } from "../../components/shared/section";
import { Container } from "../../components/shared/container";
import { CardWithImage } from "../../components/shared/ui/card-with-image";
import { servicePageData } from "../../components/service/data";
import AllPagesReviews from "../../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../../components/common/SEO-Meta";
import SectionSeparator from "../../components/common/section-separator";
import { getReviews } from "../../utils";
import { fetchInstagramFeeds } from "../index";

const Services: React.FC<{ serverData: any }> = ({ serverData }) => {
  let { seoData, instagramFeeds } = serverData;

  const [reviews, setReviews] = useState<any>([]);
  useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    getGoogleReviews();
  }, []);
  return (
    <Layout>
      <SEOMeta seoData={seoData} />
      <Section className="pt-6">
        <Container className="flex flex-col ">
          <CardWithImage
            titleClassName="normal-case"
            data={servicePageData?.hero}
          />
        </Container>
        <SectionSeparator />

        <Container>
          {servicePageData?.servicesCardWithImages?.map(
            (cardWithImage: any, index: number) => {
              return (
                <div>
                  <CardWithImage
                    key={index}
                    parent="service"
                    data={cardWithImage}
                  />
                  <SectionSeparator />
                </div>
              );
            }
          )}
        </Container>
      </Section>
      <AllPagesReviews data={reviews} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
    </Layout>
  );
};
export default Services;

export async function getServerData() {
  const seoData = {
    title: "Kip Services | Happy days and stays for four-legged friends",
    description:
      "Dog and cat boarding and doggy daycare, reimagined for Aussie fur families. With locations across Australia, your pet's happiness is our priority. ",
    og_title: "Kip Services | Happy days and stays for four-legged friends",
    og_description:
      "Dog and cat boarding and doggy daycare, reimagined for Aussie fur families. With locations across Australia, your pet's happiness is our priority. ",
    canonical: "https://kip.com.au/services/",
  };
  let instagramFeeds = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds },
  };
}
