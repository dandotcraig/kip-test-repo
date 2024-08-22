import React, { useEffect } from "react";
import { Section } from "../section";
import { Container } from "../container";
import ImageSlider from "./imageSlider";
import booknowData from "../../../data/booknow";
import { Heading } from "./heading";
import { Button } from "./button";
import { Paragraph } from "./paragraph";
import { Link } from "gatsby-link";
import { useLocation } from "@reach/router";
import { linksData, linksData2 } from "../../../data/bookNowLinksData";
import { navigate } from "gatsby";
import { v4 as uuidv4 } from "uuid";

const Booknow: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const locationName = pathSegments[pathSegments.length - 2];

  const handleClick = (path: any) => {
    navigate(path);
  };
  const images = booknowData.map((item) => item.imageSrc);
  const btn2: any = {
    bayside: "bayside",
    "dog-daycare-sydney": "dog-daycare-sydney",
    "dog-daycare-brisbane": "dog-daycare-brisbane",
    "dog-daycare-adelaide": "dog-daycare-adelaide",
  };
  const BUTTON_TEXT: any = {
    "sell-your-business": "Contact us",
    team: "Join the team",
    bayside: "New daycare customers",
    "dog-daycare-sydney": "new customers",
    "dog-daycare-brisbane": "New Customers",
    bayswater: "Book my trial",
    blackburn: "Book my trial",
    brunswick: "Book my trial",
    newtown: "Book my trial",
    alexandria: "Book my trial",
    kew: "Book my trial",
    fairfield: "Book My trial",
    hobart: "Book my trial",
    "west-hindmarsh": "Book my trial",
    marrickville: "Book my trial",
    newstead: "Book my trial",
    "dog-daycare-adelaide": "Find your local",
  };

  return (
    <div>
      <Container>
        <div className="w-full bg-bone-200 pb-16 rounded-t-lg">
          <div className="flex  flex-col justify-center items-center p-8">
            <Heading
              size="h2"
              as="h3"
              className={
                locationName === "team"
                  ? "max-w-sm font-bold text-center"
                  : "max-w-xs font-bold text-center"
              }
            >
              {locationName === "team"
                ? "Do you see yourself joining the team?"
                : "Ready to book in a happy stay?"}
            </Heading>
            <Paragraph className="text-primary font-bold text-xl my-4">
              Let's go
            </Paragraph>
            <div className="flex gap-x-4">
              <Link
                to={
                  linksData[locationName] ??
                  "/"
                }
              >
                <button className="link bg-secondary font-bold text-white rounded-xl inline-block px-4 py-3.5 text-base leading-[1] hover:bg-[#5F062F] active:bg-opacity-50 transition-all duration-300 hover:bg-opacity-90 uppercase font-mabry-pro">
                  {BUTTON_TEXT[locationName] ?? "book now"}
                </button>
              </Link>
              {locationName === btn2[locationName] && (
                <Link to={linksData2[locationName]}>
                  <Button
                    variant="orange"
                    className="uppercase font-mabry-pro "
                  >
                    {locationName === "bayside"
                      ? "Dog Boarding Customers"
                      : locationName === "dog-daycare-adelaide"
                      ? "Existing Customers"
                      : locationName === "dog-daycare-brisbane"
                      ?  "Existing Customers" : locationName === "dog-daycare-sydney" ? "Existing Customers" 
                      : "Members login"}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <ImageSlider />
        </div>
      </Container>
    </div>
  );
};
// DO NOT REMOVE THE BELOW COMMENT
//locationName === "dog-daycare-sydney" ? "Members Login" : locationName === "dog-daycare-melbourne" ? "Members Login" : locationName === "dog-daycare-brisbane" ? "Members Login" : "Book Now"

export default Booknow;
