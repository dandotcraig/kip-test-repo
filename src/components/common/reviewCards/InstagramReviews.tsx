import React from "react";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { Instagram } from "../../icons/instagram";
import { Link } from "gatsby-link";
import useBrowserWidth from "../../../hooks/useBrowserWidth";
interface IProps {
  instagramFeeds?: any;
}
const InstagramReviews = ({ instagramFeeds = [] }: IProps) => {
  const width = useBrowserWidth();

  const getInstagramFeeds = (width: number) => {
    if (width > 1280) {
      return instagramFeeds?.slice(0, 8);
    } else if (width > 1024) {
      return instagramFeeds?.slice(0, 6);
    } else if (width > 640) {
      return instagramFeeds?.slice(0, 4);
    } else {
      return instagramFeeds?.slice(0, 3);
    }
  };
  return (
    <>
      {getInstagramFeeds(width)?.length > 0 && (
        <Container>
          {getInstagramFeeds(width)?.length > 0 && (
            <Heading
              as="h2"
              size="h2"
              className=" max-w-[589px] mx-auto  text-center tracking-[0.8px] "
            >
              The latest on our socials...
            </Heading>
          )}
          <div className="grid sm:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 ">
            {getInstagramFeeds(width)?.map((item: any, idx: number) => {
              const dynamicString =
                item.media_type === "VIDEO"
                  ? item?.thumbnail_url
                  : item?.media_url;
              return (
                <Link key={idx} to={`${item?.permalink}`} target="_blank">
                  {" "}
                  <div
                    key={item?.id}
                    className=" relative  rounded-xl shadow-xl"
                  >
                    <img
                      src={dynamicString}
                      alt={"image here"}
                      className="w-full h-[300px] object-fit object-cover rounded-[4px] md:rounded-xl"
                    />
                    <div className="absolute top-[5%] left-[90%] ">
                      <Instagram />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      )}
    </>
  );
};

export default InstagramReviews;
