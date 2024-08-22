import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { HeroSec } from "../components/contact-us/hero-sec";
import { ContactOptions } from "../components/contact-us/contact-options";
import { contactOptionsData } from "../components/contact-us/contact-options/data";
import { FaqCards } from "../components/homepage/faq-cards";
import { FaqsCardsData } from "../components/homepage/faq-cards/data";
import { SearchOurInformation } from "../components/contact-us/search-our-information";
import { blogsData } from "../components/contact-us/search-our-information/data";
import { EmptyCards } from "../components/homepage/emptyCards";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import { fetchInstagramFeeds } from "./index";

const ContactUs: React.FC<{
  serverData: any;
}> = ({ serverData }) => {
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
    <Layout contact>
      <SEOMeta seoData={seoData} />
      <div className="pt-6">
        <HeroSec />
      </div>
      <SectionSeparator />
      <ContactOptions data={contactOptionsData} />
      <SectionSeparator />
      {/* <ContactKipCentre /> temporary hide*/}
      {/* <SectionSeparator /> */}
      <FaqCards data={FaqsCardsData} className="text-start md:px-0" />
      <SectionSeparator />
      <AllPagesReviews data={reviews} />
      <SectionSeparator />
      <SearchOurInformation data={blogsData} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
      <EmptyCards />
      <SectionSeparator />
    </Layout>
  );
};

export default ContactUs;
export async function getServerData() {
  const seoData = {
    title: "Contact Us | Kip",
    description:
      "At Kip, we’re all about happy stays for your four-legged friends while you’re away. Get in touch with our team today to learn more about our locations and services.",
    og_title: "Contact Us | Kip<",
    og_description:
      "At Kip, we’re all about happy stays for your four-legged friends while you’re away. Get in touch with our team today to learn more about our locations and services.",
    canonical: "https://kip.com.au/contact",
  };
  let res = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds:res },
  };
}
