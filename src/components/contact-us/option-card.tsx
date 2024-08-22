import React, { useEffect, useState } from "react";
import { Heading } from "../shared/ui/heading";
import { Paragraph } from "../shared/ui/paragraph";
import { Button } from "../shared/ui/button";
import { Tooltip } from "react-tooltip";

export const OptionCard = ({ data }: any) => {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  useEffect(() => {
    if (copySuccessMessage) {
      const timer = setTimeout(() => {
        setCopySuccessMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [copySuccessMessage]);
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("Hello@Kip.com.au");
      setCopySuccessMessage(`Email address copied`);
      setInstructions("");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  const openZendeskChat = () => {
    // Open Zendesk chat window
    if (typeof window.zE !== "undefined") {
      window.zE.activate();
    }
  };
  return (
    <>
      <div
        className={`w-full p-6 ${
          data?.backgroundColor ?? "bg-[#C3D7EE]"
        } rounded-xl relative`}
      >
        <div className="flex justify-center mb-8">
          <img src={data?.icon} />
        </div>
        <Heading
          as="h5"
          size="h5"
          className="uppercase font-mabry-pro font-bold leading-6 mb-6 text-primary text-center "
        >
          {data.title}
        </Heading>
        <div className="md:min-h-[150px] justify-center flex flex-col items-center md:block text-[14px]">
          <div>
            <Paragraph className={`text-[#0B4141] `}>{data?.tagline}</Paragraph>
          </div>
          <div className="md:mt-[20px] mt-[8px] ">
            <Paragraph>{data?.time}</Paragraph>
          </div>
          <div className="md:mt-[20px] mt-[8px] ">
            <Paragraph>{data?.message}</Paragraph>
          </div>
        </div>

        {data?.callUs && (
          <Paragraph className="font-bold leading-6 text-primary flex justify-center items-center md:block mt-[10px]">
            Call us on
            <a href="tel:1800951926" className="underline ml-[10px]">
              1800 951 926
            </a>
          </Paragraph>
        )}
        {data.btn && (
          <>
            {data.btn === "Email us" ? (
              <div className="flex mx-auto flex-col justify-center gap-1">
                {/* <Button className="bg-secondary font-mabry-pro p-3.5 mt-[10px]">
                  <a href="mailto: Hello@Kip.com.au"> {data.btn}</a>
                </Button> */}
                <Paragraph className="font-bold leading-6 text-primary flex justify-center items-center md:block mt-[10px]">
                  Email us
                  <a
                    href="mailto: Hello@Kip.com.au"
                    className="underline ml-[10px]"
                  >
                    Hello@Kip.com.au
                  </a>{" "}
                  or{" "}
                  <span
                    className="cursor-pointer underline"
                    onClick={handleEmailClick}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={instructions}
                  >
                    Copy email address
                    <Tooltip id="my-tooltip" events={["click"]}>
                    {copySuccessMessage}
                  </Tooltip>
                  </span>
                  
                </Paragraph>
              </div>
            ) : (
              <Button
                onClick={openZendeskChat}
                className="bg-secondary font-mabry-pro flex mx-auto justify-center p-3.5 mt-[10px]"
              >
                {data.btn}
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
};
