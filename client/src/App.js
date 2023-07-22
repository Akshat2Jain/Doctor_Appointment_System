import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
              <Route path="Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
