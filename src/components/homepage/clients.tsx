import React, { FC, useEffect, useState } from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { Anchor } from "../shared/ui/button";
import SearchIcon from "../icons/search";
import { Paragraph } from "../shared/ui/paragraph";
import OutsideClickHandler from "react-outside-click-handler";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImage } from "gatsby-plugin-image";
import { Autoplay } from "swiper/modules";
import AustrailianIcon from "../icons/austrailian";
interface Props {
  activeLocation: any;
  setLocation: any;
  activeService: any;
  setService: any;
  onSearch: any;
  services: any;
  locations: any;
}

export const Clients: FC<Props> = ({
  activeLocation,
  setLocation,
  activeService,
  setService,
  onSearch,
  services,
  locations,
}) => {
  const [isLocationView, openLocationView] = useState(false);
  const [isServiceView, openServiceView] = useState(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 769);
    }
  }, []);

  return (
    <Section className="relative mb-10">
      <Container className="px-0 sm:px-6">
        <div className="w-full bg-primary classOverrides  whitespace-nowrap  pb-6 sm:pb-8 md:pb-8 lg:pb-10 overflow-x-scroll rounded-bl-xl rounded-br-xl px-4  lg:px-24 ">
          <Swiper
            slidesPerView={isMobile ? 4 : 7}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="py-[11.5px] justify-center"
          >
            <SwiperSlide className="flex justify-center px-2 sm:px-0">
              <StaticImage
                objectFit="contain"
                placeholder="blurred"
                src={"../../logos/sydney_herald.svg"}
                height={28}
                alt="SydneyHeraldSvg"
                className="w-auto h-[28px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0">
              {" "}
              <StaticImage
                objectFit="contain"
                height={24}
                placeholder="blurred"
                src={"../../logos/TODAY_SVG.svg"}
                alt="TODAYSVG"
                className="w-auto h-[24px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0">
              {" "}
              <StaticImage
                objectFit="contain"
                placeholder="blurred"
                height={14}
                src={"../../logos/Courier_mail_SVG.svg"}
                alt="CourierMailSvg"
                className=" w-auto h-[14px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0">
              {" "}
              <StaticImage
                objectFit="contain"
                placeholder="blurred"
                height={14}
                src={"../../logos/daily_tel.svg"}
                alt="daily_tel"
                className=" w-auto h-[14px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0">
              {" "}
              <StaticImage
                objectFit="contain"
                placeholder="blurred"
                height={14}
                src={"../../logos/Advertiser.svg"}
                alt="AdvertiserSvg"
                className="w-auto h-[14px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0">
              {" "}
              <StaticImage
                objectFit="contain"
                placeholder="blurred"
                height={12.55}
                src={"../../logos/SUNRISE_SVG.svg"}
                alt="SunRisingSvg"
                className="w-auto h-[12.55px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0 ">
              {" "}
              <AustrailianIcon />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center px-2 sm:px-0 ">
              {" "}
              <StaticImage
                objectFit="contain"
                placeholder="blurred"
                height={23.5}
                src={"../../logos/Channel.png"}
                alt="Channel_Svg"
                className="w-[50px] h-[23.5px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="max-w-[651px] absolute left-0 right-0 -bottom-12 z-[100]  sm:w-[80%] md:w-full rounded-xl shadow mx-auto bg-neutral-100">
          <div className="w-full flex  justify-between items-center p-1 ">
            <div className="w-full flex items-stretch gap-x-1 ">
              <div className=" relative w-full location-dropdown">
                <OutsideClickHandler
                  onOutsideClick={() => {
                    openLocationView(false);
                  }}
                >
                  <div className="h-full">
                    {
                      <button
                        type="button"
                        className={`flex h-full ${
                          activeService?.label === "Door-to-door Transport" &&
                          "min-h-[91px]"
                        } w-full relative   items-center gap-x-4 cursor-pointer active:bg-gray-50 bg-white px-3 md:px-8 py-2 md:py-4 rounded-xl`}
                        onClick={() => openLocationView(!isLocationView)}
                      >
                        <div className="hidden sm:block">
                          <StaticImage
                            placeholder="blurred"
                            alt=""
                            src={"../../images/map.svg"}
                          />
                        </div>
                        <div className="flex  flex-col items-baseline">
                          <Paragraph className="uppercase font-bold text-base">
                            Location
                          </Paragraph>
                          <Paragraph className=" text-neutral-500 text-xs text-start sm:text-xsm font-bold md:pt-1">
                            {!!activeLocation
                              ? activeLocation?.label
                              : " Find the nearest Kip"}
                          </Paragraph>
                          {!activeLocation && !!selected && (
                            <div>
                              <svg
                                className="absolute top-16 right-[86px]"
                                width="20"
                                height="12"
                                viewBox="0 0 20 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.26545 0.795178C9.66137 0.366579 10.3386 0.366579 10.7346 0.795177L18.8417 9.57145C19.4334 10.2119 18.9791 11.25 18.1072 11.25H1.89283C1.0209 11.25 0.566624 10.2119 1.15827 9.57145L9.26545 0.795178Z"
                                  fill="#171717"
                                />
                              </svg>
                              <div className="px-2.5 py-2 bg-neutral-900 whitespace-nowrap top-[72px] left-16 text-white rounded-xl absolute ">
                                Choose location first
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    }
                    <List
                      classOverrides={
                        "w-full mt-2 rounded-b-xl overflow-hidden"
                      }
                      data={locations}
                      onChange={setLocation}
                      open={isLocationView}
                      toggleList={openLocationView}
                      active={activeLocation}
                    />
                  </div>
                </OutsideClickHandler>
              </div>
              <div className=" cus-outsidehandeler relative  w-full">
                <OutsideClickHandler
                  onOutsideClick={() => {
                    openServiceView(false);
                  }}
                >
                  <div className="h-full">
                    <div
                      className="flex w-full items-center gap-x-4 bg-white active:bg-gray-50 px-3 md:px-8 py-2 md:py-4 rounded-xl cursor-pointer h-full"
                      onClick={() => openServiceView(!isServiceView)}
                    >
                      <div className="hidden sm:block">
                        <StaticImage alt="" src={"../../images/map.svg"} />
                      </div>
                      <div className="flex flex-col items-baseline">
                        <Paragraph className="font-bold uppercase text-base">
                          Service
                        </Paragraph>

                        <Paragraph className=" text-neutral-500 text-xs sm:text-xsm text-start font-bold md:pt-1">
                          {!!activeService
                            ? activeService?.label
                            : "How can we help"}
                        </Paragraph>
                        {!activeService && !!selected && (
                          <div>
                            <svg
                              className="absolute top-16 right-[86px]"
                              width="20"
                              height="12"
                              viewBox="0 0 20 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.26545 0.795178C9.66137 0.366579 10.3386 0.366579 10.7346 0.795177L18.8417 9.57145C19.4334 10.2119 18.9791 11.25 18.1072 11.25H1.89283C1.0209 11.25 0.566624 10.2119 1.15827 9.57145L9.26545 0.795178Z"
                                fill="#171717"
                              />
                            </svg>
                            <div className="px-2.5 py-2 bg-neutral-900 whitespace-nowrap top-[72px] left-16 text-white rounded-xl absolute ">
                              Choose service first
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <List
                      classOverrides={
                        "w-full top-[60px] sm:top-[70px] md:top-[75px] rounded-b-xl"
                      }
                      data={services}
                      onChange={setService}
                      open={isServiceView}
                      toggleList={openServiceView}
                      active={activeService}
                    />
                  </div>
                </OutsideClickHandler>
              </div>
              <Anchor
                as="button"
                className="uppercase hover:bg-opacity-90 flex items-center justify-center space-x-2.5 py-2 md:py-6 px-3 sm:px-6"
                variant="orange"
                onClick={() => setSelected(true)}
              >
                <SearchIcon />
                <Paragraph className="text-white hidden sm:block font-bold">
                  Search
                </Paragraph>
              </Anchor>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
const List = ({
  data,
  onChange,
  open,
  toggleList,
  classOverrides,
  active,
}: any) => {
  return open === true ? (
    <div
      className={`classOverrides dropdown-list z-[100] absolute sm:top-[66px] md:top-[68px]  bg-neutral-100 shadow-md rounded   overflow-y-scroll cursor-pointer left-0  ${classOverrides}`}
    >
      <div className="scroll h-[200px] sm:h-fit ">
        {data.map((item: any) => {
          return (
            <div
              key={item.value}
              className={`${
                active?.label === item?.label ? "bg-white" : "bg-neutral-100"
              } hover:bg-white px-4 py-3 active:bg-gray-50 md:py-4 text-sm md:text-md font-mabry-pro font-normal flex items-center gap-2`}
              onClick={() => {
                onChange(item);
                toggleList(false);
              }}
            >
              <img src={item?.icon?.fields?.file?.url} />
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};
