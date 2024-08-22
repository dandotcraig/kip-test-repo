import React from "react";
import { Layout } from "../components/layout";
import { TermsAndCondition } from "../components/terms-and-conditionpage";
import { termsAndContditionData } from "../components/terms-and-conditionpage/data";
// import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
// import SectionSeparator from "../components/common/section-separator";

const TermsAndConditions: React.FC<{ serverData: any }> = ({ serverData }) => {
  let { seoData } = serverData;

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
      <TermsAndCondition data={termsAndContditionData} />
      {/* <AllPagesReviews data={reviews} />
      <SectionSeparator /> */}
    </Layout>
  );
};
export default TermsAndConditions;

export async function getServerData() {
  const seoData = {
    title: "Terms and Conditions | Kip",
    description:
      "Terms and Conditions: These Conditions constitute the terms of an agreement relating to the provision of boarding or day care services by Kip.",
    og_title: "Terms and Conditions | Kip",
    og_description:
      "Terms and Conditions: These Conditions constitute the terms of an agreement relating to the provision of boarding or day care services by Kip.",
    canonical: "https://kip.com.au/terms-and-conditions/",
  };
  return {
    props: { seoData },
  };
}
