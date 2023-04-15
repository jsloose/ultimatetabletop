//Saved as: Test2/App_v1.jsx

import React, { useState } from "react";
import "./Test2/App.css";

const App = () => {
  const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("cont2");
  };
  return (
    <div>
      <div className="App">CHANGE CSS STYLING WITH ONCLICK EVENT</div>
      <div className={style}>
        <button className="button" onClick={changeStyle}>
          Click me!
        </button>
      </div>
    </div>
  );
};
export default App;

