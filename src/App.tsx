import React from "react";
import "./App.css";
import Icon from "./components/Icon/Icon";
import { DiAndroid } from "react-icons/di";
import { IconFunctionComp } from "./components/Icon/IconFunctionComp";

function App() {
  return (
    <div className="App">
      <IconFunctionComp
        size="48"
        color="red"
        text="Function "
        icon={DiAndroid}
      />

      <IconFunctionComp
        size="48"
        color="red"
        text="Function Component"
        icon={DiAndroid}
      />
      <IconFunctionComp
        size="48"
        color="red"
        text="Another Comp"
        icon={DiAndroid}
      />
      <IconFunctionComp
        size="48"
        color="red"
        text="Elo my friend"
        icon={DiAndroid}
      />
      <IconFunctionComp
        size="48"
        color="red"
        text="123123123123123123123"
        icon={DiAndroid}
      />
    </div>
  );
}

export default App;
