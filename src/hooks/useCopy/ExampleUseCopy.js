import React, { useState } from "react";
import useCopy from "./useCopy";

export default function ExampleUseCopy(){
     const {
          copyToClipboard,
          success,
          value
     } = useCopy()
     const [inputValue, setInputValue] = useState('')
     return (
          <React.Fragment>
               <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
               <button onClick={() => copyToClipboard(inputValue)}>
                    {success ? "Copied" : "Copy Text"}
               </button>
          </React.Fragment>
     )
}