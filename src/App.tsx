import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Home } from "./routes/home/Home";
import { Icons } from "./routes/icons/Icons";
import { Items } from "./routes/items/Items";

function App() {
  return (
    <div className="App">
       <NavigationBar></NavigationBar> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icons" element={<Icons />} />
      <Route path="/items" element={<Items />} />

      </Routes>
    </div>
  );
}

export default App;
