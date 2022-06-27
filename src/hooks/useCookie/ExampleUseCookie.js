import React from "react";
import useCookie from "./useCookie";

export default function ExampleUseCookie(){
     const {
          value,
          updateCookie,
          deleteCookie
     } = useCookie('mycookie', 'old cookie')

     return(
          <React.Fragment>
               <div>Cookie value: {value}</div>
               <button onClick={() => updateCookie("new cookie")}>Update Cookie</button>
               <button onClick={deleteCookie}>Delete Cookie</button>
          </React.Fragment>
     )
}