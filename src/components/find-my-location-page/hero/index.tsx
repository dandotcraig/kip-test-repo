import React from "react";
import { Heading } from "../../shared/ui/heading";
import { MapContainer } from "../../common/map-container";
import { Link } from "gatsby-link";
import { StaticImage } from "gatsby-plugin-image";

interface IProps {
  stateCode: string | null;
}

export const Hero: React.FC<IProps> = ({ stateCode }) => {
  return (
    <div className="mt-[24px] md:mt-[48px] ">
      <Link to="/find-my-location">
        <span>← Back to all locations</span>
      </Link>
      <div className="grid md:pb-6 pt-[12px] lg:grid-cols-2 gap-4 ">
        <div className="flex flex-col justify-center pb-4  sm:p-6 pr-0 text-center lg:text-start">
          <Heading size={"h1"} as="h3" className="uppercase mb-5">
            {stateCode ?? ""} Locations
          </Heading>

          {/* <Paragraph>Copy regarding {stateCode??''} facilities</Paragraph> */}
        </div>

        <div
          className={`flex w-full z-0 max-h-[500px] h-full my-auto relative`}
        >
          <StaticImage
            src={"../../../images/image-corner.svg"}
            alt="frame"
            className="w-full z-0 absolute inset-0 object-cover h-full"
          />

          <div className="z-30 w-full h-[500px] p-4">
            <MapContainer myLocation />
          </div>
        </div>
      </div>
    </div>
  );
};
