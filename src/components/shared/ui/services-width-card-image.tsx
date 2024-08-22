import React, { FC, ReactNode } from "react";
import { Heading } from "./heading";
import { ICardWithImage } from "../../homepage/what-makes-different/interfaces";
import { Button } from "./button";
import { twMerge } from "tailwind-merge";
import { Link } from "gatsby-link";

interface Props {
  data: ICardWithImage;
  isReverse?: boolean;
  children?: ReactNode;
  wrapperClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const ServicesWidthCardsImage: FC<Props> = ({
  data,
  isReverse,
  wrapperClassName,
  cardClassName,
  titleSize,
  titleClassName,
}) => {
  return (
    <div
      className={twMerge("flex flex-col lg:flex-row  gap-x-4 ", wrapperClassName)}
    >
      <div
        className={twMerge(
          `lg:w-[40%] flex flex-col justify-center pb-4 sm:p-6 pr-0 ${
            data?.isReverse ?? isReverse ? "lg:order-2" : ""
          }`,
          cardClassName
        )}
      >
        {data?.tagline && (
          <Heading
            size="h4"
            className="text-teal-950 mb-5 uppercase font-tiempos-text "
          >
            {data?.tagline}
          </Heading>
        )}
        {data?.title && (
          <Heading
            size={titleSize ?? "h1"}
            className={twMerge(" mb-5", titleClassName)}
          >
            {data?.title}
          </Heading>
        )}
        {data?.tagline2 && (
          <Heading size="h5" className="mb-4 text-green-slate-800">
            {data?.tagline2}
          </Heading>
        )}

        <div
          className="card-image-content"
          dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
        ></div>
        <div className="flex items-center gap-x-3">
          {data?.cta && data?.cta[0] &&(
            <Link to={data?.cta[0]?.link ?? "#"}>
              <Button variant="orange" className="w-fit font-mabry-pro mt-4 sm:mb-4 lg:mb-0 uppercase">
                {data?.cta[0]?.name}
              </Button>
            </Link>
          )}
          {data?.cta && data?.cta[1] && (
          
                <Link to={data?.cta[1]?.link ?? "#"}>
                  <Button variant="orange" className="w-fit font-mabry-pro mt-4 sm:mb-4 lg:mb-0 uppercase">
                    {data?.cta[1]?.name}
                  </Button>
                </Link>
        
          )}
        </div>
      </div>
      <div
        className={`lg:w-[60%] flex pt-4 lg:pt-0 ${
          data?.isReverse ?? isReverse ? "order-1" : ""
        }`}
      >
        <img
          src={data?.imageSrc}
          alt={data?.imageAlt}
          className="w-full object-cover rounded-[12px] h-auto"
        />
      </div>
    </div>
  );
};
