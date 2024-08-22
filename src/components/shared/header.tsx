import React, { FC, useState, useEffect } from "react";
import { Section } from "./section";
import { Container } from "./container";
import Logo from "../icons/logo";
import Person from "../icons/person";
import Menu from "../icons/menu";
import { Link } from "gatsby";
import { MenuDrawer } from "./menu-drawer";
import OutsideClickHandler from "react-outside-click-handler";
import { Close } from "../icons/close";
import ContactUS from "../icons/contactus";
import { globalHistory } from "@reach/router"
interface Props {}

export const Header: FC<Props> = () => {
  const [isMenu, setIsMenu] = useState(false);
  const path = globalHistory.location.pathname
  useEffect(() => {
    if (isMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenu]);

  useEffect(() => {
    setIsMenu(false);
  }, [path]);
  return (
    <Section>
      <div className="bg-primary fixed w-full  z-[999] top-0">
        <Container>
          <OutsideClickHandler onOutsideClick={() => setIsMenu(false)}>
            <div>
              <header className="py-4 flex items-center justify-between">
                <Link className="pr-1" to="/">
                  <Logo />
                </Link>
                <div className="flex gap-x-2 items-center">
                  <Link to="/contact">
                    <button className="cus-hover-opacity flex items-center gap-x-2 font-mabry-pro text-xsm font-normal leading-4.5 text-white mr-3">
                      <ContactUS />
                      <span className="hidden sm:block">Contact us</span>
                    </button>
                  </Link>
                  <Link to="https://portal.petbooking.com.au/login">
                    <button className="flex items-center gap-x-2 border border-solid border-dark-green-25 rounded-xl px-3 py-2 font-inter text-base font-semibold text-white shadow-sm bg-white bg-opacity-10 hover:bg-opacity-0 transition-all">
                    <Person />
                    Log in
                  </button></Link>
               
                  <button
                    aria-label="toggle menu button"
                    className="border border-solid border-gray-200 rounded-xl shadow-sm bg-white bg-opacity-10 hover:bg-opacity-0 transition-all p-3"
                    onClick={() => setIsMenu(!isMenu)}
                  >
                    {isMenu ? <Close fill="#ffff" /> : <Menu />}
                  </button>
                </div>
              </header>
              <MenuDrawer isMenu={isMenu} />
            </div>
          </OutsideClickHandler>
        </Container>
      </div>
    </Section>
  );
};
