import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { SwiperNavButton } from "./SwiperNavButton";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

const ImageSlider= () => {
  const [showArrows, setShowArrows] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sourceData = useStaticQuery(graphql`
    query allBookNowCarouselQuery {
      allBookNowCarouselJson {
        nodes {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF],
                quality: 50
              )
            }
          }
        }
      }
    }
  `);
  const images = sourceData.allBookNowCarouselJson.nodes;
  const showNextArrow = currentSlide < images?.length - 1;

  return (
    <div
      className="relative home_swiper"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Pagination]}
        className="hero-slider relative mb-1"
        slidesPerView="auto"
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        speed={500}
      >
        {images.map(
          (sin: { image: ImageDataLike | null }, index: React.Key | number) => {
            const image: any = getImage(sin?.image);
            return (
              <SwiperSlide key={index}>
                <div className="w-full">
                  <GatsbyImage
                    image={image}
                    alt={`Image ${index}`}
                    className="w-full object-cover object-bottom bg-bottom rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]"
                  />
                </div>
              </SwiperSlide>
            );
          }
        )}
        <div className="sm:absolute top-0 bottom-0 flex items-center z-10 gap-9 w-full ">
          <SwiperNavButton
            showArrows={showArrows}
            currentSlide={currentSlide}
            showNextArrow={showNextArrow}
          />
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
