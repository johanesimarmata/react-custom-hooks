import React from "react";
import useWindowSize from "./useWindowSize";

export default function ExampleUseWindowSize(){
     const {
          width,
          height
     } = useWindowSize()

     return(
          <React.Fragment>
               <div>Width: {width}</div>
               <div>Height: {height}</div>
          </React.Fragment>
     )
}