import React from "react";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import RichText from "../RichText";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ServiceStepCard: React.FC<any> = ({
  detailPet,
  name,
  tagline,
  detail,
  imgAlt,
  imgSrc,
}) => {
  const queryData = useStaticQuery(
    graphql`
      query {
        staticImages: allFile(
          filter: { sourceInstanceName: { eq: "images" } }
        ) {
          nodes {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `
  );

  let matchingImage;

  const pathSegments = imgSrc?.split("/");
  const imagePath = pathSegments?.[pathSegments?.length - 1];
  matchingImage = queryData.staticImages.nodes.find(
    (node: any) => node.relativePath === imagePath
  );
  return (
    <div className="  bg-white rounded-xl lg:max-w-[484px]  shadow-sm border border-neutral-200">
      <GatsbyImage
        image={matchingImage.childImageSharp.gatsbyImageData}
        alt={imgAlt}
        className="w-full rounded-t-xl  object-cover  max-h-[200px] sm:h-full"
      />
      <div className="p-5 pb-12 flex flex-col gap-y-4">
        <Heading
          size="h5"
          as="h4"
          className="font-mabry-pro uppercase leading-6 text-green-slate-800"
        >
          {name}
        </Heading>
        {tagline && (
          <Paragraph className="text-sm text-greenslate-700 font-bold ">
            {tagline}
          </Paragraph>
        )}

        {detailPet && (
          <Paragraph className="text-greenslate-700 max-h-[247px] ">
            {detailPet}
          </Paragraph>
        )}
        <RichText richText={detail} />
      </div>
    </div>
  );
};

export default ServiceStepCard;
