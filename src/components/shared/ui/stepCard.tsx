import React from "react";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import RichText from "../RichText";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const StepCard: React.FC<any> = ({
  detailPet,
  name,
  tagline,
  detail,
  imgAlt,
  slug,
}) => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulLocationPage {
        edges {
          node {
            sections {
              ... on ContentfulStepperCards {
                id
                stepper {
                  title
                  image {
                    gatsbyImageData
                  }
                }
              }
            }
            slug
            title
          }
        }
      }
     
    }
  `);
  
  const filteredQueryData = queryData?.allContentfulLocationPage?.edges?.filter(
    (item: any) => {
      return item?.node.title === slug;
    }
  );
  const filteredMost = filteredQueryData[0]?.node?.sections?.filter(
    (item: any) => Object.keys(item).length !== 0
  );

  const mapped = filteredMost?.map((item: any) => {
    return [
      item?.stepper.map((node: any) => {
        if (node.title === name) {
          return {
            node,
          };
        }
      }),
    ];
  });
  const flattenedArray = mapped?.flatMap((innerArray: any) => innerArray)?.reduce((acc: any, innerArray: any) => acc.concat(innerArray), []);
  const requiredArray = flattenedArray?.filter((item: any) => {
    return item !== undefined;
  });
  const requiredImage = requiredArray[0]?.node?.image ??'';
  return (
    <div className="   bg-white rounded-xl lg:max-w-[484px]  shadow-sm border border-neutral-200">
      <GatsbyImage
        image={requiredImage?.gatsbyImageData}
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

export default StepCard;
