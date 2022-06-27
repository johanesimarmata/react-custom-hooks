import { useEffect, useRef, useState } from "react";

export default function useWindowSize(){
     const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight
     })

     useEffect(() => {
          function handleResize() {
               // Set window width/height to state
               setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
               });
          }

          window.addEventListener('resize', handleResize)
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
     })

     return windowSize
}