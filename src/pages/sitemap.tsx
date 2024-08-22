import * as React from "react";
import { Layout } from "../components/layout";
import { GetAround } from "../components/sitemappage/getaround";
import SitemapData from "../data/sitemapData";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import { fetchInstagramFeeds } from "./index";

const Sitemap: React.FC<{ serverData: any }> = ({ serverData }) => {
  let { seoData, instagramFeeds } = serverData;

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
      <SEOMeta seoData={seoData} />
      <GetAround data={SitemapData} />
      <SectionSeparator />

      <AllPagesReviews data={reviews} />
      <SectionSeparator />

      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
    </Layout>
  );
};

export default Sitemap;

export async function getServerData() {
  const seoData = {
    title: "Sitemap | kip",
    description:
      "Terms and Conditions: These Conditions constitute the terms of an agreement relating to the provision of boarding or day care services by kip.",
    og_title: "Sitemap | Kip",
    og_description:
      "Terms and COnditions: These Conditions constitute the terms of an agreement relating to the provision of boarding or day care services by kip.",
    canonical: "https://kip.com.au/sitemap/",
  };
  let instagramFeeds = await fetchInstagramFeeds();

  return {
    props: {
      seoData,
      instagramFeeds,
    },
  };
}
