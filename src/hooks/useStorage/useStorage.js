import { useCallback, useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
     return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
     return useStorage(key, defaultValue, window.sessionStorage)
}

function useStorage(key, defaultValue, storageObject){
     const [value, setValue] = useState(() => {
          const storageValue =  storageObject.getItem(key)
          if(storageValue){
               return JSON.parse(storageValue)
          }

          return defaultValue
     })

     const remove = useCallback(() => {
          setValue(undefined)
     }, [])

     useEffect(() => {
          if(!value){
               return storageObject.removeItem(key)
          }
          storageObject.setItem(key, JSON.stringify(value))
     }, [key, value, storageObject])

     return {
          value,
          setValue,
          remove
     }
}