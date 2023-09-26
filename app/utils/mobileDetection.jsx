import {createContext, useContext, useEffect, useState} from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Don't forget to remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

export const useIsMobile = () => {
    const isSsrMobile = useContext(IsSsrMobileContext);
    const { width: windowWidth } = useWindowSize();
    const isBrowserMobile = !!windowWidth && windowWidth < 768;

    return isSsrMobile || isBrowserMobile;
};

export const IsSsrMobileContext = createContext(false);