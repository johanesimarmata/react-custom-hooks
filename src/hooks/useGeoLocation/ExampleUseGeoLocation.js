import React from "react";
import useGeoLocation from "./useGeoLocation";

export default function ExampleUseGeoLocation(){
     const {
          loading,
          error,
          data,
     } = useGeoLocation()
     console.log(data)
     return (
          <React.Fragment>
               <div>Loading: {loading.toString()}</div>
               <div>Error: {error?.message}</div>
               {
                    !loading && 
                    <div>
                         Accuracy: {data.accuracy} <br/>
                         Altitude: {data.altitude} <br/>
                         Latitude: {data.latitude} <br/>
                         Longitude: {data.longitude} <br/>
                    </div> 
               }
          </React.Fragment>
     )
}