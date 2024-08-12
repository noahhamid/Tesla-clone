import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import ModelS from "./components/carTypes/modelS";
import Model3 from "./components/carTypes/model3";
import ModelX from "./components/carTypes/modelX";
import Cyber_truck from "./components/carTypes/cyberTruck/cyber";

const App = () => {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/carTypes/modelS" element={<ModelS />} />
          <Route path="/carTypes/model3" element={<Model3 />} />
          <Route path="/carTypes/modelX" element={<ModelX />} />
          <Route path="/carTypes/cyberTruck/cyber" element={<Cyber_truck />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
