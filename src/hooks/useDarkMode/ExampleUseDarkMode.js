import useDarkMode from "./useDarkmode";
import './darkmode.css'

export default function ExampleUseDarkmode(){
     const {darkMode, setDarkMode} = useDarkMode()
     return (
          <button
            onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
            style={{
              border: `1px solid ${darkMode ? "white" : "black"}`,
              background: "none",
              color: darkMode ? "white" : "black",
            }}
          >
            Toggle Dark Mode
          </button>
     )
}