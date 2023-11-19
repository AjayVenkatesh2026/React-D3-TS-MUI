import { useEffect, useState } from "react";
import { TDimensions } from "../types/MainPage";

const useWindowResize = ({ callback = (_: TDimensions) => {} }) => {
  const [windowSize, setWindowSize] = useState<TDimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      setWindowSize(newDimensions);
      callback(newDimensions);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
};

export default useWindowResize;
