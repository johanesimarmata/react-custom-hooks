import { useSessionStorage, useLocalStorage } from "./useStorage";

export default function ExampleUseStorage(){
     const {
          value : localValue,
          setValue: setLocalValue,
          remove: removeLocalValue
     } = useLocalStorage('mylocal', 'Local')
     const {
          value : sessionValue,
          setValue: setSessionValue,
          remove: removeSessionValue
     } = useSessionStorage('mysession', 'Session')

     return (
          <div>
               <div>Local Storage value: {localValue}</div>
               <button onClick={() => setLocalValue("New Local")}>Update Local Storage Value</button>
               <button onClick={removeLocalValue}>Remove Local Storage</button>
               
               <div>Session Storage value: {sessionValue}</div>
               <button onClick={() => setSessionValue("New Session")}>Update Session Storage Value</button>
               <button onClick={removeSessionValue}>Remove Session Storage</button>
          </div>
     )
}