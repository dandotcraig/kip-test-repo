import React from "react";
import { Container } from "../../shared/container";
import ReviewCard from "../../shared/ui/review-card";
import { Heading } from "../../shared/ui/heading";
import { Link } from "gatsby-link";
import Google from "../../icons/google";

const TestimonialReviews = ({ data }: any) => {
  return (
    <div>
      <Heading
        as="h2"
        size="h2"
        className="max-w-[589px] mx-auto  text-center tracking-[0.8px] "
      >
        Here’s what customers think...{" "}
      </Heading>
      <Container>
        <div className="sm:grid grid-col-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-x-3 gap-y-4  hidden mt-[10px] md:mt-[20px] lg:mt-[30px] ">
          {data?.reviews?.map((review: any, index: any) => {
            return (
              <div key={index}>
                <Link to={review.url} target="_blank" rel="noopener noreferrer">
                  <ReviewCard
                    icon={<Google />}
                    title={review?.reviewer}
                    description={review?.text}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialReviews;
