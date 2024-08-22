import React from "react";
import { EmptyCard } from "../../shared/ui/empty-card";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { graphql, useStaticQuery } from "gatsby";

export const EmptyCards = () => {
  const sourceData = useStaticQuery(graphql`
    query emptyCardsQuery {
      allEmptyCardsJson {
        nodes {
          title
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 50
              )
            }
          }
        }
      }
    }
  `);
  const data = sourceData.allEmptyCardsJson.nodes;
  return (
    <Section>
      <Container>
        <div className="grid sm:grid-cols-3 gap-4 ">
          {data?.slice(0, 3)?.map((item: any, index: number) => (
            <EmptyCard key={index} data={item} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 mt-4 gap-4">
          {data?.slice(3, 5)?.map((item: any, index: number) => (
            <EmptyCard key={index} data={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
