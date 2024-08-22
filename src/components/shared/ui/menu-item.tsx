import React, { useState, FC, useEffect } from "react";
import { Paragraph } from "./paragraph";
import ChevronDown from "../../icons/chevron-down";
import Expand from "react-expand-animated";
import { INavItems } from "../../../data/headerData";
import { Link } from "./link";
import ArrowRightIcon from "../../icons/arrow-right";
import ChevronUp from "./chevron-up";
import LocationIcon from "../../icons/location";
interface IMenuItem {
  id: number;
  item: INavItems;
  pathName: string;
}
export const MenuItem: FC<IMenuItem> = ({ item, id, pathName }) => {
  const [isSubMenu, setIsSubMenu] = useState(false);

  useEffect(() => {
    setIsSubMenu(false);
  }, [pathName]);

  return (
    <li key={id} className="cursor-pointer mb-4">
      <div
        className={`py-3 flex justify-between active:bg-white active:bg-opacity-5 active:rounded-xl items-center px-4 ${
          !!pathName.includes(
            item?.value === "about"
              ? pathName === "/team"
                ? "team"
                : item.value
              : item?.value
          )
            ? "bg-white bg-opacity-10 rounded-xl"
            : "cus-hover-opacity"
        }`}
        onClick={() => {
          setIsSubMenu(!isSubMenu);
        }}
      >
        <div className="flex items-center gap-x-2 cus-hover-opacity">
          <div>{item?.icon}</div>
          <Paragraph className="text-white text-sm leading-5 font-mabry-pro font-normal">
            {item?.label}
          </Paragraph>
        </div>
        <div>{isSubMenu ? <ChevronUp /> : <ChevronDown />}</div>
      </div>
      <Expand duration={150} open={isSubMenu}>
        <ul className="ml-6 pr-1 mt-2 border-white border-opacity-10  border-l-[2px]">
          {item?.items?.map((link, idx) => {
            const isAllLocations =
              link?.label === "All Locations" ||
              link?.value === "All Locations";
            // const url = link?.link ? link?.link : `/find-my-location/?location_state=${link?.value.replace(/ /g, "-")}`;
            const url = link?.link
              ? link?.link
              : isAllLocations
              ? "/find-my-location"
              : `/find-my-location/?location_state=${link?.value.replace(
                  / /g,
                  "-"
                )}`;
            return (
              <li
                key={idx}
                className={`w-full py-2 active:bg-white active:bg-opacity-5 active:rounded-xl mx-1 px-3 ${
                  pathName === link?.link
                    ? "bg-white bg-opacity-10 rounded-xl"
                    : "cus-hover-opacity"
                }`}
              >
                <Link url={url}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-2">
                      <div>
                        {link?.icon?.fields?.file?.url ? (
                          <LocationIcon />
                        ) : (
                          link?.icon
                        )}
                      </div>
                      <Paragraph className="text-white text-sm leading-5 font-mabry-pro font-normal">
                        {link?.name || link?.label}
                      </Paragraph>
                    </div>
                    <div>
                      <ArrowRightIcon />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Expand>
    </li>
  );
};
