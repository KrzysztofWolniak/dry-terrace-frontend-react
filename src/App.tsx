import React from "react";
import "./App.css";
import Icon from "./components/Icon/Icon";
import {  DiAndroid } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <Icon size="20vh" color="red" text="Hello" icon={DiAndroid} />
     
    </div>
  );
}

export default App;
