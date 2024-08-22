import React, { useState } from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { contactSlides } from "../homepage/locations-cards/data";
import { Heading } from "../shared/ui/heading";
import HelpPlusIcon from "../icons/help-plus";
import { Paragraph } from "../shared/ui/paragraph";
import ChevronRight from "../icons/chevron-right";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { SwiperNavButton } from "../shared/ui/SwiperNavButton";
import { ContactSwiperButton } from "../shared/ui/contact-swiper-button";
import { Link } from "gatsby-link";
import classNames from "classnames";

export const HeroSec: React.FC = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const showNextArrow = currentSlide < contactSlides?.length - 1;
  return (
    <Section>
      <Container>
        <div className="w-full lg:grid-cols-2 lg:grid  lg:items-center gap-12">
          <div className="mb-12 lg:mb-0 flex justify-center xl:justify-start ">
            <div className="max-w-md xl:max-w-none">
              <div className=" mb-12">
                <Heading as="h1" size="h1" className="uppercase font-mabry-pro">
                  Contact Us
                </Heading>
                <Heading
                  className=" font-mabry-pro text-neutral-800"
                  as="h2"
                  size="h5"
                >
                  At Kip, we’re all about happy stays for your four-legged
                  friends while you’re away.
                </Heading>
              </div>
              <div className="px-[22px] py-4 bg-white rounded-md shadow border border-neutral-200  items-center gap-5 flex md:flex-row flex-col">
                <HelpPlusIcon />
                <div className="flex-1">
                  <Heading as="h5" size="h5" className="text-neutral-800 mb-1">
                    Having trouble booking online?
                  </Heading>
                  <Paragraph className="text-neutral-500 leading-6 mb-4">
                    Call to speak with one of our booking specialists
                  </Paragraph>
                  <div className="flex justify-end items-center py-2.5 space-x-2 ">
                    <Paragraph className="font-bold leading-6 text-primary">
                      Call us on
                      <a
                        href="tel:1800951926"
                        className="underline hover:opacity-80 ml-1"
                      >
                        1800 951 926
                      </a>
                    </Paragraph>
                    <ChevronRight fill="#0B4141" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative home_swiper "
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
              slidesPerView="auto"
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              speed={500}
              className="hero-slider relative"
            >
              {contactSlides?.map((img) => {
                return (
                  <SwiperSlide>
                    <div
                      className="h-394 "
                      onMouseEnter={() => setShowArrows(true)}
                      onMouseLeave={() => setShowArrows(false)}
                    >
                      <img
                        alt="Contact-us "
                        src={img?.image}
                        className="w-full h-full overflow-hidden rounded-xl object-cover"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className="sm:absolute top-0 bottom-0 flex items-center z-10 gap-9 w-full ">
                <ContactSwiperButton
                  showArrows={showArrows}
                  currentSlide={currentSlide}
                  showNextArrow={showNextArrow}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};
