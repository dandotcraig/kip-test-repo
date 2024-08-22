import React, { FC, useState } from "react";
import { NavLinks, navItems } from "../../data/headerData";
import { Paragraph } from "./ui/paragraph";
import ArrowRightIcon from "../icons/arrow-right";
import { Link } from "./ui/link";
import InfoNewIcon from "../icons/info-new";
import UsersIcon from "../icons/users";
import { globalHistory } from "@reach/router";
import { MenuItem } from "./ui/menu-item";
import { client } from "../../../lib/contentful";
interface IMenuDrawer {
  isMenu: boolean;
}
export const MenuDrawer: FC<IMenuDrawer> = ({ isMenu }) => {
  const [locations, setLocations] = useState<any>([]);
  const path = globalHistory.location.pathname;

  const pathName = path?.slice(0, path?.length - 1);

  React.useEffect(() => {
    const getData = async () => {
      try {
        let _locations = await client.getEntries({
          content_type: "singleLocation",
          include: 10,
        });
        setLocations(
          _locations?.items?.map((location) => {
            return {
              label: location?.fields?.locationName,
              value: location?.fields?.locationName,
              icon: location?.fields?.icon,
            };
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  const mergedNavItems = navItems.map((item: any) => {
    if (item.value === "locations") {
      return {
        ...item,
        items: [...item.items, ...locations],
      };
    }
    return item;
  });

  return (
    <div
      className={`fixed right-0 z-50 drawer-height  top-16.5 bg-primary p-5 .w-2/12 xl:w-3/12 transition-transform duration-150 ${
        isMenu ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div className="w-full h-full overflow-y-auto scrollbar  pb-10">
        <ul>
          {mergedNavItems?.map((item: any, idx: any) => {
            return (
              <MenuItem key={idx} item={item} id={idx} pathName={pathName} />
            );
          })}
          {NavLinks?.map((itm, id) => {
            return (
              <li key={id} className=" py-1 mb-4 ">
                <Paragraph className="text-white text-xs font-bold font-mabry-pro leading-4">
                  {itm?.title}
                </Paragraph>
                <ul>
                  {itm?.links?.map((link, id) => {
                    return (
                      <Link key={id} url={link.link}>
                        <li
                          key={id}
                          className={`py-3 mt-4 flex justify-between items-center px-4 ${
                            pathName === link.link
                              ? "bg-white bg-opacity-10 rounded-xl"
                              : "cus-hover-opacity"
                          }`}
                        >
                          <div className="flex items-center gap-x-2">
                            <div>{link?.icon}</div>
                            <Paragraph
                              className={`text-white text-sm leading-4.5 font-mabry-pro font-normal`}
                            >
                              {link?.name}
                            </Paragraph>
                          </div>
                          <div>
                            <ArrowRightIcon />
                          </div>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="w-full absolute bottom-0  left-0 right-0 flex justify-center items-center gap-x-4 bg-primary-dark py-6">
        <Link url="#">
          <InfoNewIcon />
        </Link>
        <Link url="#">
          <UsersIcon />
        </Link>
      </div> */}
    </div>
  );
};
