import { useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopy(){
     const [value, setValue] = useState()
     const [success, setSuccess] = useState()

     const copyToClipboard = (text) => {
          const result = copy(text)
          if(result){
               setValue(text)
          }
          setSuccess(result)
     }

     return {
          copyToClipboard,
          value,
          success
     }
}