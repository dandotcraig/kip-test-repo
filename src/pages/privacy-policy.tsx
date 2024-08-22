import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { PrivacyPolicyPage } from "../components/privacy-policypage";
import { PrivacyPolicyData } from "../components/privacy-policypage/data";
// import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";

const PrivacyPolicy: React.FC<{ serverData: any }> = ({ serverData }) => {
  const [reviews, setReviews] = useState<any>([])
  let { seoData } = serverData;
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
      <PrivacyPolicyPage data={PrivacyPolicyData} />
      <SectionSeparator />

      {/* <AllPagesReviews data={reviews} />
      <SectionSeparator />
      <SectionSeparator /> */}

    </Layout>
  );
};
export default PrivacyPolicy;

export async function getServerData() {
  const seoData = {
    title: "Privacy Policy | Kip",
    description:
      "This Privacy Policy governs the manner in which Kip collects, uses, maintains and discloses information collected from users of the website.",
    og_title: "Privacy Policy | Kip",
    og_description:
      "This Privacy Policy governs the manner in which Kip collects, uses, maintains and discloses information collected from users of the website.",
    canonical: "https://kip.com.au/privacy-policy/",
  };
  return {
    props: { seoData },
  };
}
