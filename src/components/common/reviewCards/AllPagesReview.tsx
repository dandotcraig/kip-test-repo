import React from "react";
import { Container } from "../../shared/container";
import ReviewCard from "../../shared/ui/review-card";
import { Link } from "gatsby-link";
import Google from "../../icons/google";
import useBrowserWidth from "../../../hooks/useBrowserWidth";
import { Heading } from "../../../components/shared/ui/heading";

const AllPagesReviews = ({ data }: any) => {
  const width = useBrowserWidth();
  
  return (
    <Container>
      {data?.reviews && (
        <div className="flex justify-center mb-[24px]">
          <Heading
            size="h4"
            as="h3"
            className=" text-3xl sm:text-4.5xl font-mabry-pro text-[#122B2B] font-bold tracking-[0.8px] text-center"
          >
            {"See what our guests think"}
          </Heading>
        </div>
      )}
      <div
        className={`grid ${
          width > 450 ? "grid-cols-2" : "grid-cols-1"
        } lg:grid-cols-4 gap-x-3 gap-y-4`}
      >
        {(width > 1024
          ? data?.reviews
              ?.filter(
                (review: any) =>
                  review.text && review.text.trim().split(/\s+/).length >= 8
              )
              ?.slice(0, 8)
          : data?.reviews
              ?.filter(
                (review: any) =>
                  review.text && review.text.trim().split(/\s+/).length >= 8
              )
              ?.slice(0, 4)
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

export default AllPagesReviews;
