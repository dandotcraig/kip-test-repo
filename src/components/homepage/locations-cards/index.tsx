import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { LocationCard } from "../../shared/ui/location-card";
import { Button } from "../../shared/ui/button";
import ChevronRight from "../../icons/chevron-right";
import { Paragraph } from "../../shared/ui/paragraph";
import Lottie from "lottie-react";
import ani from "../../../data/lotte-loading.json";
interface Props {
  data: any;
  loading: boolean;
  showLoadMore: boolean;
  handleLoadMore?: () => void;
  endIndex: number;
  totalCount: number;
}

export const LocationsCards: FC<Props> = ({
  data,
  loading,
  showLoadMore,
  handleLoadMore,
  endIndex,
  totalCount,
}) => {
  
  return (
    <Section className=" mt-3">
      <Container className="relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-100 flex justify-center z-50">
            <div className="pt-28 flex flex-col items-center">
              <div className="w-56">
                <Lottie animationData={ani} />
              </div>
            </div>
          </div>
        )}

        {!data?.length && (
          <div className="mt-20 flex items-center justify-center">
            <Paragraph>No Result..</Paragraph>
          </div>
        )}
        <div className="min-h-[250px]">
          {!loading && !!data?.length && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.map((location: any, index: any) => (
                <LocationCard key={index} data={location} />
              ))}
            </div>
          )}
        </div>
        {data?.length > 5 && showLoadMore && totalCount > endIndex && (
          <div className="flex justify-center items-center">
            <Button
              onClick={handleLoadMore}
              className="mt-10 space-x-2.5 flex items-center justify-center uppercase font-mabry-pro px-4 pt-3.5 pb-3"
              variant="primary"
            >
              <span>LOAD MORE LOCATIONS</span>
              <ChevronRight />
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
};
