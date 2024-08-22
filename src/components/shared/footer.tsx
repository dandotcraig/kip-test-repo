import React, { FC, useState } from "react";
import { Section } from "./section";
import { Container } from "./container";
import { Link } from "gatsby";
import Logo from "../icons/logo";
import { FooterData } from "../../data/footerData";
import { Paragraph } from "./ui/paragraph";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { globalHistory } from "@reach/router";
import { Heading } from "./ui/heading";

interface Props {
  data: FooterData;
}

export const Footer: FC<Props> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [active, setActive] = useState(false);
  const path = globalHistory.location.pathname;

  const pathName = path?.slice(0, path?.length - 1);
  const { navigation } = data;

  return (
    <div className="bg-primary">
      <Container>
        <footer className="pl-1 pb-8 md:pb-10 pt-12 sm:flex justify-between gap-x-16 items-center">
          <div className="sm:w-[40%] md:w-1/3 ">
            <div>
              <Link className="flex items-end " to="/">
                <Logo width="140px" height="50px" />
              </Link>
              <Paragraph className="text-white text-xs mt-4 max-w-[227px] ">
                The happiness of your furry family member is our number one
                priority.
              </Paragraph>
            </div>
            <div>
              <Paragraph className="text-white text-[18px] pb-1 pt-4 ">
                CONTACT US
              </Paragraph>
              <div className="text-white flex flex-col gap-2 ">
                <div>
                  <span className="text-xs">General enquiries:</span>
                  <a
                    href="tel:1800951926"
                    className="underline cus-hover-opacity ml-1 text-xs "
                  >
                    {data.tel}
                  </a>{" "}
                </div>
                <div className="text-xs">
                  <span>Center enquiries:</span>
                  <button
                    className="ml-1 underline cus-hover-opacity  "
                    onClick={scrollToTop}
                  >
                    Click here
                  </button>
                </div>
                <div className="text-xs">
                  <span>Email:</span>
                  <a
                    href="mailto:Hello@kip.com.au"
                    className="ml-1 underline cus-hover-opacity "
                  >
                    {data.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex justify-between  mt-5 gap  sm:mt-0">
            <div>
              <ul>
                {navigation[0]?.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={` ${
                      pathName === link.url
                        ? "bg-white bg-opacity-5 rounded-xl"
                        : "cus-hover-opacity"
                    } cus-hover-opacity text-white text-sm font-mabry-pro font-normal leading-5 gap-y-2 w-48 py-1 px-2 mr-2 sm:py-2`}
                  >
                    <Link onClick={() => setActive(true)} to={link.url}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 sm:mt-0">
              <ul>
                {navigation[1]?.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={` ${
                      pathName === link.url
                        ? "bg-white bg-opacity-5 rounded-xl"
                        : "cus-hover-opacity"
                    } cus-hover-opacity text-white text-sm font-mabry-pro font-normal leading-5 gap-y-2 w-48 py-1 px-2  sm:py-2`}
                  >
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
        <div className="md:pt-6 pb-12 sm:pb-5">
          <div className="border-t-2 border-emerald-200 pb-6  mx-auto" />
          <div className="flex justify-between  mx-auto ">
            <Paragraph className="text-center text-xs text-emerald-200">
              Kip Happy Stays © 2024
            </Paragraph>
            <div className="flex gap-4">
              <Link to="https://www.facebook.com/KipHappyStays">
                <Facebook />
              </Link>
              <Link to="https://www.instagram.com/KipHappyStays/">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
