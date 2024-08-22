import React, { FC, ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  is_external?: boolean;
  new_tab?: boolean;
  url: string;
  children: ReactNode;
  activeClassName?: string;
}

export const Link: FC<Props> = ({
  is_external = false,
  new_tab = false,
  url = "#",
  children,
  activeClassName, //to style the active element in navbar
}) => {
  return is_external ? (
    <a href={url} target={new_tab ? "_blank" : "_self"}>
      {children}
    </a>
  ) : (
    <GatsbyLink activeClassName={activeClassName || ""} to={url}>
      {children}
    </GatsbyLink>
  );
};
