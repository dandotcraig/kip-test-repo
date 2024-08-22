import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { SwiperNavButton } from "../shared/ui/SwiperNavButton";
import { graphql, useStaticQuery } from "gatsby";

export const Slider: FC = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sourceData = useStaticQuery(graphql`
    query sourceHeroQuery {
      allHomeHeroJson {
        nodes {
          title
          tagline
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                quality: 50
              )
            }
          }
        }
      }
    }
  `);
  const sliderData = sourceData.allHomeHeroJson.nodes;
  const showNextArrow = currentSlide < sliderData.length - 1;

  return (
    <div className="container mx-auto">
      <div className=" ">
        <div
          className="home_swiper"
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
            className="hero-slider relative"
            slidesPerView="auto"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            speed={500}
          >
            {sliderData?.map((item: any, idx: any) => {
              return (
                <SwiperSlide>
                  <div className="bg-white-73" key={idx}>
                    <div className="w-full min-h-[222px]  flex justify-center items-center">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div>
              {showArrows && (
                <SwiperNavButton
                  showArrows={showArrows}
                  currentSlide={currentSlide}
                  showNextArrow={showNextArrow}
                />
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
