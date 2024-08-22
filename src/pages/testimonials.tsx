import React from "react";
import { Layout } from "../components/layout";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import { Container } from "../components/shared/container";
import ReviewCard from "../components/shared/ui/review-card";
import Google from "../components/icons/google";

import { Link } from "gatsby-link";
import useBrowserWidth from "../hooks/useBrowserWidth";
import { fetchInstagramFeeds } from "./index";

const Testimonials: React.FC<{ serverData: any }> = ({ serverData }) => {
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
      <SectionSeparator />

      <h1 className="heading text-3xl sm:text-4.5xl text-primary font-semibold font-mabry-pro max-w-[589px] mx-auto text-center tracking-[0.8px]">
        See what our guests think
      </h1>
      <SectionSeparator />

      <GoogleReviews data={reviews} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
    </Layout>
  );
};
export default Testimonials;
const GoogleReviews = ({ data }: any) => {
  const width = useBrowserWidth();

  return (
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4  ">
        {(width > 1024
          ? data?.reviews
              ?.filter(
                (review: any) =>
                  review.text && review.text.trim().split(/\s+/).length >= 6
              )
              ?.slice(0, 32)
          : data?.reviews
              ?.filter(
                (review: any) =>
                  review.text && review.text.trim().split(/\s+/).length >= 6
              )
              ?.slice(0, 16)
        )?.map((review: any) => {
          return (
            <Link
              to={review.url}
              target="_blank"
              rel="noopener noreferrer"
              key={data.id}
              className="cursor-pointer"
            >
              <ReviewCard
                icon={<Google />}
                title={review?.reviewer}
                description={review?.text}
              />
            </Link>
          );
        })}
      </div>
    </Container>
  );
};
export async function getServerData() {
  const seoData = {
    title: "Kip | Testimonials",
    og_title: "Kip | Testimonials",
  };
  let instagramFeeds = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds },
  };
}
