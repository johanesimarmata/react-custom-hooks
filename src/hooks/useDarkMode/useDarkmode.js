import { useEffect } from "react";
import { useLocalStorage } from "../useStorage/useStorage";

export default function useDarkMode(defaultValue){
     const {
          value: darkMode,
          setValue: setDarkMode
     } = useLocalStorage('darkmode-waresix', defaultValue ? true : false)

     useEffect(() => {
          if(darkMode){
               document.body.classList.add("dark-mode")
          } else {
               document.body.classList.remove("dark-mode")
          }
     }, [darkMode])

     return {
          darkMode,
          setDarkMode
     }
}