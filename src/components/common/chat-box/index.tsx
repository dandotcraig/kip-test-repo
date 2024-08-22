import React, { useEffect } from "react";
import { Link } from "gatsby-link";
import { ChatBoxIcon } from "../../icons/chat-box";

const ChatBox = () => {
  useEffect(() => {
    // Check if the Zendesk Widget API script is already loaded
    if (!document.getElementById("ze-snippet")) {
      // Load Zendesk Widget API script
      const script = document.createElement("script");
      script.id = "ze-snippet";
      script.src = "";
      script.async = true;
      document.head.appendChild(script);

      // Cleanup script when component is unmounted
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  const openZendeskChat = () => {
    // Open Zendesk chat window
    if (typeof window.zE !== "undefined") {
      window.zE.activate();
    }
  };

  return null;
  // (
  //   <div className="fixed right-[15px] bottom-[15px] z-50">
  //     <button className="rounded-[100%] flex justify-center items-center p-[14px] sm:h-[52px] md:h-[73px] h-[52px] bg-[#152953] w-[52px] md:w-[76px]" onClick={openZendeskChat}>
  //       <div className="flex flex-col items-center">
  //         <div className="md:hidden">
  //           <ChatBoxIcon width="16" height="16" />
  //         </div>
  //         <div className="hidden md:block">
  //           <ChatBoxIcon width="24" height="24" />
  //         </div>
  //         <h4 className="text-[#fff] font-[700] text-[11px] md:text-[14px]">CHAT</h4>
  //       </div>
  //     </button>
  //   </div>
  // );
};

export default ChatBox;
