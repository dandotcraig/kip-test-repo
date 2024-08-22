import React, { useState } from "react";
import { Heading } from "./heading";
import { IPricing } from "../../all-locations/pricing/interface";
import { Button } from "./button";
import { Link } from "gatsby-link";
import { Paragraph } from "./paragraph";
import { Plus } from "../../icons/plus";
import { Dog } from "../../icons/dog";
import { Close } from "../../icons/close";
import MinusIcon from "../../icons/minus";
import Expand from "react-expand-animated";
import CheckLg from "../../icons/check-lg";
import RichText from "../RichText";
import OutsideClickHandler from "react-outside-click-handler";

const PricingCard: React.FC<IPricing> = ({ tag, title, price, imgSrc, imgAlt, CTA, CTALink, variant, order, faqTitle, faqDescription, description }) => {
  const [active, setActive] = useState<any>(null);
  return (
    <div className={`${variant === "Dark" ? "bg-green-slate-800" : "bg-neutral-50"} ${order ?? ""}  px-2 py-5 rounded-xl border overflow-hidden border-solid border-neutral-200  shadow-sm relative `}>
      {tag && <div className="font-mabry-pro absolute  top-2 inline-flex items-center left-2 bg-dark-green-75 overflow-hidden rounded-lg px-3 py-1 text-sm font-normal leading-4.5 border border-dark-green-25 text-white">{tag}</div>}
      <div className="flex flex-col gap-4 items-center ">
        <div className=" flex justify-center items-center w-16 h-16">
          <img src={imgSrc} alt={imgAlt} className=" w-full h-full" />
        </div>
        <Heading size="h5" as="p" className={`${variant === "Dark" ? "text-white" : "text-green-slate-800"}  leading-6 uppercase font-mabry-pro text-center`}>
          {title}
        </Heading>
        <Heading size="h4" as="p" className={`${variant === "Dark" ? "text-white text-center" : "text-green-slate-800"} font-bold font-mabry-pro leading-normal text-center tracking-wider`}>
          {price}
        </Heading>
        <button
          type="button"
          onClick={() =>
            setActive({
              title: faqTitle,
              key: faqTitle.toLocaleLowerCase().split("-"),
            })
          }
          className="flex cursor-pointer items-center rounded-xl border border-solid border-greenslate-250 px-5 py-4"
        >
          <div className="mr-5">
            <Plus className={`${variant === "Dark" ? "fill-white" : "fill-green-slate-800"} `} />
          </div>
          <div className="mr-[12px]">
            <Dog className={`${variant === "Dark" ? "fill-white" : "fill-primary-dark"} `} />
          </div>
          <Paragraph className={`${variant === "Dark" ? "text-white" : "text-teal-950 "} font-bold font-mabry-pro text-base`}>{faqTitle}</Paragraph>
        </button>
        <div>
          <Link to={CTALink ?? "/contact"}>
            <Button className="uppercase flex items-center justify-center font-mabry-pro px-4 py-2.5 text-base font-bold " variant="orange">
              {CTA}
            </Button>
          </Link>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setActive(null)}>
        <Expand open={!!active} duration={100}>
          <div className={` ${!!active ? "" : "hidden"} absolute inset-0 bg-white m-2 rounded-xl border overflow-hidden border-solid border-neutral-200`}>
            <div className="px-5 py-4 flex w-full items-center justify-between">
              <div className="flex items-center ">
                <div className="mr-5">
                  <MinusIcon onClick={() => setActive(null)} className="fill-green-slate-800 cursor-pointer" />
                </div>
                <div className="mr-[12px]">
                  <Dog className="fill-primary-dark" />
                </div>
                <Paragraph className="font-bold font-mabry-pro text-base text-teal-950">{active?.title}</Paragraph>
              </div>
              <Close className="cursor-pointer" onClick={() => setActive(null)} width="16" height="16" />
            </div>
            <div className="pl-14 pr-5 " style={{ maxHeight: "250px", overflowY: "auto" }}>
              <ul>
                <li className="flex items-center space-x-3 py-1 mb-1">
                  {/* <CheckLg /> */}
                  <ul className="font-mabray-pro text-black text-sm font-medium">
                    <RichText richText={description} options />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Expand>
      </OutsideClickHandler>
    </div>
  );
};

export default PricingCard;
