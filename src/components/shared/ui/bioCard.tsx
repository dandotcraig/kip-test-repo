import React from "react";
import { Heading } from "./heading";
import { IBioCard } from "../../teamspage/bios/interface";
import { Paragraph } from "./paragraph";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BioCard: React.FC<IBioCard> = ({
  name,
  bio,
  title,
  detail,
  imgSrc,
  imgAlt, 
  state,
  rectangle,
}) => {
  const image: any = getImage(imgSrc);

  return (
    <div className="p-4 bg-white flex flex-col gap-3 rounded-xl overflow-hidden shadow-xl">
      <div className="max-h-80 h-full overflow-hidden rounded-xl">
        <GatsbyImage
          image={image}
          alt={imgAlt}
          className="w-full h-[212px]"
          objectPosition={rectangle ? "center" : "top"}
        />
      </div>
      <div className="flex justify-between gap-[8px] flex-col ">
        <div>
          <Heading
            as="p"
            size="h4"
            className="font-mabry-pro text-[16px] font-[900] "
          >
            {name}
          </Heading>
          <Paragraph className="text-[16px] font-[] ">{title}</Paragraph>
          <div className="flex items-center gap-1">
            <Paragraph className="font-mabry-pro sm:text-[14px] text-[1rem] ">
              {bio}
            </Paragraph>
            <Paragraph className="font-mabry-pro sm:text-[14px] text-[1rem]  text-end ">
              {state}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
