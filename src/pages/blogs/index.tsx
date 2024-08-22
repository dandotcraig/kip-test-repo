import React from "react";
import { Layout } from "../../components/layout";
import AllPagesReviews from "../../components/common/reviewCards/AllPagesReview";
import { Heading } from "../../components/shared/ui/heading";
import SEOMeta from "../../components/common/SEO-Meta";
import { SearchOurInformation } from "../../components/contact-us/search-our-information";
import { blogsData } from "../../components/contact-us/search-our-information/data";
import SectionSeparator from "../../components/common/section-separator";
import { getReviews } from "../../utils";

export default function Blogs({ serverData }: any) {
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
      <div className="p-5">
        <Heading className="text-black" size="h2" as="h1">
          Kip Blog
        </Heading>
        <Heading className="text-black mt-2 " size="h5" as="h5">
          The best place to Kip up with the latest in pet care!
        </Heading>
      </div>
      <SearchOurInformation data={blogsData} />
      <SectionSeparator />
      <AllPagesReviews data={reviews} />
      <SectionSeparator />
    </Layout>
  );
}

export async function getServerData() {
  const seoData = {
    title: "Blog | Kip",
    description:
      "Read the Kip blog - The best place to Kip up with the latest in pet care! Here we cover anything and everything to do with dog boarding, daycare, and dog training.",
    og_title: "Blog | Kip",
    og_description:
      "Read the Kip blog - The best place to Kip up with the latest in pet care! Here we cover anything and everything to do with dog boarding, daycare, and dog training.",
    canonical: "https://kip.com.au/blogs",
  };
  return {
    props: { seoData },
  };
}
