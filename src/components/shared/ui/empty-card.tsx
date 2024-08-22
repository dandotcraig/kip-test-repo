import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface EmptyCardProps {
  data: {
    title: string;
    image: any;
  };
}

export const EmptyCard: React.FC<EmptyCardProps> = ({ data }: any) => {
  const image: any = getImage(data.image);
  return (
    <div className="w-full h-[330px]">
      <GatsbyImage
        image={image}
        alt={data.title}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};
