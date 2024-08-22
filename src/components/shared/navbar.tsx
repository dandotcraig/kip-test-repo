import React, { FC } from "react";
import { Link } from "./ui/link";

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <nav>
      <Link url="/about" activeClassName="text-blue-500">
        About
      </Link>
    </nav>
  );
};
