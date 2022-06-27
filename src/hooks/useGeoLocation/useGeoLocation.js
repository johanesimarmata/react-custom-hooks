import { useState, useEffect } from "react";

export default function useGeoLocation(options){
     const [loading, setLoading] = useState(true)
     const [error, setError] = useState()
     const [data, setData] = useState()
     const [isLoaded, setIsLoaded] = useState(false)

     useEffect(() => {
          const success = (e) => {
               setLoading(false)
               setError(false)
               setData(e.coords)
          }

          const error = (e) => {
               setError(e)
               setLoading(false)
          }
          if(!isLoaded){
               setIsLoaded(true)
               navigator.geolocation.getCurrentPosition(success, error)
               const id = navigator.geolocation.watchPosition(success, error)
               return () => navigator.geolocation.clearWatch(id)
          }
     }, [options])

     return {
          loading,
          error,
          data
     }
}