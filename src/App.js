import './App.css';
import { FirstChild } from "./components/FirstChild";
import * as React from "react";
import XoGame from "./components/XoGame";

export const NameContext = React.createContext(null)

const App = ({name}) => (
    <div className="App">
        <NameContext.Provider value={name}>
            <FirstChild/>
            <XoGame />
        </NameContext.Provider>
    </div>
)


App.defaultProps = {
    name: 'dan'
}

export default App;
