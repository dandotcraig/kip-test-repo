import React from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import BioCard from "../../shared/ui/bioCard";
import { graphql, useStaticQuery } from "gatsby";
import useBrowserWidth from "../../../hooks/useBrowserWidth";

export const TeamCards = () => {
  const width = useBrowserWidth();
  const sourceData = useStaticQuery(graphql`
    query sourceTeamQuery {
      allTeamJson {
        nodes {
          name
          bio
          state
          title
          detail
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
          imgAlt
          height
        }
      }
    }
  `);
  const data = sourceData.allTeamJson.nodes;
  const firstTwoCards = data.slice(0, 2);
  const teamsCards = data.slice(2);

  const setCenteredPosition = (item: any) => {
    let TEAM_MEMBERS: any = {
      "damien towner": true,
      "andie collishaw": true,
      "marnie gray-tuapawa": true,
      "skye williams": true,
      "luke andrews": true,
      "elizabeth bass": true,
      "georgia newman": true,
      "meg gill": true,
      "sarah trevethan": true,
      "ami wilson": true,
      "ruby twyman": true,
    };

    let flag = false;
    if (width > 1526 && TEAM_MEMBERS[item.name.toLowerCase()]) {
      flag = true;
    }
    return flag;
  };

  console.log("consoled data here ???????????",sourceData);
  
  return (
    <Section>
      <Container>
        <div className=" grid md:grid-cols-2  gap-x-3 gap-y-4 mb-4">
          {firstTwoCards?.map((item: any, index: number) => (
            <BioCard
              key={index}
              name={item.name}
              bio={item.bio}
              state={item.state}
              title={item.title}
              detail={item.detail}
              imgSrc={item.image}
              imgAlt={item.imgAlt}
              height={item.height}
              rectangle
            />
          ))} 
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-x-3 gap-y-4">
          {teamsCards?.map((item: any, index: number) => (
            <BioCard
              key={index}
              name={item.name}
              bio={item.bio}
              state={item.state}
              title={item.title}
              detail={item.detail}
              imgSrc={item.image}
              imgAlt={item.imgAlt}
              rectangle={setCenteredPosition(item)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
