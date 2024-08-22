import { useState, useEffect } from "react";

const useBrowserWidth = (): number => {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useBrowserWidth;
