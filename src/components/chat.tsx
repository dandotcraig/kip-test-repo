import { useEffect } from "react";

const Zendesk = () => {

  useEffect(() => {
    // Load the Zendesk Chat script
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src =
      "";
    script.async = true;
    document.head.appendChild(script);

    // Open the chat widget when the script is loaded
    script.onload = () => {
      window?.zE("webWidget", "open");
    };
  }, []);


  return null;
};

export default Zendesk;
