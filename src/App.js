import React from "react";

import { Route, Routes } from "react-router";

import HomePage from "./Pages/home";
import AboutUs from "./Pages/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact element={<HomePage/>} path="/"></Route>
        <Route element={<AboutUs/>} path="/about"></Route>
      </Routes>
    </div>
  );
}

export default App;
