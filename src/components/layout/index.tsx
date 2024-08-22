import React, { FC, ReactNode } from "react";
import { Header } from "../shared/header";
import { Footer } from "../shared/footer";
import footerData from "../../data/footerData";
import Booknow from "../shared/ui/booknow";
import ChatBox from "../common/chat-box";
interface Props {
  children?: ReactNode;
  contact?: boolean;
} 
export const Layout: FC<Props> = ({ children, contact }) => {
  
  return (
    <div>
      <Header />
      <main className="pt-[74px] container mx-auto relative">
        {children}
        {/* uncomment the line below to load Zendesk chat script */}
        <ChatBox />
      </main>
      {/* {!contact && <ReviewCards />} */}
      <Booknow />

      <Footer data={footerData} />
    </div>
  );
};
