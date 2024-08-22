import React, { useState, FC, useEffect } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";
import { Button } from "../../shared/ui/button";
import { Star } from "../../icons/star";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "gatsby-link";
import LocationHeroSlider from "../../shared/ui/locationHeroSlider";
import { twMerge } from "tailwind-merge";
import { IFaq } from "../../homepage/our-services/interfaces";
import { FaqCard } from "../../shared/ui/faq-card";
import { Tooltip } from "react-tooltip";
import { ALL_LOCATIONS_DATA } from "../../../utils";
import { useLocation } from "@reach/router";
import SectionSeparator from "../../common/section-separator";

export const Hero: FC<any> = ({
  data,
  rate,
  slug,
  googleMapsLinkEmbed,
}: any) => {
  const [showAcc, setShowAcc] = useState(false);
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const location = useLocation();
  
  const pathnameParts = location.pathname
    .split("/")
    .filter((part) => part !== "");
  const path = pathnameParts[pathnameParts.length - 1];
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(data?.email);
      setCopySuccessMessage(`Email copied to clipboard`);
      setInstructions("");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const showInstruction = () => {
    if (copySuccessMessage) {
      return;
    }
    setInstructions("Click to copy email");
  };

  const hideInstruction = () => {
    setInstructions("");
  };

  const handleFaqClick = (index: number) => {
    setShowAcc(false);
    if (index === openFaqIndex) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };
  const formatRating = (rating: any) => {
    if (rating) {
      if (rating % 1 === 0 && rating < 10) {
        return `${rating}.0`;
      } else {
        return Math.floor(rating * 10) / 10;
      }
    } else {
      return 0.0;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);
  

  return (
    <Section>
      <Container>
        <div className="flex  flex-col-reverse md:flex-row gap-x-8">
          <div className=" md:w-1/2 flex md:order-1  mt-[40px] md:mt-0 ">
            <LocationHeroSlider images={data?.images} title={data?.title} />
          </div>
          <div className="md:w-1/2 order-1 flex flex-col  justify-center gap-4">
            <div>
              <Heading size="h1" className="  text-green-slate-800 uppercase">
                {data?.title}
              </Heading>
              {data?.tagline && (
                <Heading size="h4" as="h2" className="  text-green-slate-800">
                  {data?.tagline}
                </Heading>
              )}
            </div>
            <span className="underline">
              {" "}
              <a
                className="cursor-pointer"
                href={data?.mapAddressLink}
                target="_blank"
                onMouseOver={showInstruction}
                onMouseOut={hideInstruction}
              >
                {data?.address}
              </a>
            </span>

            <div className="sm:flex justify-between">
              <p
                className="underline cursor-pointer"
                onClick={handleEmailClick}
                onMouseOver={showInstruction}
                onMouseOut={hideInstruction}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={instructions}
              >
                {data?.email}
              </p>

              <Tooltip id="my-tooltip"> {copySuccessMessage} </Tooltip>
              <p className="cursor-pointer">
                Tel:{" "}
                <Link
                  className="underline hover:underline hover:text-primary hover:opacity-80"
                  to={`tel:+${data?.phone}`}
                >
                  {data?.phone}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap">
              {data?.services?.map((service: any, idx: number) => {
                return (
                  <div key={idx} className={`flex items-center `}>
                    <p>{service?.fields?.title} </p>
                    {idx !== data?.services.length - 1 && (
                      <div className="h-1 w-1 bg-black rounded-full mt-[2px] mx-[8px]"></div>
                    )}
                  </div>
                );
              })}
            </div>
            <Paragraph>{data?.description}</Paragraph>

            <div className="flex justify-between items-center mb-4 md:mb-0">
              <div className="flex  gap-x-2">
                {" "}
                <p className="font-mabry-pro font-bold text-teal-950">
                  {formatRating(rate)}
                </p>
                <div className="mt-[3px]">
                  <Star width="16" height="16" />
                </div>
              </div>
              {data?.button && (
                <Link to={data?.button?.fields?.link}>
                  <Button
                    variant="orange"
                    className="font-mabry-pro leading-[15px] max-w-[130px] sm:max-w-[150px] lg:max-w-full uppercase"
                  >
                    {data?.button?.fields?.text}
                  </Button>
                </Link>
              )}
            </div>
            {data?.faqs?.length > 0 && (
              <div className={`${twMerge("text-center ", "")}`}>
                <div className="border border-gray-200  rounded-xl">
                  {data?.faqs?.map((item: IFaq, index: number) => {
                    return (
                      <div key={index}>
                        <FaqCard
                          item={item}
                          index={index}
                          totalLength={data?.faqs?.length}
                          isOpen={index === openFaqIndex || showAcc}
                          onClick={() => handleFaqClick(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        {googleMapsLinkEmbed ? (
          <>
            <SectionSeparator />
            <div className="rounded-xl overflow-hidden">
              <iframe
                title={slug ?? "Google Maps"}
                width="100%"
                height="372"
                style={{ border: 0 }}
                src={googleMapsLinkEmbed}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </Section>
  );
};
