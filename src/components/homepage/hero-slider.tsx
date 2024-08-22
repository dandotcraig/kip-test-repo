import React, { FC, useState } from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { SliderItem } from "../../interfaces/homeHero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const HeroSlider = () => {
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
    <Section>
      <Container className="px-0 sm:px-6">
        <div
          onMouseEnter={() => {
            setShowArrows(true);
          }}
          onMouseLeave={() => {
            setShowArrows(false);
          }}
        >
          <Swiper
            allowSlideNext={false}
            allowSlidePrev={false}
            pagination={{
              clickable: false,
              dynamicBullets: false,
            }}
            navigation={false}
            className="home-hero-slider relative"
            slidesPerView="auto"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            speed={500}
          >
            {sliderData?.map((item: any, idx: any) => {
              const image: any = getImage(item.image);
              return (
                <SwiperSlide key={idx}>
                  <div className="relative w-full min-h-[222px] flex justify-center items-center">
                    <GatsbyImage
                      alt=""
                      className="absolute inset-0"
                      image={image}
                    />
                    <div className="absolute top-0 left-0 right-0 h-full w-full bg-black opacity-30" />

                    <div
                      className={` ${
                        idx === 0
                          ? " max-w-[1000px]  mx-auto  flex flex-col gap-[30px] mb-[20px] items-center  z-20"
                          : " max-w-900  mx-auto  flex flex-col gap-[30px]  z-20"
                      } `}
                    >
                      {idx === 0 ? (
                        <h1 className="text-5xl text-[#fff] font-mabry-pro">
                          {item?.title}
                        </h1>
                      ) : (
                        <h3 className=" text-5xl text-[#fff] font-mabry-pro">
                          {item?.title}
                        </h3>
                      )}
                      {idx === 0 ? (
                        <h2 className="text-[#fff] text-center max-w-[300px] ">
                          {item.tagline}
                        </h2>
                      ) : (
                        <h4 className="text-[#fff] text-center max-w-[300px] ">
                          {item.tagline}
                        </h4>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <div className="  ">
              {showArrows && (
                <SwiperNavButton
                  showArrows={showArrows}
                  currentSlide={currentSlide}
                  showNextArrow={showNextArrow}
                  vertical
                />
              )}
            </div> */}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSlider;
