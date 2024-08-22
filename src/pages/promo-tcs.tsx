import React from "react";
import { Layout } from "../components/layout";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import Promo from "../components/promo";
import SectionSeparator from "../components/common/section-separator";
import { fetchInstagramFeeds } from "./index";

const PromoTCSPage: React.FC<any> = ({ serverData }) => {
  return (
    <Layout>
      <SEOMeta seoData={serverData.seoData} />
      <Promo />
      <SectionSeparator />

      <InstagramReviews instagramFeeds={serverData?.instagramFeeds?.data} />
      <SectionSeparator />
    </Layout>
  );
};
export default PromoTCSPage;

export async function getServerData() {
  const seoData = {
    title: "Promotion Terms & Conditions | Kip",
    description:
      "Promotional Terms and Conditions: These Conditions constitute the terms of an agreement relating to the promotions offered by Kip.",
    og_title: "Promotion Terms & Conditions | Kip",
    og_description:
      "Promotional Terms and Conditions: These Conditions constitute the terms of an agreement relating to the promotions offered by Kip.",
    canonical: "https://kip.com.au/promo-tcs/",
  };
  let feeds = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds: feeds },
  };
}
