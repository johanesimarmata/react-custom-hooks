import Cookies from "js-cookie";
import { useCallback, useState } from "react";

export default function useCookie(cookieName, defaultValue){
     const [value, setValue] = useState(() => {
          const cookie = Cookies.get(cookieName)
          if(cookie){
               return cookie
          }
          Cookies.set(cookieName, defaultValue)
          return defaultValue
     })

     const updateCookie = useCallback((newValue, options) => {
          Cookies.set(cookieName, newValue, options)
          setValue(newValue)
     }, [cookieName])

     const deleteCookie = useCallback(() => {
          Cookies.remove(cookieName)
          setValue(null)
     }, [cookieName])

     return {
          value,
          updateCookie,
          deleteCookie
     }
}