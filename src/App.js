import React from "react";

import { Route, Routes } from "react-router";

import HomePage from "./Pages/home";
import AboutUs from "./Pages/about";
import Login from "./Pages/login";
import Signup from "./Pages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact element={<HomePage/>} path="/"></Route>
        <Route element={<AboutUs/>} path="/about"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Signup/>} path="/signup"></Route>
      </Routes>
    </div>
  );
}

export default App;
