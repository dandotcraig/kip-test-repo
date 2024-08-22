import React, { FC, ReactNode, useState } from "react";
import { Heading } from "./heading";
import { ICardWithImage } from "../../homepage/what-makes-different/interfaces";
import { Button } from "./button";
import { twMerge } from "tailwind-merge";
import { Link } from "gatsby-link";
import RichText from "../RichText";
import { Paragraph } from "./paragraph";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

interface Props {
  data: ICardWithImage;
  children?: ReactNode;
  wrapperClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isForm?: boolean;
}

export const CardWithImage: FC<any> = ({
  data,
  showButton,
  wrapperClassName,
  cardClassName,
  titleSize,
  titleClassName,
  parent,
  slug,
  isForm,
}) => {
  let matchingImage;
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulLocationPage {
        edges {
          node {
            sections {
              ... on ContentfulTextWithImage {
                id
                image {
                  gatsbyImageData
                  url
                }
              }
            }
            title
          }
        }
      }
      staticImages: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  if (parent === "location") {

    const modifiedUrl = `https:${data?.image?.fields?.file?.url}`;

    const filteredNodes = queryData?.allContentfulLocationPage.edges.filter(
      (item: any) => item?.node.title === slug
    );

    const mostFiltered = filteredNodes[0]?.node.sections.filter(
      (obj: any) => Object.keys(obj).length > 0
    );

    const requiredArray = mostFiltered?.filter(
      (item: any) => item.image?.url === modifiedUrl
    );

    matchingImage = requiredArray[0]?.image.gatsbyImageData;
  } else if (parent === "service") {

    const pathSegments = data?.imageSrc?.split("/");
    const ImagePath = pathSegments?.[pathSegments?.length - 1];
    matchingImage = queryData.staticImages.nodes.find(
      (node: any) => node.relativePath === ImagePath
    );
  } else {
    const pathSegments = data?.imageSrc?.split("/");
    const ImagePath = pathSegments?.[pathSegments?.length - 1];
    const lastHyphenIndex = ImagePath?.lastIndexOf("-");
    const modifiedImagePath =
      ImagePath?.substring(0, lastHyphenIndex) +
      ImagePath?.substring(ImagePath?.lastIndexOf("."));

    matchingImage = queryData.staticImages.nodes.find(
      (node: any) => node.relativePath === modifiedImagePath
    );
  }
  return (
    <div className={twMerge("grid lg:grid-cols-2 gap-4 ", wrapperClassName)}>
      <div
        className={twMerge(
          `flex flex-col justify-center sm:px-6 pr-0 text-start ${
            data?.imageOnLeft ? "lg:order-2" : ""
          }`,
          cardClassName
        )}
      >
        {data?.title && (
          <Heading
            size={titleSize ?? "h1"}
            as={data?.isTopMostSection ? "h1" : "h2"}
            className={twMerge("uppercase mb-5", titleClassName)}
          >
            {data?.title}
          </Heading>
        )}
        {data?.tagline && (
          <Heading
            size="h4"
            as={data?.isTopMostSection ? "h2" : "p"}
            className="text-teal-950 mb-5 "
          >
            {data?.tagline}
          </Heading>
        )}
        {data?.tagline2 && (
          <Heading size="h5" as="h3" className="mb-4 text-green-slate-800">
            {data?.tagline2}
          </Heading>
        )}
        {data?.subtitle && (
          <Heading size="h5" as="h3" className="mb-4 text-green-slate-800">
            {data?.subtitle}
          </Heading>
        )}
        {data?.desc && <Paragraph>{data?.desc}</Paragraph>}
        {parent === "location" ? (
          <div className="card-image-content">
            <RichText richText={data?.content} options />
          </div>
        ) : (
          <div
            className="card-image-content text-start sm:text-start"
            dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
          ></div>
        )}

        {showButton ? (
          <div className=" py-[20px] flex justify-end items-end ">
            <Link to="https://www.livehire.com/careers/kip/jobs">
              <Button
                variant="orange"
                className="w-fit font-mabry-pro mt-4 sm:mb-4 lg:mb-0 uppercase"
              >
                SEE JOBS AT KIP
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-x-3">
            {!!data?.buttons?.length &&
              data?.buttons?.map((btn: any, idx: number) => {
                return (
                  <Link
                    to={parent === "location" ? btn?.fields?.link : btn?.link}
                    key={idx}
                  >
                    <Button
                      variant="orange"
                      className="w-fit font-mabry-pro mt-4 sm:mb-4 lg:mb-0 uppercase"
                    >
                      {parent === "location" ? btn?.fields?.text : btn?.text}
                    </Button>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
      <div
        className={`flex ${
          data?.frameIncluded && "p-4 "
        } z-0 max-h-[500px] my-auto relative ${
          data?.imageOnLeft ? "order-1" : ""
        }`}
      >
        {data?.frameIncluded && (
          <StaticImage
            src={"../../../images/image-corner.svg"}
            alt="frame"
            className="w-full z-0 absolute inset-0 object-cover h-full "
          />
        )}
        {parent === "location" ? (
          <GatsbyImage
            image={matchingImage}
            alt={data?.title ?? ""}
            className="z-30 w-full object-cover rounded-[12px] h-[300px] sm:h-[468px]"
          />
        ) : parent === "service" ? (
          <GatsbyImage
            image={matchingImage?.childImageSharp?.gatsbyImageData}
            alt={data?.title ?? ""}
            className="w-full h-[300px] sm:h-[468px] object-cover rounded-2xl"
          />
        ) : (
          <GatsbyImage
            image={matchingImage?.childImageSharp?.gatsbyImageData}
            alt={data?.title ?? ""}
            className="w-full h-[300px] sm:h-[468px] object-cover rounded-2xl"
          />
        )}
        {isForm && (
          <StaticImage
            className="z-20"
            src={"../../../images/form-hero.webp"}
            alt=""
          />
        )}
      </div>
    </div>
  );
};
