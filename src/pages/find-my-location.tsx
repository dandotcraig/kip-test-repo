import React from "react";
import { FindMyLocationsPage } from "../components/find-my-location-page";
import SEOMeta from "../components/common/SEO-Meta";
import { Layout } from "../components/layout";
import { fetchInstagramFeeds } from "./index";

const FindMyLocation: React.FC<{ serverData: any }> = ({ serverData }) => {
  let { seoData,instagramFeeds } = serverData;
  return (
    <Layout>
      <SEOMeta seoData={seoData} />
      <FindMyLocationsPage data={[]} instagramFeeds={instagramFeeds} />
    </Layout>
  );
};

export default FindMyLocation;

export async function getServerData() {
  const seoData = {
    title: "Kip",
    description: "",
    og_title: "Kip",
    og_description: "",
    canonical: "",
  };
  let res = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds:res },
  };
}
