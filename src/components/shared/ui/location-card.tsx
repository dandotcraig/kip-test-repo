import React, { FC, useState } from "react";
import { Button } from "./button";
import { Heading } from "./heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Link } from "gatsby-link";
import { SwiperNavButtonCards } from "./SwiperNavButton";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Star } from "../../icons/star";

interface Props {
  data: any;
}

export const LocationCard: FC<Props> = ({ data }) => {
  const [showArrows, setShowArrows] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const queryData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulLocationPage {
        edges {
          node {
            card {
              images {
                id
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 50
                )
              }
              title
            }
          }
        }
      }
    }
  `);
  const filteredQueryDataImages =
    queryData.allContentfulLocationPage.edges.filter((node: any) => {
      return node.node.card?.title === data?.title;
    });
  const filterMostImages = filteredQueryDataImages?.map((img: any) => {
    return img?.node?.card?.images?.map((gatsbyImg: any) => {
      return gatsbyImg?.gatsbyImageData;
    });
  });
  const imageGallery = filterMostImages[0];

  const formatRating = (rating: any) => {
    if (rating % 1 === 0 && rating < 10) {
      return `${rating}.0`;
    } else {
      return Math.floor(rating * 10) / 10;
    }
  };
  const showNextArrow = currentSlide < data.gallery.length - 1;
  return (
    <div className=" shadow-box-shadow relative  overflow-hidden shadow-lg bg-white rounded-xl">
      <div>
        <div
          onMouseEnter={() => {
            setShowArrows(true);
          }}
          onMouseLeave={() => {
            setShowArrows(false);
          }}
        >
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[Pagination]}
            className="my-location-slider relative"
            slidesPerView="auto"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            speed={500}
          >
            {imageGallery?.map((image: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={`/locations/${data?.path}`}>
                    <div className="h-[308px]   rounded-xl overflow-hidden">
                      <GatsbyImage
                        image={image}
                        alt={data?.title ?? ""}
                        className="w-full h-full object-cover rounded-xl overflow-hidden"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
            <div className="home-page-card-swiper  ">
              {showArrows && (
                <SwiperNavButtonCards
                  showArrows={showArrows}
                  currentSlide={currentSlide}
                  showNextArrow={showNextArrow}
                  vertical
                />
              )}
            </div>
          </Swiper>
        </div>
      </div>

      <div className="p-2 md:h-[155px] xl:h-auto flex flex-col">
        <Link to={`/locations/${data?.path}`}>
          <div className="flex justify-between">
            <Heading size="h6" as="h6" className="mb-2">
              {data?.title}
            </Heading>
            <div className="flex  gap-x-2">
              {" "}
              <p className="font-mabry-pro font-bold text-teal-950">
                {formatRating(data?.rating) || 0}
              </p>
              <div className="mt-[3px]">
                <Star width="16" height="16" />
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/locations/${data?.path}`}>
          <Heading
            className="cursor-pointer font-normal underline leading-[24px]"
            size="h6"
            as="h6"
          >
            {data?.name}
          </Heading>
        </Link>
        <Link to={`/locations/${data?.path}`}>
          <p className="mb-2 font-mabry-pro">From ${data?.price}</p>
        </Link>{" "}
        <Link to={`/locations/${data?.path}`}>
          <div>
            <div className="flex flex-wrap ">
              {data?.logos
                ?.filter(
                  (item: any) =>
                    item?.value !== undefined && item?.value.trim() !== ""
                )
                .map((item: any, idx: any, arr: any) => (
                  <div key={idx} className={`flex items-center `}>
                    {" "}
                    <p>{item?.value}</p>
                    {idx < arr.length - 1 && (
                      <div className="h-1 w-1 bg-black rounded-full mt-[2px] mx-[8px]"></div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex  justify-end ">
        <Link to={`/locations/${data?.path}`}>
          <div className="pb-3 pr-3 sm:pt-2 ">
            <Button
              className="uppercase  transition-all duration-300  flex items-center justify-center font-mabry-pro px-4 pt-3.5 pb-3"
              variant="orange"
            >
              Book Now
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};
