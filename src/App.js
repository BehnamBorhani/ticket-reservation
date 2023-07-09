import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Stages from "./components/Stages/Stages";

export const NameContext = React.createContext();

function App() {
   return (
      <div className="App">
         <Header />
         <NameContext.Provider value={"Behnam"}>
            <Stages />
         </NameContext.Provider>
      </div>
   );
}

export default App;
